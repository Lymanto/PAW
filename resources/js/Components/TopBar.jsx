import React from "react";
import Profile from "./Profile";
import SearchInput from "./SearchInput";

export default function TopBar() {
    return (
        <div className="w-full flex flex-row justify-between items-center">
            <SearchInput />
            <Profile />
        </div>
    );
}
