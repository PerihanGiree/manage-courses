/* eslint-disable @next/next/no-img-element */
import { userTypes } from "@/src/types";
import React, { useState, useEffect } from "react";
import UserCard from ".././public/user/id-card.png";
import email from ".././public/user/mail.png";

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
      <h1 className="font-bold ml-5 text-xl pl-6 text-primary pt-5 ">
        User Details
      </h1>
      <div className="flex flex-col justify-center items-center ">
        <img
          src={user.image}
          alt={user.image}
          className="w-40 h-40 rounded-full border-y-2 shadow-md bg-primary"
        />
      </div>
      <div className="flex flex-row justify-between ">
        <div className="flex flex-col justify-center items-start ml-80 pl-8 pt-4">
          <div className="flex flex-row justify-between">
            <img
              src={UserCard}
              alt="usercard"
              className="w-[80px] h-[80px] p-1 text-primary"
            />

            <div className="flex flex-col mt-3 p-2">
              <span>
                <span className="font-semibold">Firstname:</span>
                {user.firstName}
              </span>
              <span className="h-1 bg-[#ccc] w-[100%]"></span>
              <span>
                <span className="font-semibold">Lastname:</span>
                {user.lastName}
              </span>
              <span className="h-1 bg-[#ccc] w-[100%]"></span>
              {/** */}
            </div>
          </div>

          <span>
            <span className="font-semibold">Email:</span>
            {user.email}
          </span>

          <span className="h-1 bg-[#ccc] w-[100%]"></span>

          <span>
            <span className="font-semibold">Phone:</span>
            {user.phone}
          </span>
          <span className="h-1 bg-[#ccc] w-[100%]"></span>

          <span>
            <span className="font-semibold">Company Name:</span>
            {user.company.name}
          </span>
          <span className="h-1 bg-[#ccc] w-[100%]"></span>
          <span>
            <span className="font-semibold">Company Address:</span>
            {user.company.address.address}
          </span>
          <span className="h-1 bg-[#ccc] w-[100%]"></span>
          <span>
            <span className="font-semibold">Username:</span>
            {user.username}
          </span>
          <span className="h-1 bg-[#ccc] w-[100%]"></span>
          <span>
            <span className="font-semibold">Birthday Date:</span>
            {user.birthDate}
          </span>
          <span className="h-1 bg-[#ccc] w-[100%]"></span>
          <span>
            <span className="font-semibold">Blood Group:</span>
            {user.bloodGroup}
          </span>
          <span className="h-1 bg-[#ccc] w-[100%]"></span>
          <span>
            <span className="font-semibold">Height:</span>
            {user.height}
          </span>
          <span className="h-1 bg-[#ccc] w-[100%]"></span>
          <span>
            <span className="font-semibold">Weight:</span>
            {user.weight}
          </span>
          <span className="h-1 bg-[#ccc] w-[100%]"></span>
          <span>
            <span className="font-semibold">Eye Color:</span>
            {user.eyeColor}
          </span>
          <span className="h-1 bg-[#ccc] w-[100%]"></span>
          <span>
            <span className="font-semibold">Hair Color:</span>
            {user.hair.color}
          </span>
          <span className="h-1 bg-[#ccc] w-[100%]"></span>
          <span>
            <span className="font-semibold">Hair Type:</span>
            {user.hair.type}
          </span>
          <span className="h-1 bg-[#ccc] w-[100%]"></span>
        </div>
        <div className="flex flex-col mr-80 pt-4">
          <span>
            <span className="font-semibold">Domain:</span>
            {user.domain}
          </span>
          <span className="h-1 bg-[#ccc] w-[100%]"></span>
          <span>
            <span className="font-semibold">Ip Address:</span>
            {user.ip}
          </span>
          <span className="h-1 bg-[#ccc] w-[100%]"></span>
          <span>
            <span className="font-semibold">Address:</span>
            <p>{user.address.address}</p>
            <p> {user.address.city}</p>
            <p>
              {user.address.coordinates.lat}-{user.address.coordinates.lng}
            </p>
            <p>{user.address.postalCode}</p>

            <p>{user.address.state}</p>
          </span>
          <span className="h-1 bg-[#ccc] w-[100%]"></span>
          <span>
            <span className="font-semibold">Mac Address:</span>
            {user.macAddress}
          </span>
          <span className="h-1 bg-[#ccc] w-[100%]"></span>
          <span>
            <span className="font-semibold">University:</span>
            {user.university}
          </span>
          <span className="h-1 bg-[#ccc] w-[100%]"></span>
          <span>
            <span className="font-semibold">Bank Information:</span>
            <p>Card Expire-{user.bank.cardExpire}</p>
            <p>Card Number- {user.bank.cardNumber}</p>
            <p> Card Type-{user.bank.cardType}</p>
            <p>Currency- {user.bank.currency}</p>
            <p>Iban-{user.bank.iban}</p>
          </span>
          <span className="h-1 bg-[#ccc] w-[100%]"></span>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
