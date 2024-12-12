import Link from "next/link";
import Logo from "./logo";
import Searchbar from "./Searchbar";
import Cl from "./Cl";
import Cl2 from "./CL2";

function Header() {
    return (
        <div>
            <div className="p-4 border-b border-gray-600 flex items-center justify-between">
                <Logo></Logo>
                <div className="flex">
                    <Cl2 link='/docs'>Docs</Cl2>
                    <Cl2 link='/perallel-routing'>Perallel routes</Cl2>

                </div>
                <Searchbar />
            </div>

        </div>
    );
}

export default Header;