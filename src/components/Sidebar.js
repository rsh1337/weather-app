import Image from 'next/image';
import CityCard from '@/components/UI/CityCard';
import { Transition } from '@headlessui/react';

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
					'w-[20rem] h-[80vh] mt-[4rem] backdrop-opacity-5 bg-[#E2EAFC]/30 rounded-xl p-4 overflow-auto scrollbar-none'
				}
			>
				<div
					className={
						'flex items-center flex-row gap-3 backdrop-opacity-5 bg-[#E2EAFC]/30 p-3 rounded-xl'
					}
				>
					<Image
						src={'/Icons/search.svg'}
						alt={'Search Icon'}
						width={30}
						height={30}
					/>
					<h1 className={'font-thin text-gray-500'}>Search</h1>
				</div>
				<div className={'mt-5 flex flex-col gap-3'}>
					<CityCard
						icon={'cloudy.svg'}
						cityName={'Piatra-Neamt'}
						temp={'20°C'}
						highTemp={'93°C'}
						lowTemp={'0°C'}
					/>
					<CityCard
						icon={'cloudy.svg'}
						cityName={'Brasov'}
						temp={'-20°C'}
						highTemp={'23°C'}
						lowTemp={'2°C'}
					/>
					<CityCard
						icon={'cloudy.svg'}
						cityName={'Baicoi'}
						temp={'0°C'}
						highTemp={'3°C'}
						lowTemp={'-0°C'}
					/>
				</div>
			</div>
			</Transition>
	);
}
