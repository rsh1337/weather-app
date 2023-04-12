import HourPill from "@/components/UI/HourPill";

export default function DailyTemp(){
    return(
        <div className={"flex flex-col gap-4 rounded-xl backdrop-opacity-50 bg-[#E2EAFC]/30 p-2 divide-y divide-[#B6CCFE]"}>
            <h1 className={"text-sm font-thin uppercase text-center"}>24 Hours Temp</h1>
            <div className={"flex flex-row gap-4 overflow-auto md:scrollbar-thin scrollbar-none scrollbar-thumb-[#D7E3FC] scrollbar-track-[#C1D3FE] snap-x"}>
                <HourPill temp={"20"} icon={"sunny.svg"} time={"1:00"} />
                <HourPill temp={"20"} icon={"sunny.svg"} time={"2:00"} />
                <HourPill temp={"20"} icon={"sunny.svg"} time={"3:00"} />
                <HourPill temp={"20"} icon={"sunny.svg"} time={"4:00"} />
                <HourPill temp={"20"} icon={"sunny.svg"} time={"5:00"} />
                <HourPill temp={"20"} icon={"sunny.svg"} time={"6:00"} />
                <HourPill temp={"20"} icon={"sunny.svg"} time={"7:00"} />
                <HourPill temp={"20"} icon={"sunny.svg"} time={"8:00"} />
                <HourPill temp={"20"} icon={"sunny.svg"} time={"9:00"} />
                <HourPill temp={"20"} icon={"sunny.svg"} time={"10:00"} />
                <HourPill temp={"20"} icon={"sunny.svg"} time={"11:00"} />
                <HourPill temp={"20"} icon={"sunny.svg"} time={"12:00"} />
                <HourPill temp={"20"} icon={"sunny.svg"} time={"13:00"} />
                <HourPill temp={"20"} icon={"sunny.svg"} time={"14:00"} />
                <HourPill temp={"20"} icon={"sunny.svg"} time={"15:00"} />
                <HourPill temp={"20"} icon={"sunny.svg"} time={"16:00"} />
                <HourPill temp={"20"} icon={"sunny.svg"} time={"17:00"} />
                <HourPill temp={"20"} icon={"sunny.svg"} time={"18:00"} />
                <HourPill temp={"20"} icon={"sunny.svg"} time={"19:00"} />
                <HourPill temp={"20"} icon={"sunny.svg"} time={"20:00"} />
                <HourPill temp={"20"} icon={"sunny.svg"} time={"21:00"} />
                <HourPill temp={"20"} icon={"sunny.svg"} time={"22:00"} />
                <HourPill temp={"20"} icon={"sunny.svg"} time={"23:00"} />
            </div>
        </div>
    )
}