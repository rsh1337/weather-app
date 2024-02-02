import Image from 'next/image';
import { Popover, Transition } from '@headlessui/react';
import useSWR from 'swr';
import { fetcher } from '../../../lib/fetcher';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
function Panel({ latitude, longitude, option, unit, title }) {
	const { data, error } = useSWR(
		`/api/24hrsPanel?lat=${latitude}&long=${longitude}&option=${option}`,
		fetcher
	);
	if (error) {
		return (
			<div
				className={
					'absolute drop-shadow-sm overflow-y-auto -ml-3 backdrop-opacity-80 bg-[#E2EAFC]/95 md:bg-[#E2EAFC]/80 z-30 rounded-xl w-full'
				}
			>
				<Popover.Button
					className={
						'p-3 md:hidden block focus:outline-0 focus:outline'
					}
				>
					<Image
						src={'/Icons/x.svg'}
						alt={'X icon'}
						height={15}
						width={15}
					/>
				</Popover.Button>
				<h1 className={'font-light text-center mb-2 md:mt-2 mt-0'}>
					Error Fetching Data
				</h1>
			</div>
		);
	}
	if (!data) {
		return (
			<div
				className={
					'z-20 absolute p-2 drop-shadow-sm overflow-y-auto -translate-y-[10rem] md:-translate-y-[5rem] md:-translate-x-[10rem] lg:-translate-x-[5rem] 2xl:-translate-x-[10rem] backdrop-opacity-10 bg-[#E2EAFC]/95 md:bg-[#E2EAFC]/95 rounded-xl w-full md:w-[20rem]'
				}
			>
				<h1 className={'font-light text-center mb-1 md:mt-2 mt-0 backdrop-blur-md animate-pulse rounded-md'}>
					{title}
				</h1>
				<div className={"h-[8rem] rounded-md backdrop-blur-md animate-pulse"}/>
			</div>
		);
	}

	const formattedHourly = data.hourly.time.map((date) => {
		return new Date(date * 1000).toLocaleTimeString('en-US', {
			hour: 'numeric',
			minute: 'numeric',
			hour12: false
		});
	});
	const dataFormat = data.hourly[option];
	const dataDetails = {
		labels: formattedHourly,
		datasets: [
			{
				label: title,
				fill: false,
				lineTension: 0.5,
				backgroundColor: 'rgba(75,192,192,0.4)',
				borderColor: 'rgba(75,192,192,1)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgba(75,192,192,1)',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgba(75,192,192,1)',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: dataFormat
			}
		]
	};
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			x: { display: true },
			y: {
				ticks: {
					callback: (value) => {
						return value + `${unit}`;
					}
				}
			}
		}
	};
	return (
		<div
			className={
				'z-20 absolute drop-shadow-sm overflow-y-auto -translate-y-[10rem] lg:-translate-y-[5rem] lg:-translate-x-[5rem] 2xl:-translate-x-[10rem] backdrop-opacity-10 bg-[#E2EAFC]/95 md:bg-[#E2EAFC]/95 rounded-xl w-[10rem] lg:w-[20rem]'
			}
		>
			<h1 className={'font-light text-center mb-1 md:mt-2 mt-0'}>
				{title}
			</h1>
			<div className={"h-max"}>
				<Line options={options} data={dataDetails} />
			</div>
		</div>
	);
}

export default function InfoBox({
	title,
	icon,
	data,
	extended,
	latitude,
	longitude,
	option,
	unit
}) {
	return extended ? (
		<Popover>
			<Popover.Button className={"focus:outline-0 focus:outline"}>
				<div className={'relative -z-10'}>
					<div
						className={
							'z-10 flex flex-col w-[10rem] h-[10rem] gap-3 justify-center items-center rounded-xl backdrop-opacity-50 bg-[#E2EAFC]/30 p-3'
						}
					>
						<Image
							src={'/Icons/externalLink.svg'}
							alt={'link icon'}
							width={15}
							height={15}
							className={'absolute top-0 mt-3 self-end'}
						/>
						<h1
							className={
								'text-sm font-thin uppercase text-center'
							}
						>
							{title}
						</h1>
						<div className={'flex flex-row items-center gap-2'}>
							<Image
								src={`/weather-icons/${icon}`}
								alt={'Icon'}
								width={35}
								height={35}
							/>
							<h1 className={'font-semibold text-xl'}>{data}</h1>
						</div>
					</div>
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
					<Panel
						latitude={latitude}
						longitude={longitude}
						option={option}
						unit={unit}
						title={title}
					/>
				</Popover.Panel>
			</Transition>
		</Popover>
	) : (
		<div
			className={
				'-z-20 flex flex-col w-[10rem] h-[10rem] gap-3 justify-center items-center rounded-xl backdrop-opacity-50 bg-[#E2EAFC]/30 p-3'
			}
		>
			<h1 className={'text-sm font-thin uppercase text-center'}>
				{title}
			</h1>
			<div className={'flex flex-row items-center gap-2'}>
				<Image
					src={`/weather-icons/${icon}`}
					alt={'Icon'}
					width={35}
					height={35}
				/>
				<h1 className={'font-semibold text-xl'}>{data}</h1>
			</div>
		</div>
	);
}
