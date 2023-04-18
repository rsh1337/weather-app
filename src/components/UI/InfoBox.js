import Image from 'next/image';

export default function InfoBox({ title, icon, data }) {
    return (
        <div className={'-z-10 flex flex-col w-[10rem] h-[10rem] gap-3 justify-center items-center rounded-xl backdrop-opacity-50 bg-[#E2EAFC]/30 p-3'}>
            <h1 className={'text-sm font-thin uppercase text-center'}>{title}</h1>
            <div className={'flex flex-row items-center gap-2'}>
                <Image src={`/weather-icons/${icon}`} alt={'Icon'} width={35} height={35} />
                <h1 className={'font-semibold text-xl'}>{data}</h1>
            </div>
        </div>
    );
}
