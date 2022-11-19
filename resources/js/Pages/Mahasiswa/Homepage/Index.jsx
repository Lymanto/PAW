import HistoryBox from "@/Components/HistoryBox";
import Sidebar from "@/Components/Sidebar";
import TopBar from "@/Components/TopBar";
import { Head } from "@inertiajs/inertia-react";
import React from "react";
import Flickity from "react-flickity-component";
import History1 from "../../../assets/images/history1.png";

export default function Homepage(props) {
    const flickityOption = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <div className="hvh-100">
            <Head title="Home">
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <Sidebar active="home" type="mahasiswa" />
            <div className="ml-[300px] pl-[50px] pr-[40px] pt-[40px]">
                <TopBar auth={props.auth} />
            </div>

            <div className="ml-[300px] pl-[50px]">
                <h1 className="font-bold text-xl mt-[50px] mb-[30px]">
                    History
                </h1>
                <Flickity options={flickityOption} className="gap-[30px]">
                    <HistoryBox
                        images={History1}
                        title="Pertemuan 4 - Pemrograman Web"
                        subTitle="Master Edison"
                        href="/"
                        className={"mr-[20px]"}
                    />
                    <HistoryBox
                        images={History1}
                        title="Pertemuan 4 - Pemrograman Web"
                        subTitle="Master Edison"
                        href="/"
                        className={"mr-[20px]"}
                    />
                    <HistoryBox
                        images={History1}
                        title="Pertemuan 4 - Pemrograman Web"
                        subTitle="Master Edison"
                        href="/"
                    />
                </Flickity>
            </div>
        </div>
    );
}
