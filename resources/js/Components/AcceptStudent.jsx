import React from "react";
import UserProfile from "../assets/images/profile.svg";
import ICCancel from "../assets/icon/ICCancel.svg";
import ICApprove from "../assets/icon/ICApprove.svg";
import Button from "./Button";
import "../../css/AcceptStudent.css";

export default function AcceptStudent({
    title,
    subTitle,
    nim,
    variant,
    onHandleAccept,
    onHandleReject,
}) {
    return (
        <>
            {variant === "notification" ? (
                <div className="pb-[30px] flex flex-row items-center">
                    <img src={UserProfile} width={60} height={60} />
                    <div className="flex flex-row gap-[80px]">
                        <div className="ml-[15px] flex flex-col gap-[5px] w-[500px]">
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
                        <div className="flex flex-row items-center gap-[20px]">
                            <Button
                                className="btn-cancel"
                                onClick={onHandleReject}
                            >
                                <img src={ICCancel} className="m-auto" alt="" />
                            </Button>
                            <Button
                                className="btn-approve"
                                onClick={onHandleAccept}
                            >
                                <img
                                    src={ICApprove}
                                    className="m-auto"
                                    alt=""
                                />
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
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
                        <div className="flex flex-row items-center gap-[20px]">
                            <Button
                                className="btn-cancel"
                                onClick={onHandleReject}
                            >
                                <img src={ICCancel} className="m-auto" alt="" />
                            </Button>
                            <Button
                                className="btn-approve"
                                onClick={onHandleAccept}
                            >
                                <img
                                    src={ICApprove}
                                    className="m-auto"
                                    alt=""
                                />
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
