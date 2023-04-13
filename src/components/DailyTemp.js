import HourPill from "@/components/UI/HourPill";

export default function DailyTemp(){
    return(
        <div className={"flex flex-col gap-4 rounded-xl backdrop-opacity-50 bg-[#E2EAFC]/30 p-2 divide-y divide-[#B6CCFE]"}>
            <h1 className={"text-sm font-thin uppercase text-center"}>24 Hours Temp</h1>
            <div className={"flex flex-row gap-4 overflow-auto md:scrollbar-thin scrollbar-none scrollbar-thumb-[#D7E3FC] scrollbar-track-[#C1D3FE] snap-x"}>
                <HourPill temp={"20"} icon={"0.svg"} time={"1:00"} />
            </div>
        </div>
    )
}