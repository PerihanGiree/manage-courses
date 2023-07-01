import Button from "@/components/ui/Button";
import Avatar from "../../public/avatar.png";
import React, { use, useEffect, useState } from "react";
import UserTable from "@/components/ui/UserTable";
import { userTypes } from "@/src/types";

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
    id: 0,
    title: "", // for images column
  },
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
  {
    id: 6,
    title: "", // for actions column
  }
];

const Students = () => {
  const [user, setUser] = useState<userTypes.User[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch("https://dummyjson.com/users").then((res) =>
      res.json()
    );
    setUser(data.users);
  };

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

      <UserTable headerTitles={TableTitle} users={user} total={total} />
    </div>
  );
};
export default Students;
