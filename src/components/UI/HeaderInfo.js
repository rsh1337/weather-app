import Image from 'next/image';

export default function HeaderInfo({ city, temp, lowTemp, highTemp, icon }) {
	return (
		<div className={'flex flex-col items-center gap-2'}>
			<h1 className={'text-3xl font-medium'}>{city}</h1>
			{/*<div className={'flex flex-row gap-2 font-thin text-gray-500'}>*/}
			{/*	<h1>High: {highTemp}°C</h1>*/}
			{/*	<h1>Low: {lowTemp}°C</h1>*/}
			{/*</div>*/}
			<div className={"flex flex-row gap-3 items-center"}>
				<Image
					src={`/weather-icons/${icon}`}
					alt={'Icon'}
					width={60}
					height={60}
				/>
				<h1 className={"text-3xl font-medium"}>{temp}°C</h1>
			</div>
		</div>
	);
}
