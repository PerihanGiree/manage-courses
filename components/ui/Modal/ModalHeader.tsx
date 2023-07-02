import React from 'react';

type PropsType = {
	title: string;
	onClose: () => void;
};

const ModalHeader: React.FC<PropsType> = ({ title, onClose }) => {
	return (
		<div className="w-full h-20 bg-primary flex flex-row items-center justify-between px-5">
			<h4 className="font-semibold text-lg">{title}</h4>
			<button
				onClick={onClose}
				className="w-8 h-8 bg-transparent hover:bg-light hover:bg-opacity-20 rounded-md delay-75"
			>
				<span className="text-white text-xl">&#x2715;</span>
			</button>
		</div>
	);
};

export default ModalHeader;
