import Image from 'next/image';
import {Popover, Transition} from "@headlessui/react";

function Panel({latitude, longitude, option}){
    return(
        <h1>{latitude}, {longitude}, {option}</h1>
    )
}

export default function InfoBox({ title, icon, data, extended, latitude, longitude, option }) {
	return extended ? (
        <Popover>
            <Popover.Button>
		<div
			className={
				'-z-20 flex flex-col w-[10rem] h-[10rem] gap-3 justify-center items-center rounded-xl backdrop-opacity-50 bg-[#E2EAFC]/30 p-3'
			}
		>
            <Image src={"/Icons/externalLink.svg"} alt={"link icon"} width={15} height={15} className={"absolute top-0 mt-3 self-end"}/>
			<h1 className={'text-sm font-thin uppercase text-center'}>
				{title}
			</h1>
			<div className={'flex flex-row items-center gap-2'}>
				<Image
					src={`/weather-icons/${icon}`}
					alt={'Icon'}
					width={35}
					height={35}
				/>
				<h1 className={'font-semibold text-xl'}>{data}</h1>
			</div>
		</div>
            </Popover.Button>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Popover.Panel>
                    <Panel latitude={latitude} longitude={longitude} option={option} />
                </Popover.Panel>
            </Transition>
        </Popover>
	) : (
		<div
			className={
				'-z-20 flex flex-col w-[10rem] h-[10rem] gap-3 justify-center items-center rounded-xl backdrop-opacity-50 bg-[#E2EAFC]/30 p-3'
			}
		>
			<h1 className={'text-sm font-thin uppercase text-center'}>
				{title}
			</h1>
			<div className={'flex flex-row items-center gap-2'}>
				<Image src={`/weather-icons/${icon}`} alt={'Icon'} width={35} height={35} />
				<h1 className={'font-semibold text-xl'}>{data}</h1>
			</div>
		</div>
	);
}
