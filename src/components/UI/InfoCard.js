import Image from 'next/image';
import {Popover, Transition} from '@headlessui/react';
import useSWR from "swr";
import {fetcher} from "../../../lib/fetcher";
function Panel({index, latitude, longitude}) {
	const { data, error } = useSWR(`/api/7dayPanel?lat=${latitude}&long=${longitude}`,fetcher);
	if (error) {
		return(
			<div
				className={
					'absolute drop-shadow-sm -top-16 overflow-y-auto translate-x-2 md:translate-x-80 -ml-2 md:ml-3 backdrop-blur-md bg-[#E2EAFC]/30 z-30 rounded-xl w-full'
				}
			>
				<Popover.Button className={"p-3 md:hidden block focus:outline-0 focus:outline"}>
					<Image src={"/Icons/x.svg"} alt={'X icon'} height={15} width={15} />
				</Popover.Button>
				<h1 className={"font-light text-center mb-2 md:mt-2 mt-0"}>Error Fetching Data</h1>
			</div>
		)
	}
	if (!data) {
		return(
			<div
				className={
					'absolute drop-shadow-sm -top-16 overflow-y-auto translate-x-2 md:translate-x-80 -ml-2 md:ml-3 backdrop-blur-md bg-[#E2EAFC]/30 z-30 rounded-xl w-full'
				}
			>
				<Popover.Button className={"p-3 md:hidden block focus:outline-0 focus:outline"}>
					<Image src={"/Icons/x.svg"} alt={'X icon'} height={15} width={15} />
				</Popover.Button>
				<h1 className={"font-light text-center mb-2 md:mt-2 mt-0 backdrop-blur-lg shadow-md rounded-md animate-pulse w-[8rem] ml-[6rem] h-5"}></h1>
				<div className={'grid grid-cols-3 gap-2 p-1 font-light text-sm '}>
					<div
						className={'flex flex-col p-2 justify-center items-center backdrop-blur-lg shadow-md rounded-md animate-pulse'}
					>
						<div
							className={
								'flex flex-col gap-3 justify-center items-center h-3'
							}
						>
						</div>
					</div>
					<div
						className={'flex flex-col p-2 justify-center items-center backdrop-blur-lg shadow-md rounded-md animate-pulse'}
					>
						<div
							className={
								'flex flex-col gap-3 justify-center items-center h-3'
							}
						>
						</div>
					</div>
					<div
						className={'flex flex-col p-2 justify-center items-center backdrop-blur-lg shadow-md rounded-md animate-pulse'}
					>
						<div
							className={
								'flex flex-col gap-3 justify-center items-center h-3'
							}
						>
						</div>
					</div>
					<div
						className={'flex flex-col p-2 justify-center items-center backdrop-blur-lg shadow-md rounded-md animate-pulse'}
					>
						<div
							className={
								'flex flex-col gap-3 justify-center items-center h-3'
							}
						>
						</div>
					</div>
					<div
						className={'flex flex-col p-2 justify-center items-center backdrop-blur-lg shadow-md rounded-md animate-pulse'}
					>
						<div
							className={
								'flex flex-col gap-3 justify-center items-center h-3'
							}
						>
						</div>
					</div>
					<div
						className={'flex flex-col p-2 justify-center items-center backdrop-blur-lg shadow-md rounded-md animate-pulse'}
					>
						<div
							className={
								'flex flex-col gap-3 justify-center items-center h-3'
							}
						>
						</div>
					</div>
					<div
						className={'flex flex-col p-2 justify-center items-center backdrop-blur-lg shadow-md rounded-md animate-pulse'}
					>
						<div
							className={
								'flex flex-col gap-3 justify-center items-center h-3'
							}
						>
						</div>
					</div>
					<div
						className={'flex flex-col p-2 justify-center items-center backdrop-blur-lg shadow-md rounded-md animate-pulse'}
					>
						<div
							className={
								'flex flex-col gap-3 justify-center items-center h-3'
							}
						>
						</div>
					</div>
				</div>
			</div>
		)
	}
	console.log(data)
	const unixTimeMs = `${data.daily.sunrise[index]}` * 1000;
	const date = new Date(unixTimeMs);
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const formattedTime = `${hours}:${minutes}`;
	return (
		<div
			className={
				'absolute drop-shadow-sm -top-16 overflow-y-auto translate-x-2 md:translate-x-80 -ml-2 md:ml-3 backdrop-blur-md bg-[#E2EAFC]/30 z-30 rounded-xl w-full'
			}
		>
			<Popover.Button className={"p-3 md:hidden block focus:outline-0 focus:outline"}>
				<Image src={"/Icons/x.svg"} alt={'X icon'} height={15} width={15} />
			</Popover.Button>
			<h1 className={"font-light text-center mb-2 md:mt-2 mt-0"}>{data.daily.time[index]}</h1>
			<div className={'grid grid-cols-3 gap-2 p-1 font-light text-sm mb-2'}>
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
					<h1>{formattedTime}</h1>
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
						<h1 className={'capitalize'}>Rain</h1>
					</div>
					<h1>{data.daily.rain_sum[index]} mm</h1>
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
					<h1>{data.daily.windspeed_10m_max[index]} km/h</h1>
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
					<h1>{data.daily.uv_index_max[index]}</h1>
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
					<h1>{data.daily.precipitation_sum[index]} %</h1>
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
							src={'/weather-icons/temperature-cold.svg'}
							alt={'temperature icon'}
							width={15}
							height={15}
						/>
						<h1 className={'capitalize text-center'}>Min Feeling Temperature</h1>
					</div>
					<h1>{data.daily.apparent_temperature_min[index]} °C</h1>
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
			<div className={'relative'}>
				<Popover.Button
					className={
						'flex -z-30 flex-row w-full items-center justify-between p-3 rounded-2xl focus:outline-0 focus:outline'
					}
				>
					<div className={'flex -z-10 flex-row items-center gap-2'}>
						<Image
							src={`/weather-icons/${icon}`}
							alt={'Icon'}
							width={35}
							height={35}
						/>
						<h1>{day}</h1>
					</div>
					<div className={'text-sm -z-10 flex flex-col items-end'}>
						<h1>Min: {tempMin}°C</h1>
						<h1>Max: {tempMax}°C</h1>
					</div>
				</Popover.Button>
				<Transition
					enter="transition duration-100 ease-out"
					enterFrom="transform scale-95 opacity-0"
					enterTo="transform scale-100 opacity-100"
					leave="transition duration-75 ease-out"
					leaveFrom="transform scale-100 opacity-100"
					leaveTo="transform scale-95 opacity-0"
				>
				<Popover.Panel>
					<Panel latitude={latitude} longitude={longitude} index={index}/>
				</Popover.Panel>
				</Transition>
			</div>
		</Popover>
	);
}
