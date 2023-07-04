import UserDetail from '@/components/UserDetail';
import { useRouter } from 'next/router';
import React from 'react';

const UserDetailPage = () => {
	const router = useRouter();
	return <UserDetail id={Number(router.query.slug)} />;
};

export default UserDetailPage;
