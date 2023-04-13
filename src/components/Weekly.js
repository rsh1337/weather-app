import InfoCard from '@/components/UI/InfoCard';
import useSWR from 'swr';
import { fetcher } from '../../lib/fetcher';

export default function Weekly({ longitude, latitude }) {
    const { data, error } = useSWR(`/api/7dayForecast?lat=${latitude}&long=${longitude}`,fetcher
    );
    console.log(data);
    if (error) {
        return <h1>Error fetching data</h1>;
    }
    if (!data) {
        return <p>Fetching location...</p>;
    }
    return (
        <div
            className={
                'flex flex-col w-[20.5rem] md:w-[21rem] gap-2 rounded-xl backdrop-opacity-50 bg-[#E2EAFC]/30 p-2 divide-y divide-[#B6CCFE]'
            }
        >
            <h1 className={'text-sm font-thin uppercase text-center '}>
                7 Days Forecast
            </h1>
            <div className={'flex flex-col gap-1'}>
                {data.daily.time.map((day, index) => (
                    <InfoCard icon={`${data.daily.weathercode[index]}.svg`} day={`${day}`} temp={`${data.daily.temperature_2m_max[index]}`} key={index} />
                ))}
            </div>
        </div>
    );
}
