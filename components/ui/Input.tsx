import React, { InputHTMLAttributes } from "react";
import { InputType } from "zlib";

type PropsType = InputHTMLAttributes<any> & {
  label: string;
  onKeyPress?: () => void;
};

const Input: React.FC<PropsType> = (props) => {
  return (
    <div className="w-full">
      <span className="text-[14px] font-medium text-lightGray">
        {props.label}
      </span>
      <div className="flex flex-row">
        <input
          className={`w-full mt-3 rounded-[4px] text-[12px] ${
            props.value ? "text-[#6c6c6c]" : "text-[#CDCDCD]"
          } border border-[#E5E5E5] h-11 p-4 focus:outline-none mb-5`}
          type="text"
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
