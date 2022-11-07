import { Link } from "@inertiajs/inertia-react";
import React from "react";
export default function HistoryBox({
    id,
    images,
    title,
    subTitle,
    href,
    className,
}) {
    return (
        <div
            className={`relative group overflow-hidden rounded-lg ${className}`}
        >
            <img
                src={images}
                alt={id}
                className="object-cover w-full w-[360px] h-[210px] rounded-lg"
            />
            <div
                className="absolute bottom-0 h-[100px] left-0 right-0 bg-gradient-to-t from-black rounded-bl-[10px]
                                rounded-br-[10px] flex flex-col px-[20px] pb-[20px] justify-end "
            >
                <span className="text-white text-sm">{subTitle}</span>
                <span className="text-white font-semibold text-lg">
                    {title}
                </span>
            </div>
            <a href={href} className="inset-0 absolute z-50"></a>
        </div>
    );
}
