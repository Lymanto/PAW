import Button from "@/Components/Button";
import { Head, Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import ICPlay from "../../assets/icon/ICPlay.svg";
import ICPlayActive from "../../assets/icon/ICPlayActive.svg";
import Profile from "@/Components/Profile";

export default function ClassDetail() {
    const [active, setActive] = useState(1);
    const majorData = [
        { id: 1, title: "Pertemuan 1" },
        { id: 2, title: "Pertemuan 2" },
        { id: 3, title: "Pertemuan 3" },
        { id: 4, title: "Pertemuan 4" },
        { id: 5, title: "Pertemuan 5" },
        { id: 6, title: "Pertemuan 6" },
        { id: 7, title: "Pertemuan 7" },
        { id: 8, title: "Pertemuan 8" },
        { id: 9, title: "Pertemuan 9" },
        { id: 10, title: "Pertemuan 10" },
        { id: 11, title: "Pertemuan 11" },
        { id: 12, title: "Pertemuan 12" },
    ];
    return (
        <div className="flex flex-row">
            <Head title="Class Detail" />
            <div className="p-[30px] pr-0 w-[300px] border-[#E5E7EB] border-r-[1px] h-full fixed flex flex-col justify-between">
                <div>
                    <div className="img-logo pb-[50px]">
                        <Link href="/home">
                            <img
                                src={Logo}
                                className="w-full"
                                alt="Logo Pradita"
                            />
                        </Link>
                    </div>
                    <div className="mb-[20px]">
                        <h2 className="font-semibold text-lg mb-[8px]">
                            Pemrograman Web
                        </h2>
                        <p className="text-sm">Master Edison</p>
                    </div>
                    <div className="flex flex-col gap-y-[20px] max-h-[520px] overflow-y-scroll">
                        {majorData.map((val) => {
                            return (
                                <Button
                                    className="flex flex-row justify-center items-center py-[10px] pl-[20px] gap-x-[10px] min-w-[210px] max-w-[210px] rounded-full"
                                    variant={
                                        active === val.id ? "primary" : "second"
                                    }
                                >
                                    <img
                                        src={
                                            active === val.id
                                                ? ICPlayActive
                                                : ICPlay
                                        }
                                        alt="Play Active icon"
                                    />
                                    <span>{val.title}</span>
                                </Button>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col">
                <div className="self-end pt-[44px] pr-[40px]">
                    <Profile />
                </div>
                <div className="ml-[300px] pl-[50px] mt-[50px] pr-[40px]">
                    <h1 className="font-semibold text-2xl">Dasar HTML</h1>
                    <p className="pt-[10px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    );
}
