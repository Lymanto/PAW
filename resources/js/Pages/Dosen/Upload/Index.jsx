import React, { useState, useEffect, useRef } from "react";

import Logo from "../../../assets/images/logo.png";
import ICArrowLeft from "../../../assets/icon/ICArrowLeft.svg";
import { Head, useForm, usePage, Link } from "@inertiajs/inertia-react";
import Profile from "@/Components/Profile";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import "../../../../css/UploadBox.css";
import ICUpload from "../../../assets/icon/upload.svg";
import Button from "@/Components/Button";
import VideoThumbnail from "react-video-thumbnail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Upload({ auth, classes }) {
    const { flash, errors } = usePage().props;

    const [isUploaded, setIsUploaded] = useState(false);
    const [videoSrc, setVideoSrc] = useState("");

    const { data, setData, post, reset } = useForm({
        title: "",
        description: "",
        video_url: null,
        thumbnail: "",
    });

    // drag state
    const [dragActive, setDragActive] = useState(false);
    // ref
    const inputRef = useRef(null);

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
        if (errors) {
            if (errors.title) {
                toast.error(errors.title, {
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
            if (errors.description) {
                toast.error(errors.description, {
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
            if (errors.video_url) {
                toast.error(errors.video_url, {
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
        }
    }, [flash, errors]);

    function handleSubmit(e) {
        e.preventDefault();
        post(route("dosen.home.upload.store", { id: classes.id }), {
            preserveScroll: true,
            onSuccess: () =>
                reset("title", "description", "video_url", "thumbnail"),
        });
        inputRef.current.value = null;
        setIsUploaded(false);
    }

    // handle drag events
    const handleDrag = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    // triggers when file is dropped
    const handleDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setData("video_url", e.dataTransfer.files[0]);

            var reader = new FileReader();
            reader.readAsDataURL(e.dataTransfer.files[0]);
            reader.onload = (readerEvent) => {
                setVideoSrc(readerEvent.target.result);
            };
            setIsUploaded(true);
        }
    };

    // triggers when file is selected with click
    const handleChange = function (e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            setData("video_url", e.target.files[0]);

            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (readerEvent) => {
                setVideoSrc(readerEvent.target.result);
            };

            setIsUploaded(true);
        }
    };

    // triggers the input when the button is clicked
    const onButtonClick = () => {
        inputRef.current.click();
    };
    const resetFileInput = () => {
        // 👇️ reset input value
        inputRef.current.value = null;
        setData("video_url", null);
        setData("thumbnail", "");
        setIsUploaded(false);
    };
    return (
        <div>
            <Head title="Detail" />
            <ToastContainer />
            <div className="w-[200px] hidden">
                <VideoThumbnail
                    videoUrl={videoSrc}
                    thumbnailHandler={(thumbnail) =>
                        setData("thumbnail", thumbnail)
                    }
                />
            </div>
            <div className="pt-[30px] mx-[40px] flex flex-row justify-between items-center mb-[50px]">
                <div className="img-logo">
                    <Link
                        href={
                            auth.user.roles[0].name == "mahasiswa"
                                ? "/home"
                                : "/dosen/home"
                        }
                    >
                        <img src={Logo} className="w-full" alt="Logo Pradita" />
                    </Link>
                </div>
                <Profile name={auth.user.name} />
            </div>
            <div className="mx-[40px] flex flex-row gap-[10px]">
                <Link href={route("dosen.home.detail", { id: classes.id })}>
                    <img src={ICArrowLeft} alt="Arrow left" />
                </Link>
                <div className="font-medium text-gray-4">{classes.title}</div>
            </div>
            <h1 className="m-[40px] font-semibold text-2xl">Upload Video</h1>

            <div className="mx-[40px] flex flex-row gap-[40px] ">
                <div className="flex-0 w-full">
                    <div className="flex flex-col mb-[20px]">
                        <InputLabel
                            forInput="title"
                            value="Video Title"
                            className="mb-[15px]"
                        />
                        <TextInput
                            type="text"
                            name="title"
                            placeholder="Video Title"
                            value={data.title}
                            handleChange={(e) =>
                                setData("title", e.target.value)
                            }
                        />
                    </div>
                    <div className="flex flex-col">
                        <InputLabel
                            forInput="desc"
                            value="Description"
                            className="mb-[15px]"
                        />
                        <textarea
                            className="border-gray-2 rounded-lg py-2 px-[20px] w-full placeholder-[#B4B4B4] focus:border-transparent focus:ring-0 focus:outline-alerange min-h-[250px]"
                            placeholder="Description"
                            name="desc"
                            id="desc"
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            value={data.description}
                        ></textarea>
                    </div>
                </div>
                <div className="flex-0 w-full">
                    <form
                        id="form-file-upload"
                        onDragEnter={handleDrag}
                        onSubmit={handleSubmit}
                    >
                        <input
                            ref={inputRef}
                            type="file"
                            id="input-file-upload"
                            multiple={true}
                            accept="video/*"
                            onChange={handleChange}
                        />
                        {isUploaded ? (
                            <div className="h-full w-full relative flex flex-col justify-center items-center border border-gray-2 rounded-[10px] gap-[20px]">
                                <div className="font-medium text-lg">
                                    Video sudah diupload
                                </div>
                                <Button type="button" onClick={resetFileInput}>
                                    Cancel
                                </Button>
                            </div>
                        ) : (
                            <label
                                id="label-file-upload"
                                htmlFor="input-file-upload"
                                className={dragActive ? "drag-active" : ""}
                            >
                                <img src={ICUpload} className="mb-[20px]" />
                                <p className="mb-[30px] font-medium ">
                                    Select or drag video here
                                </p>
                                <Button type="button" onClick={onButtonClick}>
                                    Select
                                </Button>
                            </label>
                        )}
                        {dragActive && (
                            <div
                                id="drag-file-element"
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                            ></div>
                        )}
                        <div className="w-full flex flex-row justify-end mt-[20px]">
                            <button className="py-[8px] px-[40px] rounded-lg font-semibold btn-primary">
                                Upload
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
