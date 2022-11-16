import { Head, Link } from "@inertiajs/inertia-react";
import React from "react";
import Profile from "@/Components/Profile";
import Logo from "../../assets/images/logo.png";
import History1 from "../../assets/images/history1.png";
import ICCopy from "../../assets/icon/ICCopy.svg";
import ICTrash from "../../assets/icon/ICTrash.svg";
import Button from "@/Components/Button";
import PertemuanBox from "@/Components/PertemuanBox";
import AcceptStudent from "@/Components/AcceptStudent";
import "../../../css/ClassDetail.css";
import ClassMember from "@/Components/ClassMember";
export default function ClassDetail() {
    return (
        <div>
            <Head title="Detail" />
            <div className="pt-[30px] mx-[40px] flex flex-row justify-between items-center mb-[50px]">
                <div className="img-logo">
                    <Link href="/home">
                        <img src={Logo} className="w-full" alt="Logo Pradita" />
                    </Link>
                </div>
                <Profile />
            </div>
            <h1 className="mx-[40px] mb-[15px] font-semibold text-[1.75rem]">
                Pemrograman Web
            </h1>
            <div className="mx-[40px] flex flex-row pb-[40px] border-b-[1px] border-gray-5">
                <div className="w-[500px] h-[275px] flex-0">
                    <img
                        src={History1}
                        className="w-full h-full object-cover rounded-[10px]"
                        alt="Logo Pradita"
                    />
                </div>
                <div className="flex-1 ml-[30px]">
                    <p className="mt-[10px] mb-[30px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                    <div className="flex flex-col mb-[16px]">
                        <div className="mb-[4px]">Class Code</div>
                        <div className="font-semibold flex flex-row gap-[8px]">
                            Xqpsr
                            <img src={ICCopy} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-[40px] mt-[40px] flex flex-row pb-[40px] justify-between gap-[40px]">
                <div className="flex flex-col gap-[15px] flex-1 ">
                    <div className="flex flex-row gap-[15px]">
                        <Button className="px-[6.5px] py-[6.5px] btn-trash">
                            <img src={ICTrash} alt="" />
                        </Button>
                        <Button variant="second">
                            <span className="font-medium">Upload Video</span>
                        </Button>
                    </div>
                    <PertemuanBox
                        title="Pertemuan 1"
                        image={History1}
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        id="1"
                    />
                    <PertemuanBox
                        title="Pertemuan 1"
                        image={History1}
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        id="1"
                    />
                </div>
                <div className="flex flex-col">
                    <div>
                        <h2 className="font-semibold text-xl mb-[20px]">
                            Request to Join
                        </h2>
                        <AcceptStudent
                            title="Lymanto Hadibrata"
                            nim="2010101022"
                        />
                        <AcceptStudent
                            title="Lymanto Hadibrata"
                            nim="2010101022"
                        />
                        <AcceptStudent
                            title="Lymanto Hadibrata"
                            nim="2010101022"
                        />
                    </div>
                    <div className="mt-[20px]">
                        <h2 className="font-semibold text-xl mb-[20px]">
                            Class Member
                        </h2>
                        <ClassMember
                            title="Lymanto Hadibrata"
                            nim="2010101022"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
