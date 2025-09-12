import { useState } from 'react';
import ButtonAddClient from './ButtonAddClient';

const SearchBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [colorIcon, setColorIcon] = useState("var(--secondary-text)");
    const [isAnimating, setIsAnimating] = useState(false);


    const SearchIcon: React.FC<{stroke: string}> = ({stroke}) =>{
        return (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${isAnimating ? "animate-pings" : ""} `}>
                <path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        )
    }

    const handleClick = () => {
        setIsOpen(!isOpen);
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
        }, 300);
    }

    return (
        <div className="flex items-center justify-end gap-3 max-h-8">
            <input className={`${
                isOpen ? "transition-all ease-in-out duration-300 w-full p-2 px-4" : 
                "transition:all ease-in-out duration-300 w-0"}
                bg-[var(--background-color)] rounded-xl placeholder:font-semibold placeholder:text-md
                placeholder:text-[var(--ph-text)] border-none stroke-none outline-none focus:filter focus:brightness-90 hover:filter hover:brightness-90
                font-semibold
                `} type="text" placeholder="Pesquise por clientes"></input>
            <button 
            onClick={handleClick}
            onMouseEnter={() => setColorIcon("var(--background-color)")}
            onMouseLeave={() => setColorIcon("var(--secondary-text)")}
            className={`p-1.5 rounded-md hover:bg-[var(--app-color)] transition-all duration-300`}>
                <SearchIcon stroke={colorIcon}/>
            </button> 
            <ButtonAddClient/>
        </div>
    )
}

export default SearchBar;