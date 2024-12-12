
function Searchbar() {
    return (
        <div>
            <input type="text"
                className="bg-transparent border border-gray-600 p-2 rounded-md w-72 text-sm outline-none focus:border-green-400"
                placeholder="Search"
            />
        </div>
    );
}

export default Searchbar;