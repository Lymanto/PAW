import React from "react";
import UserProfile from "../assets/images/profile.svg";

export default function AcceptStudent({ title, subTitle, nim }) {
    return (
        <div className="pb-[30px] flex flex-row items-center">
            <img src={UserProfile} width={60} height={60} />
            <div className="ml-[15px] flex flex-col gap-[5px]">
                <div className="flex flex-row gap-[8px] items-center">
                    <span className="font-semibold">{title}</span>
                    <span className="w-[3px] h-[3px] bg-black rounded-full"></span>
                    <span className="text-[#999]">{nim}</span>
                </div>
                <div>
                    This student request to join{" "}
                    <span className="font-semibold ">{`${subTitle}`}</span>{" "}
                    class
                </div>
            </div>
        </div>
    );
}
