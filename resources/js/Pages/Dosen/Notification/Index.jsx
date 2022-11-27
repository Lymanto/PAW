import React, { useEffect } from "react";
import AcceptStudent from "@/Components/AcceptStudent";
import Sidebar from "@/Components/Sidebar";
import TopBar from "@/Components/TopBar";
import { Head, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function NotificationDosen({ auth, notification }) {
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
        <div className="hvh-100">
            <ToastContainer />

            <Head title="Notification   ">
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <Sidebar active="notification" type="dosen" auth={auth} />
            <div className="ml-[300px] pl-[50px] pr-[40px] pt-[40px]">
                <TopBar auth={auth} />
            </div>

            <div className="ml-[300px] pl-[50px]">
                <h1 className="font-bold text-xl mt-[50px] mb-[30px]">
                    Notification
                </h1>
                <div>
                    {notification != "" ? (
                        notification.map((val) => {
                            return (
                                <AcceptStudent
                                    title={val.user.name}
                                    nim={val.user.nim}
                                    subTitle={val.classes.title}
                                    variant="notification"
                                    onHandleAccept={() => handleAccept(val.id)}
                                    onHandleReject={() => handleReject(val.id)}
                                    key={val.id}
                                />
                            );
                        })
                    ) : (
                        <p className="text-gray-500">
                            Tidak ada yang request masuk kelas
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
