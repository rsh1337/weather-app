import HeaderInfo from '@/components/UI/HeaderInfo';
import DailyTemp from '@/components/DailyTemp';
import { useEffect, useState } from 'react';
import useSWR from "swr"
import {fetcher} from "../../lib/fetcher";
import Weekly from "@/components/Weekly";
import InfoBox from "@/components/UI/InfoBox";

export default function Index({ isOpen }) {
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
		latitude && longitude ? `/api/currentMeteo?lat=${latitude}&long=${longitude}` : null,
		fetcher
	);
	if(!meteo){
		return(
			<p>Fetching location...</p>
		)
	}

	if(error){
		return(
			<h1>error</h1>
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
							temp={`${meteo.data[0].temperature}`}
							city={'Piatra-Neamt'}
						/>
					</div>
					<div className={'mt-12 rounded-xl'}>
						<DailyTemp />
					</div>
					<div className={`flex flex-row flex-wrap justify-center md:grid sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-8 grid-rows-3 grid-flow-dense gap-3 mt-3 ${isOpen ? 'lg:grid-cols-5' : 'lg:grid-cols-6'}`}>
						<div className={"col-span-2 row-span-3"}>
							<Weekly latitude={latitude} longitude={longitude} />
						</div>
						<InfoBox icon={'sunrise.svg'} data={'09:00PM'} title={'Sun Rise'} />
						<InfoBox icon={'humidity.svg'} data={`${meteo.data[0].relativehumidity_2m}%`} title={'Humidity'} />
						<InfoBox icon={'windy.svg'} data={`${meteo.data[0].windspeed}km/h`} title={'Wind'} />
						<InfoBox icon={'0.svg'} data={`${meteo.data[0].uv_index}`} title={'UV Index'} />
						<InfoBox icon={'umbrella.svg'} data={`${meteo.data[0].precipitation_probability}%`} title={'Precipitation'} />
					</div>
				</>
			) : (
				<p>Fetching location...</p>
			)}
		</div>
	);
}
