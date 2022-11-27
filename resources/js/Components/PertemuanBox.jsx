import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function PertemuanBox({ image, title, desc, link }) {
    return (
        <Link href={link}>
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
                    <p className="mt-[10px] mb-[30px]">{desc}</p>
                </div>
            </div>
        </Link>
    );
}
