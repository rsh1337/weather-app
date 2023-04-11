import Image from 'next/image';

export default function HourPill({ temp, icon, time }) {
	return (
		<div
			className={
				'flex flex-col items-center justify-between p-3 gap-3 rounded-2xl snap-center'
			}
		>
			<h1>{time}</h1>
			<Image
				src={`/weather-icons/${icon}`}
				alt={'Icon'}
				width={35}
				height={35}
			/>
			<h1>{temp}°C</h1>
		</div>
	);
}
