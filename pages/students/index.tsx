import Button from "@/components/ui/Button";
import Avatar from "../../public/avatar.png";
import React, { use, useEffect, useState } from "react";
import UserTable from "@/components/ui/UserTable";

interface User {
  id: number;
  firstName: string;
  email: string;

  // Diğer kullanıcı özellikleri buraya eklenebilir
}
type InputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={value}
      onChange={onChange}
      className="w-[212px] h-[37px] t-[75x] px-2 border border-[#E5E5E5] rounded-lg mx-8 outline-none "
    />
  );
};
const TableTitle = [
  {
    id: 1,
    title: "Name",
  },
  {
    id: 2,
    title: "Email",
  },
  {
    id: 3,
    title: "Phone",
  },
  {
    id: 4,
    title: "Website",
  },
  {
    id: 5,
    title: "Company Name",
  },
];

const Students = () => {
  const [user, setUser] = useState<User[]>([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch("https://dummyjson.com/users").then((res) =>
      res.json()
    );
    setUser(data);
  };
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      {/**Header  */}
      <div className=" flex justify-between">
        <div className="font-semibold text-[22px]">Students List</div>
        <div className=" flex flex-row items-center justify-center ">
          <Input value={inputValue} onChange={handleInputChange} />
          <Button title="Add new Student" />
        </div>
      </div>
      <p className="w-full h-[2px] bg-[#E5E5E5] mt-5"></p>
      {/**Table Header */}
      <div className="w-full h-[15px] top-36  flex flex-row justify-around">
        {TableTitle.map((item) => {
          return (
            <div key={item.id}>
              <p className="font-semibold text-[12px] mt-2  text-[#ACACAC]">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>

      <div className="w-full h-[85px]  mt-6   bg-slate-400 flex flex-row justify-around ">
        <div className="flex justify-start  ml-4 mt-3 -mr-10">
          <img className="w-[65px] h-[55px]  " src={Avatar} alt="avatar" />
        </div>
        <div className="flex justify-around items-center ">
          <p className="m-66">Perihan </p>
          <p className="m-6">Perihan </p>
          <p className="m-6">Perihan </p>
          <p className="m-6">Perihan </p>
          <p className="m-6">Perihan </p>
        </div>

        <div className="flex justify-end ">
          <button className="m-5">Düzen</button>
          <button>Sil</button>
        </div>
      </div>
      {/**Burda da denedim */}
      {/* <div>
        {user &&
          user.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.firstName}</p>
              </div>
            );
          })}
      </div>*/}
      <UserTable />
    </div>
  );
};
export default Students;
