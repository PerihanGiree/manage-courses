/* eslint-disable @next/next/no-img-element */
import { userTypes } from '@/src/types';
import React, { useState, useEffect } from 'react';

const UserDetail: React.FC<{ id: number }> = ({ id }) => {
	const [user, setUser] = useState<userTypes.User | undefined>();

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
		<div className="shadow-md  w-[50%] h-[50%]  bg-[#f2f2f2] rounded-md p-2 m-4 ">
			<h1 className="font-bold ml-5 text-xl pl-6 text-primary pt-5 ">
				User Details
			</h1>
			<div className="flex flex-col justify-center items-center ">
				<img
					src={user.image}
					alt={user.image}
					className="w-40 h-40 rounded-full border-y-2 shadow-md"
				/>
			</div>
			<div className="flex flex-col justify-center items-start ml-4 pl-8 pt-4">
				<span>
					<span className="font-semibold">Firstname:</span>
					{user.firstName}
				</span>
				<span className="h-1 bg-[#ccc] w-[50%]"></span>
				<span>
					<span className="font-semibold">Firstname:</span>
					{user.lastName}
				</span>
				<span className="h-1 bg-[#ccc] w-[50%]"></span>

				<span>
					<span className="font-semibold">Email:</span>
					{user.email}
				</span>
				<span className="h-1 bg-[#ccc] w-[50%]"></span>

				<span>
					<span className="font-semibold">Phone:</span>
					{user.phone}
				</span>
				<span className="h-1 bg-[#ccc] w-[50%]"></span>

				<span>
					<span className="font-semibold">Company Name:</span>
					{user.company.name}
				</span>
				<span className="h-1 bg-[#ccc] w-[50%]"></span>
			</div>
		</div>
	);
};

export default UserDetail;
