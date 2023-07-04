/* eslint-disable @next/next/no-img-element */
import React, { InputHTMLAttributes } from 'react';
import { InputType } from 'zlib';

type PropsType = InputHTMLAttributes<any> & {
	imgSrc: string;
	position: 'left' | 'right';
};

const InputWithIcon: React.FC<PropsType> = (props) => {
	return (
		<div className="w-full relative">
			<input
				{...props}
				className={
					`rounded-[8px] text-sm2 border border-[#E5E5E5] h-10 p-4 focus:outline-none ${
						props.value ? 'text-[#6c6c6c]' : 'text-[#CDCDCD]'
					} ${props.position === 'left' ? ' pl-10 ' : ' pr-10 '}` +
					props.className
				}
				type="text"
			/>
			<img
				src={props.imgSrc}
				alt=""
				className={`absolute top-3 ${props.position}-4`}
			/>
		</div>
	);
};

export default InputWithIcon;
