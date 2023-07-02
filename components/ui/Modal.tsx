import React from 'react';
import Modal from 'react-modal';
import ModalHeader from './Modal/ModalHeader';

type PropsType = {
	visible: boolean;
	setVisible: (v: boolean) => void;
	headerData: {
		title: string;
	};
	children: React.ReactNode;
};

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		minWidth: '50%',
		maxHeight: '80vh',
		padding: 0,
		border: 'none',
		boxShadow: '8.0px 16.0px 16.0px hsl(0deg 0% 0% / 0.05)'
	}
};

const CustomModal: React.FC<PropsType> = ({
	visible,
	setVisible,
	headerData,
	children
}) => {
	const onClose = () => {
		setVisible(false);
	};

	return (
		<Modal
			isOpen={visible}
			style={customStyles}
			onRequestClose={onClose}
		>
			<ModalHeader
				title={headerData.title}
				onClose={onClose}
			/>
			<div className="px-5 my-3">{children}</div>
		</Modal>
	);
};

export default CustomModal;
