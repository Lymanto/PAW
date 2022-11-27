import { Head, Link, usePage } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";
import Profile from "@/Components/Profile";
import Logo from "../../../assets/images/logo.png";
import ICCopy from "../../../assets/icon/ICCopy.svg";
import ICTrash from "../../../assets/icon/ICTrash.svg";
import Button from "@/Components/Button";
import PertemuanBox from "@/Components/PertemuanBox";
import AcceptStudent from "@/Components/AcceptStudent";
import "../../../../css/ClassDetail.css";
import ClassMember from "@/Components/ClassMember";
import { Inertia } from "@inertiajs/inertia";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ClassDetail({
    auth,
    classes,
    member,
    waiting,
    videos,
}) {
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }, [flash]);
    const handleAccept = (id) => {
        Inertia.post(
            `/dosen/class/detail/accept`,
            {
                id: id,
                isApproved: true,
            },
            { preserveScroll: true }
        );
    };
    const handleReject = (id) => {
        Inertia.post(
            `/dosen/class/detail/reject`,
            {
                id: id,
            },
            { preserveScroll: true }
        );
    };
    return (
        <div>
            <ToastContainer />
            <Head title="Detail" />
            <div className="pt-[30px] mx-[40px] flex flex-row justify-between items-center mb-[50px]">
                <div className="img-logo">
                    <Link href="/dosen/home">
                        <img src={Logo} className="w-full" alt="Logo Pradita" />
                    </Link>
                </div>
                <Profile name={auth.user.name} />
            </div>
            <h1 className="mx-[40px] mb-[15px] font-semibold text-[1.75rem]">
                {classes.title}
            </h1>
            <div className="mx-[40px] flex flex-row pb-[40px] border-b-[1px] border-gray-5">
                <div className="w-[500px] h-[275px] flex-0">
                    <img
                        src={classes.photo}
                        className="w-full h-full object-cover rounded-[10px]"
                        alt="Logo Pradita"
                    />
                </div>
                <div className="flex-1 ml-[30px]">
                    <p className="mt-[10px] mb-[30px]">{classes.description}</p>
                    <div className="flex flex-col mb-[16px]">
                        <div className="mb-[4px]">Class Code</div>
                        <div
                            className="font-semibold flex flex-row gap-[8px] cursor-pointer"
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    classes.class_code
                                );
                            }}
                        >
                            {classes.class_code}
                            <img src={ICCopy} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-[40px] mt-[40px] flex flex-row pb-[40px] justify-between gap-[40px]">
                <div className="flex flex-col gap-[15px] flex-1 ">
                    {videos != "" ? (
                        <div className="flex flex-row gap-[15px]">
                            <Button className="px-[6.5px] py-[6.5px] btn-trash">
                                <img src={ICTrash} alt="" />
                            </Button>
                            <Link
                                className="py-[8px] px-[40px] rounded-lg font-semibold bg-gray-3 text-black font-normal"
                                href={`/dosen/class/detail/${classes.id}/upload`}
                            >
                                <span className="font-medium">
                                    Upload Video
                                </span>
                            </Link>
                        </div>
                    ) : (
                        <div className="flex flex-row gap-[15px]">
                            <Link
                                className="py-[8px] px-[40px] rounded-lg font-semibold bg-gray-3 text-black font-normal"
                                href={`/dosen/class/detail/${classes.id}/upload`}
                            >
                                <span className="font-medium">
                                    Upload Video
                                </span>
                            </Link>
                        </div>
                    )}

                    {videos != "" ? (
                        videos.map((video) => {
                            return (
                                <PertemuanBox
                                    key={video.id}
                                    title={video.title}
                                    desc={video.description}
                                    id={video.id}
                                    image={`/storage/images/${video.thumbnail}`}
                                    link={`/dosen/class/detail/${classes.id}/video/${video.id}`}
                                />
                            );
                        })
                    ) : (
                        <div>Kelas tidak tersedia</div>
                    )}
                </div>
                <div className="flex flex-col min-w-[360px]">
                    <div>
                        <h2 className="font-semibold text-xl mb-[20px]">
                            Request to Join
                        </h2>
                        {waiting != 0 ? (
                            waiting.map((val) => {
                                return (
                                    <AcceptStudent
                                        title={val.user.name}
                                        nim={val.user.nim}
                                        key={val.id}
                                        onHandleAccept={() => {
                                            handleAccept(val.id);
                                        }}
                                        onHandleReject={() => {
                                            handleReject(val.id);
                                        }}
                                    />
                                );
                            })
                        ) : (
                            <p>No request</p>
                        )}
                    </div>
                    <div className="mt-[20px]">
                        <h2 className="font-semibold text-xl mb-[20px]">
                            Class Member
                        </h2>
                        {member != 0 ? (
                            member.map((val) => {
                                return (
                                    <ClassMember
                                        title={val.user.name}
                                        nim={val.user.nim}
                                        key={val.id}
                                    />
                                );
                            })
                        ) : (
                            <p>No Member</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
