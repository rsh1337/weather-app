import Sidebar from '@/components/Sidebar';
import { Cross as Hamburger } from 'hamburger-react';
import { Transition } from '@headlessui/react';
import {useState} from "react";
export default function Layout({ children }) {
	const [isOpen, setOpen] = useState(false)

	return (
		<div className="bg-[#ABC4FF] min-h-[100vh] p-4">
			<div
				className={
					'flex h-[95vh] flex-row gap-5 backdrop-opacity-5 bg-[#E2EAFC]/30 p-4 rounded-2xl'
				}
			>
					<button className={'h-fit w-fit rounded-xl fixed z-30'} onClick={()=>setOpen(!isOpen)}>
						<Hamburger toggled={isOpen} toggle={setOpen} size={20} />
					</button>
					<Transition
						show={isOpen}
						enter="transition duration-100 ease-out"
						enterFrom="transform scale-95 opacity-0"
						enterTo="transform scale-100 opacity-100"
						leave="transition duration-75 ease-out"
						leaveFrom="transform scale-100 opacity-100"
						leaveTo="transform scale-95 opacity-0"
					>
						<div className={"mt-[4rem]"}>
							<Sidebar />
						</div>
					</Transition>
				<div className={'my-3 overflow-auto scrollbar-none'}>
					{children}
				</div>
			</div>
		</div>
	);
}
