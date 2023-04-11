import InfoCard from "@/components/UI/InfoCard";


export default function Index(){
  return(
      <div className={"flex"}>
          <div className={"flex w-full justify-center"}>
              <InfoCard label={"100%"} icon={"cloudy.svg"} label2={"lightnining"} />
          </div>
      </div>
  )
}