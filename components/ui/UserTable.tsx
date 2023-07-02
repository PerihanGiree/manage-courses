import { userTypes } from "@/src/types";
import { useEffect, useState } from "react";

type PropsType = {
  headerTitles: {
    id: number;
    title: string;
  }[];
  users: userTypes.User[];
  total: number;
}

const UserTable: React.FC<PropsType> = ({headerTitles, users, total}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePrevPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = (): void => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <table className="w-full flex flex-col">
        <thead className="w-full">
          <tr className="w-full h-[15px] flex flex-row justify-around">
            {
              headerTitles.map((title) => (
                <th key={title.id}>
                  <span className="font-semibold text-[12px] mt-2  text-[#ACACAC]">{title.title}</span>
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={handlePrevPage}>Previous</button>
        <span>Page {currentPage}</span>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default UserTable;
