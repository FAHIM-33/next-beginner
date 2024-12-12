import Link from "next/link";
import Cl from "./Cl";



function Sidebar({ docs }) {

    const roots = docs.filter(doc => !doc.parent)

    const parents = docs.filter(doc => doc.parent)

    const nonRoots = Object.groupBy(parents, ({ parent }) => parent)

    return (
        <nav className="w-fit border-r border-gray-500 min-w-44">
            <ul className=" flex flex-col">
                {
                    roots.map((rootNode) => (
                        <li className="hover:bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 py-2 pl-6"
                            key={rootNode.id}>
                            <Link className="hover:text-green-400 w-full block" href={`/docs/${rootNode.id}`}>
                                {rootNode.title}
                            </Link>
                            {
                                nonRoots[rootNode.id] && <div className="flex flex-col ml-1 mt-1 ">
                                    {
                                        nonRoots[rootNode.id].map(child => (<Cl child={child} rootNode={rootNode} key={child.id}></Cl>))
                                    }
                                </div>
                            }
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Sidebar;