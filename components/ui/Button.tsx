/*import React, { ButtonHTMLAttributes } from "react";
type PropsType = ButtonHTMLAttributes<any> & {
  title: string;
  login?: () => void;
};

const Button: React.FC<PropsType> = (props) => {
  return (
    <button
      {...props}
      className={`w-full h-11 flex justify-center items-center bg-primary rounded-[4px] cursor-pointer ${props.className}`}
      //onClick={() => router.push("/dashboard")}
      onClick={() => props.login}
    >
      <span className="uppercase text-white font-medium text-[14px]">
        {props.title}
      </span>
    </button>
  );
};

export default Button;*/
import React, { ButtonHTMLAttributes } from "react";

type PropsType = ButtonHTMLAttributes<any> & {
  title: string;
};

const Button: React.FC<PropsType> = (props) => {
  return (
    <button
      {...props}
      className={`w-full h-11 flex justify-center items-center bg-primary rounded-[4px] ${props.className}`}
    >
      <span className="uppercase text-white font-medium text-[14px]">
        {props.title}
      </span>
    </button>
  );
};

export default Button;
