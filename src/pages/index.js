import HeaderInfo from "@/components/UI/HeaderInfo";
import Weekly from "@/components/Weekly";
import DailyTemp from "@/components/DailyTemp";


export default function Index(){
  return(
      <div className={"flex flex-col"}>
          <div className={"flex flex-col w-full gap-12 items-center justify-center"}>
              <HeaderInfo icon={"sunny.svg"} lowTemp={"10"} highTemp={"20"} temp={"12"} city={"Bacau"}/>
          </div>
          <div className={"mt-12"}>
              <DailyTemp/>
          </div>
          <div className={"mt-3"}>
            <Weekly/>
          </div>
      </div>
  )
}