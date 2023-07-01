/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Avatar from "../../public/avatar.png";
import logout from "../../public/sign-out-alt 1.svg";
import Image from "next/image";
import { navigationTypes } from "@/src/types";
import { navigationDatas } from "@/src/constans";
import IconButton from "../ui/IconButton";
import { useRouter } from "next/router";

const Sidebar = () => {
  const [menu, setMenu] = useState<navigationTypes.NavigationMenuItemType[]>(
    navigationDatas.NavigationMenu
  );
  const router = useRouter();
  
  const handleClickNavigateButton = (path: string, title: string) => {
    router.push(path);
    setMenu((prev) => prev.map((item) => {
      if(item.title === title){
        return {
          ...item,
          isActive: true
        }
      } 
      return {
        ...item,
        isActive: false
      }
    }))
  }
  return (
    <div className="w-[270px] bg-light flex flex-col justify-between items-center">
      <div>
        {/* Logo */}
        <div className="flex flex-row w-full justify-center items-center mt-5">
          <div className="border-[2px] border-[#F8D442] h-[23px] mr-3" />
          <span className="text-[20px] font-bold">MANAGE COURSES</span>
        </div>
        {/* Avatar Info */}
        <div className="flex flex-col justify-center items-center">
          <div className="mt-9 w-32 h-32">
            <img
              className="w-full h-full object-contain rounded-full"
              src={Avatar}
              alt="avatar"
            />
          </div>
          <p className="mt-4 font-bold text-[17px]">John Doe</p>
          <p className="font-medium text-sm2 text-primary">Admin</p>
        </div>
      </div>
      {/* Navigation List */}
      <div className="mt-8">
        {menu.map((item) => (
          <IconButton
            className="h-10 w-48 mb-4 justify-start pl-4"
            key={item.title}
            title={item.title}
            icon={item.icon}
            isActive={item.isActive}
            onClick={() => handleClickNavigateButton(item.path, item.title)}
          />
        ))}
      </div>
      {/* Logout */}
      <button className="flex items-center mb-5">
        <span className="mr-6">Logout</span>
        <img src={logout} alt="logout" />
      </button>
    </div>
  );
};

export default Sidebar;
