import React, { useState } from "react";
import { Head, Link } from "@inertiajs/inertia-react";
import Profile from "@/Components/Profile";
import SearchInput from "@/Components/SearchInput";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/Button";
import Logo from "../../../assets/images/logo.png";
import NotFoundPage from "@/Components/404";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Enroll({ auth, classes }) {
    const [classCode, setClassCode] = useState("");
    const onHandleEnroll = async () => {
        await axios
            .post("/enroll/check", {
                id: classes.id,
                class_code: classCode,
            })
            .then((response) => {
                toast.success(response.data.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
            .catch((error) =>
                toast.error("Kode Kelas Salah", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            );
        setClassCode("");
    };
    return !classes ? (
        <NotFoundPage />
    ) : (
        <div>
            <ToastContainer />
            <Head title={classes.title} />
            <div className="pt-[30px] px-[40px] flex flex-row justify-between items-center mb-[50px]">
                <div className="img-logo">
                    <Link href="/home">
                        <img src={Logo} className="w-full" alt="Logo Pradita" />
                    </Link>
                </div>
                {/* <SearchInput /> */}
                <Profile name={auth.user.name} />
            </div>
            <div className="px-[40px] flex flex-row">
                <div className="w-[500px] h-[275px] flex-0">
                    <img
                        src={classes.photo}
                        className="w-full h-full object-cover rounded-[10px]"
                        alt="Logo Pradita"
                    />
                </div>
                <div className="flex-1 ml-[30px] flex flex-col justify-between">
                    <div>
                        <h1 className="font-semibold text-xl">
                            {classes.title}
                        </h1>
                        <p className="mt-[10px] mb-[16px]">
                            {classes.description}
                        </p>
                        <div className="flex flex-col mb-[16px]">
                            <div className="mb-[6px] font-medium">Teacher</div>
                            <div>{classes.user.name}</div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-[6px] font-medium">Enroll</div>
                        <div className="flex flex-row">
                            <TextInput
                                placeholder="Enter Code"
                                className="w-[222px] mr-[20px]"
                                value={classCode}
                                handleChange={(e) =>
                                    setClassCode(e.target.value)
                                }
                            />
                            <Button onClick={onHandleEnroll}>Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
