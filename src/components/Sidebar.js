import Image from 'next/image';
import CityCard from '@/components/UI/CityCard';
import { Transition } from '@headlessui/react';
import SearchBar from "@/components/UI/SearchBar";

export default function Sidebar({isOpen}) {
	return (
			<Transition
				show={isOpen}
				enter="transition duration-100 ease-out"
				enterFrom="transform scale-95 opacity-0"
				enterTo="transform scale-100 opacity-100"
				leave="transition duration-75 ease-out"
				leaveFrom="transform scale-100 opacity-100"
				leaveTo="transform scale-95 opacity-0"
			>
			<div
				className={
					'w-[20rem] h-[80vh] ml-2 md:ml-0 mt-[4rem] backdrop-opacity-5 bg-[#E2EAFC]/30 rounded-xl p-4 overflow-auto scrollbar-none'
				}
			>
				<SearchBar/>
				<div className={'mt-5 flex flex-col gap-3'}>
					<CityCard
						icon={'3.svg'}
						cityName={'Piatra-Neamt'}
						temp={'20°C'}
						highTemp={'93°C'}
						lowTemp={'0°C'}
					/>
				</div>
			</div>
			</Transition>
	);
}
