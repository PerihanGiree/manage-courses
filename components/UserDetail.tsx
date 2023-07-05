/* eslint-disable @next/next/no-img-element */
import { userTypes } from "@/src/types";
import React, { useState, useEffect } from "react";
import UserCard from ".././public/user/id-card.png";
import email from ".././public/user/mail.png";
import { userInfo } from "os";

const UserDetail: React.FC<{ id: number }> = ({ id }) => {
  const [user, setUser] = useState<userTypes.UserInfo | undefined>();

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        console.log(data.firstName);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="shadow-md  w-[98%] h-[90%]  bg-[#f2f2f2] rounded-md p-2 m-4 ">
      <h2 className="text-2xl text-primary font-semibold  m-5">User Detail</h2>
      <div className="flex flex-row items-center justify-center">
        <div className="w-[50%] h-full items-center justify-center  mt-20 pl-28">
          <p>
            <strong>Ad:</strong> {user.firstName}
            {user.lastName}
          </p>
          <p>
            <strong>Kullanıcı Adı:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Telefon:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong> {user.domain}
          </p>
          <h2 className="text-lg font-semibold mt-4 mb-2">Adres</h2>
          <p>
            <strong>Sokak:</strong> {user.address.address}
          </p>
          <p>
            <strong>Şehir:</strong> {user.address.city}
          </p>
          <p>
            <strong>Posta Kodu:</strong> {user.address.postalCode}
          </p>
        </div>
        <div className="w-[50%] h-full">
          <img src={user.image} alt={user.image} />
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
