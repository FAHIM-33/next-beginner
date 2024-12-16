import Link from "next/link";
import { imgs } from "./data";

function PerallelRoutingPage() {

    return (
        <div>
            <p className="text-green-400 text-4xl m-4">Peralel routing</p>
            <div className="p-4 flex gap-4 justify-center">
                {
                    imgs?.map((im, i) =>
                        <Link href={`/gellary/${im.id}`} key={i} className="p-10 bg-gray-800 rounded-sm hover:bg-gray-900">{im?.name}</Link>
                    )
                }

            </div>
        </div>
    );
}

export default PerallelRoutingPage;