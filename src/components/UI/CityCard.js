import Image from 'next/image';

export default function CityCard({ cityName, icon, temp, lowTemp, highTemp }) {
	return (
		<div
			className={
				'flex flex-row items-center justify-between backdrop-opacity-50 bg-[#E2EAFC]/30 p-3 rounded-2xl'
			}
		>
			<div className={'flex flex-col gap-1'}>
				<Image
					src={`/weather-icons/${icon}`}
					alt={'Icon'}
					width={35}
					height={35}
				/>
				<h1 className={'font-semibold'}>{cityName}</h1>
			</div>
			<div className={'flex flex-col items-center gap-1'}>
				<h1 className={'text-2xl font-light'}>{temp}</h1>
				<div className={'flex flex-row gap-3 text-sm font-thin'}>
					<h1>H: {highTemp}</h1>
					<h1>L: {lowTemp}</h1>
				</div>
			</div>
		</div>
	);
}
