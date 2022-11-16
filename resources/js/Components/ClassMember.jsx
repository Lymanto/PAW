import React from "react";
import UserProfile from "../assets/images/profile.svg";
export default function ClassMember({ title, nim }) {
    return (
        <div className="pb-[20px] flex flex-row items-center">
            <img src={UserProfile} width={60} height={60} />
            <div className="flex flex-row gap-[30px]">
                <div className="ml-[15px] flex flex-col gap-[5px]">
                    <div className="flex flex-row gap-[8px] items-center">
                        <span className="font-semibold">{title}</span>
                    </div>
                    <div>
                        <span className="text-[#999]">{nim}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
