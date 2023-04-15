import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function SaveButton({ cityName, lat, long }) {
	const [isSaved, setIsSaved] = useState(false);

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
		} else {
			const cityInfo = {
				name: cityName,
				latitude: lat,
				longitude: long
			};
			cities.push(cityInfo);
			localStorage.setItem('cities', JSON.stringify(cities));
			setIsSaved(true);
		}
	};

	return (
		<button className={'absolute right-0 mr-5'} onClick={toggleSaved}>
			<Image
				src={isSaved ? '/Icons/star-2.svg' : '/Icons/star.svg'}
				alt="Save Icon"
				width={30}
				height={30}
			/>
		</button>
	);
}
