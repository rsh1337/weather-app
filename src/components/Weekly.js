import InfoCard from "@/components/UI/InfoCard";

export default function Weekly(){
    return(
        <div className={"flex flex-col w-[21rem] gap-2 rounded-xl backdrop-opacity-50 bg-[#E2EAFC]/30 p-2 divide-y divide-[#B6CCFE]"}>
            <h1 className={"text-sm font-thin uppercase text-center "}>7 Days Forecast</h1>
            <div className={"flex flex-col gap-1"}>
            <InfoCard icon={"sunny.svg"} day={"Today"} temp={"32"} />
            <InfoCard icon={"foggy.svg"} day={"Thursday"} temp={"69"} />
            <InfoCard icon={"rainy.svg"} day={"Wednesday"} temp={"88"} />
            <InfoCard icon={"thunder.svg"} day={"Friday"} temp={"21"} />
                <InfoCard icon={"sunny.svg"} day={"Today"} temp={"32"} />
                <InfoCard icon={"foggy.svg"} day={"Thursday"} temp={"69"} />
                <InfoCard icon={"rainy.svg"} day={"Wednesday"} temp={"88"} />
            </div>
        </div>
    )
}