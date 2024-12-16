"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

function Cl({ child, rootNode }) {

    const path = usePathname()

    return (
        <Link
            className={`text-gray-300 hover:text-green-400 w-full block border-l border-gray-700 pl-4 ${path == `/docs/${rootNode.id}/${child.id}` ? 'border-l-green-400 text-green-400 ' : ''}`}
            href={`/docs/${rootNode.id}/${child.id}`}
        >{child.title}</Link>
    );
}

export default Cl;