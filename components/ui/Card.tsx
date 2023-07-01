import React from "react";
import { dashboardTypes } from "@/src/types";

const Card: React.FC<dashboardTypes.DashboardCategoryType> = (props) => {
  return (
    <div
      key={props.title}
      className={`w-[255px] h-[157px] rounded-[8px] ${
        colorVariants[props.index].bg
      } `}
    >
      <img
        className="w-12 h-[38px] object-contain  ml-5 mt-5 "
        src={props.icon}
        alt={props.icon}
      />
      <p className="font-medium text-[14px] ml-5 mt-[15px]">{props.title}</p>
      <div className="flex justify-end">
        <p className="text-[30px] font-bold  mr-5">{props.count}</p>
      </div>
    </div>
  );
};

export default Card;
