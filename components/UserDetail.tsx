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
      <div className="flex flex-row ">
        <div className="w-[33%] h-full items-center justify-center  mt-20 pl-28">
          <h2 className="text-lg font-semibold mt-4 mb-2">User Information</h2>
          <div className="w-full h-[1px] bg-[#844a4a] shadow-md"></div>

          <p>
            <strong>Name:</strong> {user.firstName}
            {user.lastName}
          </p>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Domain:</strong> {user.domain}
          </p>
          <h2 className="text-lg font-semibold mt-4 mb-2">Address</h2>
          <div className="w-full h-[1px] bg-[#844a4a] shadow-md"></div>

          <p>
            <strong>Address:</strong> {user.address.address}
          </p>
          <p>
            <strong>City:</strong> {user.address.city}
          </p>
          <p>
            <strong>Postal Code:</strong> {user.address.postalCode}
          </p>
          <h2 className="text-lg font-semibold mt-4 mb-2">
            Company Information
          </h2>
          <div className="w-full h-[1px] bg-[#844a4a] shadow-md"></div>

          <p>
            <strong>Address:</strong> {user.company.address.address}
          </p>
          <p>
            <strong>City:</strong> {user.address.city}
          </p>
          <p>
            <strong>Coordinates:</strong> {user.address.coordinates.lat}-
            {user.address.coordinates.lng}
          </p>
          <p>
            <strong>Department:</strong> {user.company.department}
          </p>
          <p>
            <strong>Name:</strong> {user.company.name}
          </p>
          <p>
            <strong>Title:</strong> {user.company.title}
          </p>
        </div>
        <div className="w-[33%] h-full items-center justify-center  mt-20 pl-28">
          <h2 className="text-lg font-semibold mt-4 mb-2">Bank Information</h2>
          <div className="w-full h-[1px] bg-[#844a4a] shadow-md"></div>

          <p>
            <strong> Card Exprire:</strong> {user.bank.cardExpire}
          </p>
          <p>
            <strong> Card Number:</strong> {user.bank.cardNumber}
          </p>
          <p>
            <strong> Card Type:</strong> {user.bank.cardType}
          </p>
          <p>
            <strong> Currency:</strong> {user.bank.currency}
          </p>
          <p>
            <strong> Iban:</strong> {user.bank.iban}
          </p>
        </div>
        <div className="w-[33%] h-full  ">
          <img
            src={user.image}
            alt={user.image}
            className="flex justify-end rounded-full shadow-lg mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
