import HourPill from "@/components/UI/HourPill";
import useSWR from "swr";
import {fetcher} from "../../lib/fetcher";
export default function DailyTemp({latitude, longitude}){
    const { data, error } = useSWR(`/api/24hrsForecast?lat=${latitude}&long=${longitude}`,fetcher);
    if (error) {
        return(
            <div className={"flex flex-col gap-4 rounded-xl backdrop-opacity-50 bg-[#E2EAFC]/30 p-2 divide-y divide-[#B6CCFE]"}>
                <h1 className={"text-sm font-thin uppercase text-center"}>24 Hours Temp</h1>
                <div className={"flex justify-center flex-row gap-4 overflow-auto md:scrollbar-thin scrollbar-none scrollbar-thumb-[#D7E3FC] scrollbar-track-[#C1D3FE] snap-x"}>
                    Fetching Error
                </div>
            </div>
        )
    }
    if (!data) {
        return(
            <div className={"flex flex-col gap-4 rounded-xl backdrop-opacity-50 bg-[#E2EAFC]/30 p-2 divide-y divide-[#B6CCFE] animate-pulse"}>
                <h1 className={"text-sm font-thin uppercase text-center"}>24 Hours Temp</h1>
                <div className={"flex flex-row justify-center gap-4 overflow-auto md:scrollbar-thin scrollbar-none scrollbar-thumb-[#D7E3FC] scrollbar-track-[#C1D3FE] snap-x"}>
                    <div className="h-12 rounded"></div>
                </div>
            </div>
        )
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