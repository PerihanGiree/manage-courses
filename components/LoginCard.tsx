import React, { useState } from "react";
import Input from "./ui/Input";
import { loginTypes } from "@/src/types";
import Button from "./ui/Button";
import { useRouter } from "next/router";
const LoginCard = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<loginTypes.FormDataType>({
    mail: "",
    password: "",
  });

  const onChangeText = (value: string, key: keyof loginTypes.FormDataType) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };
  interface LoginResponse {
    token: string;
    message: string;
  }

  async function login(mail: string, password: string): Promise<LoginResponse> {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mail, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    return data as LoginResponse;
  }

  // Kullanım örneği
  const mail = "kminchelle@qq.com";
  const password = "0lelplR";

  login(mail, password)
    .then((response) => {
      console.log(response.token); // Token değerini kullanabilirsiniz
      console.log(response.message); // İstediğiniz şekilde mesajı kullanabilirsiniz
      router.push("/dashboard");
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div className="min-w-[475px] min-h-[550px] bg-white rounded-[20px] flex flex-col items-center shadow-card">
      {/* Header */}
      <div className="mt-11 w-[335px]">
        {/* Logo */}
        <div className="flex flex-row w-full justify-center items-center">
          <div className="border-[3px] border-[#F8D442] h-[39px] mr-3" />
          <span className="text-[32px] font-bold">MANAGE COURSES</span>
        </div>
        {/* Info */}
        <div className="mt-10 flex flex-col items-center justify-center">
          <p className="text-2xl font-semibold">SIGN IN</p>
          <p className="text-sm2 mt-2 text-lightGray ">
            Enter your credentials to access your account
          </p>
        </div>
      </div>
      {/* Form */}
      <div className="w-full px-[30px] mt-10">
        <Input
          label="Email"
          placeholder="Enter your email"
          value={formData.mail}
          onChange={(e) => onChangeText(e.target.value, "mail")}
        />
        <Input
          type="password"
          label="Password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={(e) => onChangeText(e.target.value, "password")}
        />
        <Button title="sign in" className="mt-2" onClick={() => login} />
      </div>
      <p className=" mt-5 text-center text-lightGray text-sm2">
        Forgot your password?{" "}
        <span className="underline text-primary cursor-pointer">
          Reset Password
        </span>
      </p>
    </div>
  );
};

export default LoginCard;
