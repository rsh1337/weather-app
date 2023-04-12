import HeaderInfo from '@/components/UI/HeaderInfo';
import Weekly from '@/components/Weekly';
import DailyTemp from '@/components/DailyTemp';
import InfoBox from '@/components/UI/InfoBox';

export default function Index({isOpen}) {
	const gridClass = isOpen ? 'grid-cols-5' : 'grid-cols-6';
	return (
		<div className={`flex flex-col`}>
			<div className={'flex flex-col w-full gap-12 items-center justify-center'}>
				<HeaderInfo icon={'sunny.svg'} lowTemp={'10'} highTemp={'20'} temp={'12'} city={'Bacau'} />
			</div>
			<div className={'mt-12 rounded-xl'}>
				<DailyTemp />
			</div>
			<div className={`flex flex-row flex-wrap justify-center sm:grid sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-8 lg:${gridClass} grid-rows-3 grid-flow-dense gap-3 mt-3`}>
				<div className={"col-span-2 row-span-3"}>
					<Weekly />
				</div>
					<InfoBox icon={'sunrise.svg'} data={'09:00PM'} title={'Sun Rise'} />
					<InfoBox icon={'humidity.svg'} data={'50%'} title={'Humidity'} />
					<InfoBox icon={'windy.svg'} data={'14km/h'} title={'Wind'} />
					<InfoBox icon={'sunny.svg'} data={'100'} title={'UV Index'} />
					<InfoBox icon={'umbrella.svg'} data={'10%'} title={'Precipitation'} />
			</div>
		</div>
	);
}
