import HeaderInfo from '@/components/UI/HeaderInfo';
import DailyTemp from '@/components/DailyTemp';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../../lib/fetcher';
import Weekly from '@/components/Weekly';
import InfoBox from '@/components/UI/InfoBox';
import SearchBar from "@/components/UI/SearchBar";
export default function Index({ isOpen, closeSidebar }) {
	const [location, setLocation] = useState(null);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setLocation(position.coords);
				},
				(error) => {
					console.error(error);
				}
			);
		} else {
			console.error('Geolocation Error.');
		}
	}, []);


	const latitude = location ? Number(location.latitude.toFixed(2)) : null;
	const longitude = location ? Number(location.longitude.toFixed(2)) : null;

	const { data: meteo, error } = useSWR(
		latitude && longitude
			? `/api/currentMeteo?lat=${latitude}&long=${longitude}`
			: null,
		fetcher
	);
	if (!meteo && location !== null) {
		return (
			<div className={`flex flex-col animate-pulse`}>
				<div
					className={
						'flex flex-col gap-12 w-40 items-center self-center backdrop-opacity-50 bg-[#E2EAFC]/30 rounded-xl'
					}
				>
					<div className={'flex flex-col  items-center gap-2'}>
						<h1 className={'text-3xl h-5 font-medium'} />
						<div
							className={'flex h-20 flex-row gap-3 items-center'}
						></div>
					</div>
				</div>
				<div className={'mt-12 rounded-xl'}>
					<div
						className={
							'flex flex-col gap-4 rounded-xl backdrop-opacity-50 bg-[#E2EAFC]/30 p-2 divide-y divide-[#B6CCFE] animate-pulse'
						}
					>
						<div
							className={
								'flex flex-row justify-center gap-4 overflow-auto md:scrollbar-thin scrollbar-none scrollbar-thumb-[#D7E3FC] scrollbar-track-[#C1D3FE] snap-x'
							}
						>
							<div className="h-20 rounded"></div>
						</div>
					</div>
				</div>
				<div
					className={`flex flex-row flex-wrap justify-center md:grid sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-8 grid-rows-3 grid-flow-dense gap-3 mt-3 ${
						isOpen ? 'lg:grid-cols-5' : 'lg:grid-cols-6'
					}`}
				>
					<div className={'col-span-2 row-span-3'}>
						<div
							className={
								'flex flex-col w-[20.5rem] md:w-[21rem] gap-2 rounded-xl backdrop-opacity-50 bg-[#E2EAFC]/30 p-2 divide-y divide-[#B6CCFE] animate-pulse'
							}
						>
							<div
								className={
									'flex items-center h-40 flex-col gap-1'
								}
							/>
						</div>
					</div>
					<div
						className={
							'flex flex-col w-[10rem] h-[10rem] gap-3 justify-center items-center rounded-xl backdrop-opacity-50 bg-[#E2EAFC]/30 p-3'
						}
					>
						<h1
							className={
								'text-sm font-thin uppercase text-center h-5'
							}
						/>
						<div
							className={'flex flex-row items-center gap-2 h-16'}
						/>
					</div>
					<div
						className={
							'flex flex-col w-[10rem] h-[10rem] gap-3 justify-center items-center rounded-xl backdrop-opacity-50 bg-[#E2EAFC]/30 p-3'
						}
					>
						<h1
							className={
								'text-sm font-thin uppercase text-center h-5'
							}
						/>
						<div
							className={'flex flex-row items-center gap-2 h-16'}
						/>
					</div>
					<div
						className={
							'flex flex-col w-[10rem] h-[10rem] gap-3 justify-center items-center rounded-xl backdrop-opacity-50 bg-[#E2EAFC]/30 p-3'
						}
					>
						<h1
							className={
								'text-sm font-thin uppercase text-center h-5'
							}
						/>
						<div
							className={'flex flex-row items-center gap-2 h-16'}
						/>
					</div>
					<div
						className={
							'flex flex-col w-[10rem] h-[10rem] gap-3 justify-center items-center rounded-xl backdrop-opacity-50 bg-[#E2EAFC]/30 p-3'
						}
					>
						<h1
							className={
								'text-sm font-thin uppercase text-center h-5'
							}
						/>
						<div
							className={'flex flex-row items-center gap-2 h-16'}
						/>
					</div>
				</div>
			</div>
		);
	}

	if (error) {
		return(
			<div className={"flex justify-center items-center"}>
				Error
			</div>
		)
	}
	return (
		<div className={`flex flex-col`}>
			{location ? (
				<>
					<div
						className={
							'flex flex-col w-full gap-12 items-center justify-center'
						}
					>
						<HeaderInfo
							icon={`${meteo.data[0].weathercode}.svg`}
							// lowTemp={'10'}
							// highTemp={'20'}
							temp={meteo.data[0].temperature}
							city={`${meteo.city}`}
						/>
					</div>
					<div className={'mt-12 rounded-xl'}>
						<DailyTemp latitude={latitude} longitude={longitude} />
					</div>
					<div
						className={`flex flex-row flex-wrap justify-center md:grid sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-8 grid-rows-3 grid-flow-dense gap-3 mt-3 ${
							isOpen ? 'lg:grid-cols-5' : 'lg:grid-cols-6'
						}`}
					>
						<div className={'col-span-2 row-span-3'}>
							<Weekly latitude={latitude} longitude={longitude} />
						</div>
						{/*<InfoBox icon={'sunrise.svg'} data={'09:00PM'} title={'Sun Rise'} />*/}
						<InfoBox
							icon={'humidity.svg'}
							data={`${meteo.data[0].relativehumidity_2m}%`}
							title={'Humidity'}
						/>
						<InfoBox
							icon={'windy.svg'}
							data={`${meteo.data[0].windspeed}km/h`}
							title={'Wind'}
						/>
						<InfoBox
							icon={'0.svg'}
							data={`${meteo.data[0].uv_index}`}
							title={'UV Index'}
						/>
						<InfoBox
							icon={'umbrella.svg'}
							data={`${meteo.data[0].precipitation_probability}%`}
							title={'Precipitation'}
						/>
					</div>
				</>
			) : (
				<div className={"flex justify-center h-[85vh] items-center"}>
					<SearchBar closeSidebar={closeSidebar}/>
				</div>
			)}
		</div>
	);
}
