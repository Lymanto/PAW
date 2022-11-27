import React from "react";
import Profile from "./Profile";
import SearchInput from "./SearchInput";

export default function TopBar({ auth }) {
    return (
        <div className="w-full flex flex-row justify-end items-center">
            {/* <SearchInput /> */}
            <Profile name={auth.user.name} />
        </div>
    );
}
