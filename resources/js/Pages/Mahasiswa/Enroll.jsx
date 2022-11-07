import React from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "@inertiajs/inertia-react";
import Profile from "@/Components/Profile";
import SearchInput from "@/Components/SearchInput";
import History1 from "../../assets/images/history1.png";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/Button";

export default function Enroll() {
    return (
        <div>
            <div className="pt-[30px] px-[40px] flex flex-row justify-between items-center mb-[50px]">
                <div className="img-logo">
                    <Link href="/home">
                        <img src={Logo} className="w-full" alt="Logo Pradita" />
                    </Link>
                </div>
                <SearchInput />
                <Profile />
            </div>
            <div className="px-[40px] flex flex-row">
                <div className="w-[500px] h-[275px] flex-0">
                    <img
                        src={History1}
                        className="w-full h-full object-cover rounded-[10px]"
                        alt="Logo Pradita"
                    />
                </div>
                <div className="flex-1 ml-[30px]">
                    <h1 className="font-semibold text-xl">Pemrograman Web</h1>
                    <p className="mt-[10px] mb-[16px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                    <div className="flex flex-col mb-[16px]">
                        <div className="mb-[6px] font-medium">Teacher</div>
                        <div>Master Edison</div>
                    </div>
                    <div>
                        <div className="mb-[6px] font-medium">Enroll</div>
                        <div className="flex flex-row">
                            <TextInput
                                placeholder="Enter Code"
                                className="w-[222px] mr-[20px]"
                            />
                            <Button>Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
