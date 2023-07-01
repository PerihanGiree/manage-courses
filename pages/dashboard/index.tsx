import React, { useState } from "react";
import { dashboardDatas } from "@/src/constans";
import { dashboardTypes } from "@/src/types";

export const colorVariants: dashboardTypes.ColorVariantsType[] = [
  {
    bg: "bg-[#FDFDFD]",
    icon: "bg-[#74C1ED]",
  },
  {
    bg: "bg-[#FEF6FB]",
    icon: "bg-[#74C1ED]",
  },
  {
    bg: "bg-[#FEFBEC]",
    icon: "bg-[#74C1ED]",
  },
  {
    bg: "bg-gradient-to-r bg-gradient-[134deg] from-[#FEAF00] from-0% to-[#F8D442] to-100% ",
    icon: "bg-[#74C1ED]",
  },
];

const Dashboard = () => {
  console.log(dashboardDatas);
  return (
    <div className="w-full -h-full ">
      <div className="flex flex-row justify-around">
        {dashboardDatas.DashboardCategory.map((item) => {
          return (
            <div
              key={item.title}
              className={`w-[255px] h-[157px] rounded-[8px] ${
                colorVariants[item.index].bg
              } `}
            >
              <img
                className="w-12 h-[38px] object-contain  ml-5 mt-5 "
                src={item.icon}
                alt={item.icon}
              />
              <p className="font-medium text-[14px] ml-5 mt-[15px]">
                {item.title}
              </p>
              <div className="flex justify-end">
                <p className="text-[30px] font-bold  mr-5">{item.count}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
