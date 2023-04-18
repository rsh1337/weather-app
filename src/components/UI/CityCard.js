import Image from 'next/image';
import useSWR from "swr";
import {fetcher} from "../../../lib/fetcher";
import {useRouter} from "next/router";

export default function CityCard({ cityName, latitude, longitude, closeSidebar }) {
	const router = useRouter()
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

	const handleLink = async () => {
		closeSidebar();
		return router.push(`/city?latitude=${latitude}&longitude=${longitude}`)
	};

	return (
		<div
			className={
				'flex flex-row items-center justify-between backdrop-opacity-50 bg-[#E2EAFC]/30 p-3 rounded-2xl'
			}
			onClick={handleLink}
		>
			<div className={'flex flex-col gap-1'}>
				<Image
					src={`/weather-icons/${data.current_weather.weathercode}.svg`}
					alt={'Icon'}
					width={35}
					height={35}
				/>
				<h1 className={'font-semibold'}>{cityName}</h1>
			</div>
			<div className={'flex flex-col items-center gap-1'}>
				<h1 className={'text-2xl font-light'}>{data.current_weather.temperature} °C</h1>
				<div className={'flex flex-row gap-3 text-sm font-thin'}>
					<h1>H: {data.daily.temperature_2m_max} °C</h1>
					<h1>L: {data.daily.temperature_2m_min} °C</h1>
				</div>
			</div>
		</div>
	);
}
