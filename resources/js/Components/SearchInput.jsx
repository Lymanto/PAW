import React from "react";
import ICSearch from "../assets/icon/ICSearch.svg";
export default function SearchInput() {
    return (
        <div className="w-1/2 relative">
            <input
                type="search"
                name="search"
                className="w-full px-[20px] py-[12px] border-gray-2 rounded-lg placeholder-gray-1 focus:border-transparent focus:ring-0 focus:outline-alerange"
                placeholder="Search"
            />
            <img src={ICSearch} className="absolute top-3 right-5" />
        </div>
    );
}
