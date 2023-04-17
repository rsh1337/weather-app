import Image from 'next/image';
import { useState, useEffect } from 'react';
import {useRouter} from "next/router";

export default function SaveButton({ cityName, lat, long }) {
	const [isSaved, setIsSaved] = useState(false);
	const router = useRouter()
	useEffect(() => {
		const cities = JSON.parse(localStorage.getItem('cities')) || [];
		const cityExists = cities.some(
			(city) =>
				city.name === cityName &&
				city.latitude === lat &&
				city.longitude === long
		);
		setIsSaved(cityExists);
	}, [cityName, lat, long]);

	const toggleSaved = () => {
		const cities = JSON.parse(localStorage.getItem('cities')) || [];
		const savedCity = cities.find(
			(city) =>
				city.name === cityName &&
				city.latitude === lat &&
				city.longitude === long
		);
		if (savedCity) {
			const filteredCities = cities.filter(
				(city) =>
					city.name !== cityName ||
					city.latitude !== lat ||
					city.longitude !== long
			);
			localStorage.setItem('cities', JSON.stringify(filteredCities));
			setIsSaved(false);
			return router.reload()
		} else {
			const cityInfo = {
				name: cityName,
				latitude: lat,
				longitude: long
			};
			cities.push(cityInfo);
			localStorage.setItem('cities', JSON.stringify(cities));
			setIsSaved(true);
			return router.reload()
		}
	};

	return (
		<button className={'absolute right-0 mr-10'} onClick={toggleSaved}>
			<Image
				src={isSaved ? '/Icons/star-2.svg' : '/Icons/star.svg'}
				alt="Save Icon"
				width={30}
				height={30}
			/>
		</button>
	);
}
