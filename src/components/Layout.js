import Sidebar from '@/components/Sidebar';
import React, { useState } from 'react';
import { Cross as Hamburger } from 'hamburger-react';
import {Toaster} from "react-hot-toast";
export default function Layout({ children }) {
	const [isOpen, setOpen] = useState(false);
	const blurClass = isOpen ? 'blur-lg' : 'blur-0';
	return (
		<div className="bg-[#ABC4FF] min-h-[100vh] p-4">
			<Toaster />
			<div
				className={
					`flex h-[95vh] flex-row gap-5 backdrop-opacity-5 bg-[#E2EAFC]/30 p-1 md:p-4 rounded-2xl`
				}
			>
				<button
					className={'h-fit w-fit rounded-xl fixed z-30'}
					onClick={() => setOpen(!isOpen)}
				>
					<Hamburger toggled={isOpen} toggle={setOpen} size={20} />
				</button>
				<Sidebar isOpen={isOpen} />
				<div className={`my-3 w-screen md:ml-4 lg:blur-0 ${blurClass} transition-all overflow-auto scrollbar-none`}>
					{React.Children.map(children, (child) =>
						React.cloneElement(child, { isOpen })
					)}
				</div>
			</div>
		</div>
	);
}
