"use client"

import Image from "next/image";
import Link from "next/link";
import { IconLink } from "./Utilities/myUtlities.jsx";

function Navigation({ params }) {
    
    return (
        <header className={`w-full z-20 bg-slate-300`} >       
            {/* Header de navegación */}
            <nav className="hidden md:flex md:justify-between md:relative w-2/3 m-auto bg-opacity-30" style={{width: "82%",maxWidth: "1468px"}}>
                <ul className="flex items-center gap-3 mr-5">
                    <li className="flex items-center gap-1 py-12 px-2 text-xs font-semibold ">
                        <Link href={"/informacion-corporativa"}>Profil</Link>
                    </li>
                    <li className="flex items-center gap-1 py-12 px-2 text-xs font-semibold">
                        <Link href={"/"}>Dashboard</Link> 
                    </li>
                    <li className="flex items-center gap-1 py-12 px-2 text-xs font-semibold">
                        <Link href={"/"}>Sign Out</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;