import { useEffect, useState } from "react";

interface User {
  id: number;
  firstName: string;
  email: string;
  // Diğer kullanıcı özellikleri buraya eklenebilir
}

const UserTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize] = useState<number>(5);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, [currentPage, searchQuery]);

  const fetchUsers = async (): Promise<void> => {
    const url = `https://dummyjson.com/api/users?page=${currentPage}&size=${pageSize}&search=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data.users || []);

    console.log(data.users);
  };

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
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
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
