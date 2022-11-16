import React from "react";

import Logo from "../../assets/images/logo.png";
import ICArrowLeft from "../../assets/icon/ICArrowLeft.svg";
import { Head, Link } from "@inertiajs/inertia-react";
import Profile from "@/Components/Profile";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import UploadBox from "@/Components/UploadBox";
export default function Upload() {
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
            <div className="mx-[40px] flex flex-row gap-[10px]">
                <img src={ICArrowLeft} alt="Arrow left" />
                <div className="font-medium text-gray-4">Pemrograman Web</div>
            </div>
            <h1 className="m-[40px] font-semibold text-2xl">Upload Video</h1>
            <div className="mx-[40px] flex flex-row gap-[40px] ">
                <div className="flex-0 w-full">
                    <div className="flex flex-col mb-[20px]">
                        <InputLabel
                            forInput="title"
                            value="Video Title"
                            className="mb-[15px]"
                        />
                        <TextInput
                            type="text"
                            name="title"
                            placeholder="Video Title"
                        />
                    </div>
                    <div className="flex flex-col">
                        <InputLabel
                            forInput="desc"
                            value="Description"
                            className="mb-[15px]"
                        />
                        <textarea
                            className="border-gray-2 rounded-lg py-2 px-[20px] w-full placeholder-[#B4B4B4] focus:border-transparent focus:ring-0 focus:outline-alerange min-h-[250px]"
                            placeholder="Description"
                            name="desc"
                            id="desc"
                        ></textarea>
                    </div>
                </div>
                <div className="flex-0 w-full">
                    <UploadBox />
                </div>
            </div>
        </div>
    );
}
