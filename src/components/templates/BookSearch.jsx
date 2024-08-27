import React, {useState} from "react";
import {SearchOutlineIcon} from "../items/Icons";

const BookSearch = ({setSearchText}) => {
    const [filter, setFilter] = useState("");

    const searchBook = (e) => {
        e.preventDefault();
        setSearchText(filter);
    };

    return (
        <form className="relative" onSubmit={searchBook}>
            <div className="absolute inset-y-0 flex items-center left-3">
                {<SearchOutlineIcon className="w-6 h-6 text-gray-600"/>}
            </div>
            <input
                type="text"
                className="w-full py-3 pl-12 pr-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-40"
                placeholder="Search the book..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
        </form>
    );
};
export default BookSearch;