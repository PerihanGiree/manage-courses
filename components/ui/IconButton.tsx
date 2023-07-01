/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { ButtonHTMLAttributes } from "react";

type PropsType = ButtonHTMLAttributes<any> & {
  title: string;
  icon: string;
  isActive?: boolean;
};

const IconButton: React.FC<PropsType> = (props) => {
  return (
    <button
      onClick={props.onClick}
      {...props}
      className={`flex justify-start items-center ${
        props.isActive ? "bg-primary" : "bg-transparent"
      } rounded-[4px] ${props.className}`}
    >
      <div className="w-12 flex justify-center items-center">
        <img src={props.icon} alt={props.title} />
      </div>
      <span className="font-medium text-sm2 ">{props.title}</span>
    </button>
  );
};

export default IconButton;
