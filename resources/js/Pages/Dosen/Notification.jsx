import AcceptStudent from "@/Components/AcceptStudent";
import Sidebar from "@/Components/Sidebar";
import TopBar from "@/Components/TopBar";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

export default function HomepageDosen() {
    return (
        <div className="hvh-100">
            <Head title="Notification   ">
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <Sidebar active="notification" type="dosen" />
            <div className="ml-[300px] pl-[50px] pr-[40px] pt-[40px]">
                <TopBar />
            </div>

            <div className="ml-[300px] pl-[50px]">
                <h1 className="font-bold text-xl mt-[50px] mb-[30px]">
                    Notification
                </h1>
                <div>
                    <AcceptStudent
                        title="Lymanto Hadibrata"
                        nim="2010101022"
                        subTitle="Pemrograman Web"
                    />
                </div>
            </div>
        </div>
    );
}
