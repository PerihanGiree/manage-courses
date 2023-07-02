/* eslint-disable react-hooks/exhaustive-deps */
import Button from '@/components/ui/Button';
import React, { useEffect, useState } from 'react';
import UserTable from '@/components/ui/UserTable';
import { userTypes } from '@/src/types';
import { paginationDatas } from '@/src/constans';
import { useRouter } from 'next/router';
import { routeHelper } from '@/src/helpers';
import CustomModal from '@/components/ui/Modal';
import StudentForm from '@/components/StudentForm';

type InputProps = {
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input: React.FC<InputProps> = ({ value, onChange }) => {
	return (
		<input
			type="text"
			placeholder="Search..."
			value={value}
			onChange={onChange}
			className="w-[212px] h-[37px] t-[75x] px-2 border border-[#E5E5E5] rounded-lg mx-8 outline-none "
		/>
	);
};

const TableTitle = [
	{
		id: 0,
		title: '', // for images column,
		className: 'w-[12%]'
	},
	{
		id: 1,
		title: 'Name',
		className: 'w-[14%]'
	},
	{
		id: 2,
		title: 'Email',
		className: 'w-[16%]'
	},
	{
		id: 3,
		title: 'Phone',
		className: 'w-[14%]'
	},
	{
		id: 4,
		title: 'Website',
		className: 'w-[16%]'
	},
	{
		id: 5,
		title: 'Company Name',
		className: 'w-[12%]'
	},
	{
		id: 6,
		title: '', // for actions column
		className: 'w-[16%]'
	}
];

const Students = () => {
	const [user, setUser] = useState<userTypes.User[]>([]);
	const [inputValue, setInputValue] = useState('');
	const [total, setTotal] = useState<number>(0);
	const [loading, setLoading] = useState<boolean>(false);
	const [modalVisible, setModalVisible] = useState<boolean>(false);

	const router = useRouter();

	useEffect(() => {
		const { limit, offset, search } = router.query;
		fethMoreData({
			limit: limit ? limit.toString() : undefined,
			offset: offset ? offset.toString() : undefined,
			search: search ? search.toString() : undefined
		});
	}, [router.query]);

	const fethMoreData = async ({
		limit,
		offset,
		search
	}: {
		limit?: string;
		offset?: string;
		search?: string;
	}) => {
		const query: any = {};
		query.limit = limit || paginationDatas.perPage;
		if (offset) {
			query.skip = offset;
		}
		if (search) {
			query.search = search;
		}
		const url = routeHelper.addQueryPArameters(
			'https://dummyjson.com/users',
			query
		);
		setLoading(true);
		try {
			const data = await fetch(url).then((res) => res.json());
			setUser(data.users);
			setTotal(data.total);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setInputValue(event.target.value);
	};

	const userUpdate = (editedUser: userTypes.User) => {
		setUser((prev) =>
			prev.map((item) => {
				if (item.id === editedUser.id) {
					return editedUser;
				}
				return item;
			})
		);
	};

	return (
		<div className="bg-[#f8f8f8] h-[calc(100vh-60px)] px-8 pt-5">
			{loading && (
				<div className="w-full h-full flex justify-center items-center">
					Loading...
				</div>
			)}
			{/* Header  */}
			<div className=" flex justify-between">
				<div className="font-bold text-[22px]">Students List</div>
				<div className=" flex flex-row items-center justify-center ">
					<Input
						value={inputValue}
						onChange={handleInputChange}
					/>
					<Button
						onClick={() => setModalVisible(true)}
						title="Add new Student"
					/>
				</div>
			</div>

			<div className="w-full h-[1px] bg-[#E5E5E5] mt-2" />

			<UserTable
				headerTitles={TableTitle}
				users={user}
				total={total}
				userUpdateFunc={userUpdate}
			/>

			<CustomModal
				visible={modalVisible}
				setVisible={setModalVisible}
				headerData={{ title: 'Add New Student' }}
			>
				<StudentForm isEdit={false} />
			</CustomModal>
		</div>
	);
};
export default Students;
