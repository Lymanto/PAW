import Button from "@/Components/Button";
import { Head, Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import Logo from "../../../assets/images/logo.png";
import ICPlay from "../../../assets/icon/ICPlay.svg";
import ICPlayActive from "../../../assets/icon/ICPlayActive.svg";
import Profile from "@/Components/Profile";
// import ReactPlayer from "react-player";

import { Inertia } from "@inertiajs/inertia";
import ReactPlayer from "react-player";

export default function ClassDetail({ auth, detail, videoList, active }) {
    const handleClick = (id) => {
        Inertia.post(route("mahasiswa.class.history"), {
            class_id: detail.id,
            video_id: id,
        });
    };
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
                            {detail.title}
                        </h2>
                        <p className="text-sm">{detail.user.name}</p>
                    </div>
                    <div className="flex flex-col gap-y-[20px] max-h-[520px] overflow-y-scroll">
                        {videoList.map((val) => {
                            return (
                                <Button
                                    className="flex flex-row justify-center items-center py-[10px] pl-[20px] gap-x-[10px] min-w-[210px] max-w-[210px] rounded-full"
                                    variant={
                                        active.id === val.id
                                            ? "primary"
                                            : "second"
                                    }
                                    onClick={() => handleClick(val.id)}
                                    key={val.id}
                                >
                                    <img
                                        src={
                                            active.id === val.id
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
                    <Profile name={auth.user.name} />
                </div>
                <div className="ml-[300px] pl-[50px] my-[50px] pr-[40px]">
                    <h1 className="font-semibold text-2xl">{active.title}</h1>
                    <p className="pt-[10px]">{active.description}</p>
                    <div className="mt-[30px] h-[560px] w-full relative bg-black">
                        <ReactPlayer
                            url={`/storage/${active.video_url}`}
                            controls={true}
                            width="100%"
                            height="100%"
                            className="react-player"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
