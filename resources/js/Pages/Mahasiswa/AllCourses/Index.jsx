import React, { useEffect, useState } from "react";

import ClassBox from "@/Components/ClassBox";
import Sidebar from "@/Components/Sidebar";
import TopBar from "@/Components/TopBar";
import Button from "@/Components/Button";

import NotFound from "../../../assets/lottie/not_found.json";
import Lottie from "react-lottie";

import { Head } from "@inertiajs/inertia-react";

import "../../../../css/majorOption.css";
import axios from "axios";

export default function AllCourses({ auth, major, courses }) {
    const [active, setActive] = useState(1);
    const [classes, setClasses] = useState(courses);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: NotFound,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const getByMajor = async (id) => {
        if (id === 1) {
            await axios
                .post("/courses/all", {
                    major_id: 1,
                })
                .then((response) => {
                    setClasses(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            await axios
                .post("/courses/filter/major", {
                    major_id: id,
                })
                .then((response) => {
                    setClasses(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        setActive(id);
    };
    return (
        <div className="hvh-100">
            <Head title="All Courses">
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            </Head>
            <Sidebar active="allCourses" type="mahasiswa" auth={auth} />
            <div className="ml-[300px] pl-[50px] pr-[40px] pt-[40px]">
                <TopBar auth={auth} />
            </div>

            <div className="ml-[300px] pl-[50px]">
                <h1 className="font-bold text-xl mt-[50px] mb-[30px]">
                    All Courses
                </h1>
            </div>
            <div className="ml-[300px] pl-[50px] ">
                <div className="flex flex-row overflow-scroll gap-[20px] mb-[30px] major">
                    {major.map((val) => {
                        return (
                            <Button
                                className="whitespace-nowrap rounded-full"
                                variant={
                                    active === val.id ? "primary" : "second"
                                }
                                key={val.id}
                                onClick={() => {
                                    getByMajor(val.id);
                                }}
                            >
                                {val.name}
                            </Button>
                        );
                    })}
                </div>
            </div>
            <div className="ml-[300px] pl-[50px] pr-[40px] gap-[30px] pb-[30px] gap-y-[20px] flex flex-wrap">
                {classes.length === 0 ? (
                    <div className="mt-[70px] mx-auto">
                        <Lottie options={defaultOptions} height={250} />
                    </div>
                ) : (
                    classes.map((val) => {
                        return (
                            <ClassBox
                                key={val.id}
                                images={val.photo}
                                title={val.title}
                                subTitle={val.user.name}
                                href={`/enroll/${val.id}`}
                            />
                        );
                    })
                )}
            </div>
        </div>
    );
}
