import HourPill from "@/components/UI/HourPill";
import useSWR from "swr";
import {fetcher} from "../../lib/fetcher";

export default function DailyTemp({latitude, longitude}){
    const { data, error } = useSWR(`/api/24hrsForecast?lat=${latitude}&long=${longitude}`,fetcher
    );
    console.log(data);
    if (error) {
        return <h1>Error fetching data</h1>;
    }
    if (!data) {
        return <p>Fetching location...</p>;
    }
    console.log(data)
    return(
        <div className={"flex flex-col gap-4 rounded-xl backdrop-opacity-50 bg-[#E2EAFC]/30 p-2 divide-y divide-[#B6CCFE]"}>
            <h1 className={"text-sm font-thin uppercase text-center"}>24 Hours Temp</h1>
            <div className={"flex flex-row gap-4 overflow-auto md:scrollbar-thin scrollbar-none scrollbar-thumb-[#D7E3FC] scrollbar-track-[#C1D3FE] snap-x"}>
                {data.hourly.time.map((hour, index) => (
                <HourPill temp={`${data.hourly.temperature_2m[index]}`} icon={`${data.hourly.weathercode[index]}.svg`} time={`${hour}`} key={index} />
                    ))}
            </div>
        </div>
    )
}