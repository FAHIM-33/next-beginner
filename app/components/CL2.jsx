"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

function Cl2({ children, link }) {

    const path = usePathname()

    return (
        <Link
            className={`text-gray-300 text-nowrap  hover:bg-green-950  w-full block border-b border-transparent p-2 ${path.includes(link) ? 'text-green-400 border-b-green-400 ' : ''}`}
            href={`${link}`}
        >{children}</Link>
    );
}

export default Cl2;