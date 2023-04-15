import Image from 'next/image';
import useSWR from "swr";
import {fetcher} from "../../../lib/fetcher";
import Link from "next/link";

export default function CityCard({ cityName, latitude, longitude }) {
	const { data, error } = useSWR(`/api/savedCities?lat=${latitude}&long=${longitude}`,fetcher)
	if(error){
		return(
		<div
			className={
				'flex flex-row items-center backdrop-opacity-50 bg-[#E2EAFC]/30 p-3 rounded-2xl'
			}
		>
			Error
		</div>
		)
	}
	if(!data){
		return(
			<div
				className={
					'flex flex-row items-center h-16 backdrop-opacity-50 bg-[#E2EAFC]/30 p-3 rounded-2xl animate-pulse'
				}
			/>
		)
	}
	return (
		<Link href={`/city?latitude=${latitude}&longitude=${longitude}`}>
		<div
			className={
				'flex flex-row items-center justify-between backdrop-opacity-50 bg-[#E2EAFC]/30 p-3 rounded-2xl'
			}
		>
			<div className={'flex flex-col gap-1'}>
				<Image
					src={`/weather-icons/${data.weathercode}.svg`}
					alt={'Icon'}
					width={35}
					height={35}
				/>
				<h1 className={'font-semibold'}>{cityName}</h1>
			</div>
			<div className={'flex flex-col items-center gap-1 mr-2'}>
				<h1 className={'text-2xl font-light'}>{data.temperature} °C</h1>
			</div>
		</div>
		</Link>
	);
}
