import { Link } from "@inertiajs/inertia-react";
import React, { useRef, useState } from "react";
import ProfileImage from "../assets/images/profile.svg";
export default function Profile() {
    const [open, setOpen] = useState(true);
    const dropdownTarget = useRef();

    const trigger = () => {
        if (open) {
            dropdownTarget.current.classList.remove("hidden");
        } else {
            dropdownTarget.current.classList.add("hidden");
        }
        setOpen(!open);
    };

    return (
        <>
            <div className="flex flex-row items-center" onClick={trigger}>
                <div className="mr-[16px] font-medium">Lymanto Hadibrata</div>
                <img src={ProfileImage} alt="profile image" />
            </div>
            <div
                className="bg-white rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-[40px] top-[90px] min-w-[140px] hidden overflow-hidden"
                ref={dropdownTarget}
            >
                <Link
                    href="/profile"
                    className="transition-all hover:bg-sky-100 p-4"
                >
                    Profile
                </Link>
                <Link
                    href="/logout"
                    className="transition-all hover:bg-sky-100 p-4"
                >
                    Sign Out
                </Link>
            </div>
        </>
    );
}
