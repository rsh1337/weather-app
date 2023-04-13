import HeaderInfo from '@/components/UI/HeaderInfo';
import DailyTemp from '@/components/DailyTemp';
import Informations from "@/components/informations";

export default function Index({isOpen}) {
	return (
		<div className={`flex flex-col`}>
			<div className={'flex flex-col w-full gap-12 items-center justify-center'}>
				<HeaderInfo icon={'sunny.svg'} lowTemp={'10'} highTemp={'20'} temp={'12'} city={'Bacau'} />
			</div>
			<div className={'mt-12 rounded-xl'}>
				<DailyTemp />
			</div>
			<Informations isOpen={isOpen}/>
		</div>
	);
}
