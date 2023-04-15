import Image from "next/image";
import {useState} from "react";
import toast from "react-hot-toast";
import {useRouter} from "next/router";

export default function SearchBar({closeSidebar}){
    const [query, setQuery] = useState('');
    const router = useRouter()
    const handleSearch = async () => {
        if (!query) {
            toast.error('Please enter a search.');
            return;
        }
        const response = await fetch(`/api/search?search=${query}`);
        const data = await response.json();
        if (data.error) {
            toast.error(`${data.message}`);
            return;
        }
        closeSidebar();
        return router.push(`/city?latitude=${data.latitude}&longitude=${data.longitude}`)
    };
    return(
        <form onSubmit={handleSearch}>
        <div
            className={
                `flex items-center ${query !== "" ? 'flex-row-reverse' : 'flex-row'} gap-3 backdrop-opacity-5 bg-[#E2EAFC]/30 p-3 rounded-xl`
            }
        >
                <Image
                    src={'/Icons/search.svg'}
                    alt={'Search Icon'}
                    width={30}
                    height={30}
                    onClick={handleSearch}
                />
                <input className={'font-thin text-gray-500 bg-transparent rounded-xl p-2 focus:outline-0 focus:outline'} placeholder={"Search"} type={"text"} value={query} onChange={e => setQuery(e.target.value)} />
        </div>
        </form>
    )
}