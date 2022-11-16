import React from "react";

export default function PertemuanBox({ image, title, desc, id }) {
    return (
        <div className="flex flex-row gap-[20px]">
            <div className="w-[260px] h-[160px] flex-0">
                <img
                    src={image}
                    className="w-full h-full object-cover rounded-[10px]"
                    alt="Logo Pradita"
                />
            </div>
            <div className="flex-1">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-[10px] mb-[30px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    );
}
