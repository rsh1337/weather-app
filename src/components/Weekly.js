import InfoCard from '@/components/UI/InfoCard';
import useSWR from 'swr';
import { fetcher } from '../../lib/fetcher';
import Image from "next/image"

export default function Weekly({ longitude, latitude }) {
    const { data, error } = useSWR(`/api/7dayForecast?lat=${latitude}&long=${longitude}`,fetcher);
    if (error) {
        return(
            <div
                className={
                    'flex flex-col w-[20.5rem] md:w-[21rem] gap-2 rounded-xl backdrop-opacity-50 bg-[#E2EAFC]/30 p-2 divide-y divide-[#B6CCFE]'
                }
            >
                <h1 className={'text-sm font-thin uppercase text-center '}>
                    7 Days Forecast
                </h1>
                <div className={'flex items-center flex-col gap-1'}>
                    Fetching Error
                </div>
            </div>
        )
    }
    if (!data) {
        return(
            <div
                className={
                    'flex flex-col w-[20.5rem] md:w-[21rem] gap-2 rounded-xl backdrop-opacity-50 bg-[#E2EAFC]/30 p-2 divide-y divide-[#B6CCFE] animate-pulse'
                }
            >
                <h1 className={'text-sm font-thin uppercase text-center '}>
                    7 Days Forecast
                </h1>
                <div className={'flex items-center h-12 flex-col gap-1'}/>
            </div>
        )
    }
    return (
        <div
            className={
                'flex -z-10 flex-col w-[20.5rem] md:w-[21rem] gap-2 rounded-xl backdrop-opacity-50 bg-[#E2EAFC]/30 p-2 divide-y divide-[#B6CCFE]'
            }
        >
            <div className={"flex flex-row-reverse justify-between items-center w-full"}>
                <Image width={15} height={15} src={"/Icons/externalLink.svg"} alt={"Link Icon"} />
                <h1 className={'text-sm font-thin uppercase text-center flex-grow'}>
                    7 Days Forecast
                </h1>
            </div>

            <div className={'flex flex-col gap-1'}>
                {data.daily.time.map((day, index) => (
                    <InfoCard icon={`${data.daily.weathercode[index]}.svg`} day={`${day}`} tempMax={`${data.daily.temperature_2m_max[index]}`} tempMin={`${data.daily.temperature_2m_min[index]}`} key={index} index={index} longitude={longitude} latitude={latitude} />
                ))}
            </div>
        </div>
    );
}
