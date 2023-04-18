import Image from 'next/image';
import { Popover } from '@headlessui/react';

function Panel() {
	return (
		<div
			className={
				'fixed top-0 -ml-2 md:ml-3 backdrop-blur-md bg-[#E2EAFC]/30 z-30 rounded-xl w-full'
			}
		>
			<Popover.Button className={"p-3 md:hidden block"}>
				<Image src={"/Icons/x.svg"} alt={'X icon'} height={15} width={15} />
			</Popover.Button>
			<h1 className={"font-light text-center mb-2 md:mt-2 mt-0"}>Tuesday</h1>
			<div className={'grid grid-cols-3 gap-2 p-1 font-light text-sm'}>
				<div
					className={'flex flex-col p-2 justify-center items-center'}
				>
					<div
						className={
							'flex flex-col gap-3 justify-center items-center'
						}
					>
						<Image
							src={'/weather-icons/sunrise.svg'}
							alt={'sun rise icon'}
							width={30}
							height={30}
						/>
						<h1 className={'capitalize'}>Sun Rise</h1>
					</div>
					<h1>06:19</h1>
				</div>
				<div
					className={'flex flex-col p-2 justify-center items-center'}
				>
					<div
						className={
							'flex flex-col gap-3 justify-center items-center'
						}
					>
						<Image
							src={'/weather-icons/humidity.svg'}
							alt={'humidity icon'}
							width={30}
							height={30}
						/>
						<h1 className={'capitalize'}>Humidity</h1>
					</div>
					<h1>69%</h1>
				</div>
				<div
					className={'flex flex-col p-2 justify-center items-center'}
				>
					<div
						className={
							'flex flex-col gap-3 justify-center items-center'
						}
					>
						<Image
							src={'/weather-icons/windy.svg'}
							alt={'wind icon'}
							width={30}
							height={30}
						/>
						<h1 className={'capitalize'}>Wind</h1>
					</div>
					<h1>69 km/h</h1>
				</div>
				<div
					className={'flex flex-col p-2 justify-center items-center'}
				>
					<div
						className={
							'flex flex-col gap-3 justify-center items-center'
						}
					>
						<Image
							src={'/weather-icons/0.svg'}
							alt={'uv icon'}
							width={30}
							height={30}
						/>
						<h1 className={'capitalize'}>Uv Index</h1>
					</div>
					<h1>69</h1>
				</div>
				<div
					className={'flex flex-col p-2 justify-center items-center'}
				>
					<div
						className={
							'flex flex-col gap-3 justify-center items-center'
						}
					>
						<Image
							src={'/weather-icons/umbrella.svg'}
							alt={'Precipitation icon'}
							width={30}
							height={30}
						/>
						<h1 className={'capitalize'}>Precipitation</h1>
					</div>
					<h1>69 %</h1>
				</div>
				<div
					className={'flex flex-col p-2 justify-center items-center'}
				>
					<div
						className={
							'flex flex-col gap-3 justify-center items-center'
						}
					>
						<Image
							src={'/weather-icons/temperature.svg'}
							alt={'temperature icon'}
							width={30}
							height={30}
						/>
						<h1 className={'capitalize text-center'}>Feeling Temperature</h1>
					</div>
					<h1>69 °C</h1>
				</div>
				<div
					className={'flex flex-col p-2 justify-center items-center'}
				>
					<div
						className={
							'flex flex-col gap-3 justify-center items-center'
						}
					>
						<Image
							src={'/weather-icons/2.svg'}
							alt={'temperature icon'}
							width={30}
							height={30}
						/>
						<h1 className={'capitalize text-center'}>Cloud Cover</h1>
					</div>
					<h1>69 %</h1>
				</div>
				<div
					className={'flex flex-col p-2 justify-center items-center'}
				>
					<div
						className={
							'flex flex-col gap-3 justify-center items-center'
						}
					>
						<Image
							src={'/weather-icons/eye.svg'}
							alt={'Eye icon'}
							width={30}
							height={30}
						/>
						<h1 className={'capitalize text-center'}>Visibility</h1>
					</div>
					<h1>69 m</h1>
				</div>
			</div>
		</div>
	);
}

export default function InfoCard({
	tempMin,
	tempMax,
	icon,
	day,
	index,
	latitude,
	longitude
}) {

	return (
		<Popover>
			<div className={'flex flex-col md:flex-row'}>
				<Popover.Button
					className={
						'flex flex-row w-full items-center justify-between p-3 rounded-2xl'
					}
				>
					<div className={'flex flex-row items-center gap-2'}>
						<Image
							src={`/weather-icons/${icon}`}
							alt={'Icon'}
							width={35}
							height={35}
						/>
						<h1>{day}</h1>
					</div>
					<div className={'text-sm flex flex-col items-end'}>
						<h1>Min: {tempMin}°C</h1>
						<h1>Max: {tempMax}°C</h1>
					</div>
				</Popover.Button>
				<Popover.Panel>
					<Panel/>
				</Popover.Panel>
			</div>
		</Popover>
	);
}
