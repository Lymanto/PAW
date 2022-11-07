import ClassBox from "@/Components/ClassBox";
import Sidebar from "@/Components/Sidebar";
import TopBar from "@/Components/TopBar";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

import History1 from "../../assets/images/history1.png";

export default function HomepageDosen() {
    return (
        <div className="hvh-100">
            <Head title="Home">
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <Sidebar active="home" type="dosen" />
            <div className="ml-[300px] pl-[50px] pr-[40px] pt-[40px]">
                <TopBar />
            </div>

            <div className="ml-[300px] pl-[50px]">
                <h1 className="font-bold text-xl mt-[50px] mb-[30px]">
                    Class List
                </h1>
                <div className=" gap-[30px] pb-[30px] gap-y-[20px] flex flex-wrap">
                    <ClassBox
                        images={History1}
                        title="Pemrograman Web"
                        subTitle="Master Edison"
                        href="/"
                    />
                    <ClassBox
                        images={History1}
                        title="Pemrograman Web"
                        subTitle="Master Edison"
                        href="/"
                    />
                    <ClassBox
                        images={History1}
                        title="Pemrograman Web"
                        subTitle="Master Edison"
                        href="/"
                    />
                    <ClassBox
                        images={History1}
                        title="Pemrograman Web"
                        subTitle="Master Edison"
                        href="/"
                    />
                    <ClassBox
                        images={History1}
                        title="Pemrograman Web"
                        subTitle="Master Edison"
                        href="/"
                    />
                </div>
            </div>
        </div>
    );
}