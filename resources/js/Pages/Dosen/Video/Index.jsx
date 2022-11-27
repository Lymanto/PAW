import { Link } from "@inertiajs/inertia-react";
import React from "react";
import ReactPlayer from "react-player";

import ICArrowLeft from "../../../assets/icon/ICArrowLeftBig.svg";

export default function Index({ video }) {
    return (
        <div className="flex flex-row hvh-100">
            <div className="h-full w-[1000px] player-wrapper bg-black">
                <Link
                    className="absolute top-[30px] left-[30px] rounded-full bg-white p-[14px] z-10"
                    href={route("dosen.home.detail", { id: video.class_id })}
                >
                    <img src={ICArrowLeft} />
                </Link>
                <ReactPlayer
                    url={`/storage/${video.video_url}`}
                    controls={true}
                    width="100%"
                    height="100%"
                    className="react-player"
                />
            </div>
            <div className="flex flex-col p-[30px]">
                <h1 className="font-medium text-xl mb-[15px]">
                    {video.classes.title}
                </h1>
                <div className="font-medium mb-[10px]">{video.title}</div>
                <div>{video.description}</div>
            </div>
        </div>
    );
}
