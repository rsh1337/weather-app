import InfoCard from "@/components/UI/InfoCard";
import HeaderInfo from "@/components/UI/HeaderInfo";


export default function Index(){
  return(
      <div className={"flex"}>
          <div className={"flex flex-col w-full gap-12 items-center justify-center"}>
              <HeaderInfo icon={"sunny.svg"} lowTemp={"10"} highTemp={"20"} temp={"12"} city={"Bacau"}/>
              <InfoCard label={"100%"} icon={"cloudy.svg"} label2={"lightnining"} />
          </div>
      </div>
  )
}