import Image from 'next/image';

export default function InfoCard({ label, icon, label2 }) {
	return (
		<div
			className={
				'flex flex-row items-center justify-between backdrop-opacity-50 bg-[#E2EAFC]/30 p-3 rounded-2xl w-[15rem]'
			}
		>
			<div className={"flex flex-row items-center gap-2"}>
				<Image
					src={`/weather-icons/${icon}`}
					alt={'Icon'}
					width={35}
					height={35}
				/>
				<h1>{label2}</h1>
			</div>
			<h1>{label}</h1>
		</div>
	);
}
