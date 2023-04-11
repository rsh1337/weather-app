import Image from "next/image";
import CityCard from "@/components/UI/CityCard";

export default function Sidebar(){
    return(
        <div className={"basis-1/3 backdrop-opacity-5 bg-[#E2EAFC]/30 rounded-xl p-4"}>
            <div className={"flex items-center flex-row gap-3 backdrop-opacity-5 bg-[#E2EAFC]/30 p-3 rounded-xl"}>
                <Image src={"/Icons/search.svg"} alt={"Search Icon"} width={30} height={30}/>
                <h1 className={"font-thin text-gray-500"}>Search</h1>
            </div>
            <div className={"mt-5"}>
                <CityCard icon={"cloudy.svg"} cityName={"Piatra-Neamt"} temp={"20°C"} highTemp={"93°C"} lowTemp={"0°C"}/>
            </div>
        </div>
    )
}