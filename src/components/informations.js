import Weekly from "@/components/Weekly";
import InfoBox from "@/components/UI/InfoBox";

export default function Informations({isOpen}){
    return(
        <div className={`flex flex-row flex-wrap justify-center md:grid sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-8 grid-rows-3 grid-flow-dense gap-3 mt-3 ${isOpen ? 'lg:grid-cols-5' : 'lg:grid-cols-6'}`}>
            <div className={"col-span-2 row-span-3"}>
                <Weekly />
            </div>
            <InfoBox icon={'sunrise.svg'} data={'09:00PM'} title={'Sun Rise'} />
            <InfoBox icon={'humidity.svg'} data={'50%'} title={'Humidity'} />
            <InfoBox icon={'windy.svg'} data={'14km/h'} title={'Wind'} />
            <InfoBox icon={'0.svg'} data={'100'} title={'UV Index'} />
            <InfoBox icon={'umbrella.svg'} data={'10%'} title={'Precipitation'} />
        </div>
    )
}