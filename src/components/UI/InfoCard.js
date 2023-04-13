import Image from 'next/image';

export default function InfoCard({ tempMin, tempMax, icon, day }) {
	return (
		<div
			className={
				'flex flex-row items-center justify-between p-3 rounded-2xl'
			}
		>
			<div className={"flex flex-row items-center gap-2"}>
				<Image
					src={`/weather-icons/${icon}`}
					alt={'Icon'}
					width={35}
					height={35}
				/>
				<h1>{day}</h1>
			</div>
			<div className={"text-sm flex flex-col items-end"}>
				<h1>Min: {tempMin}°C</h1>
				<h1>Max: {tempMax}°C</h1>
			</div>
		</div>
	);
}
