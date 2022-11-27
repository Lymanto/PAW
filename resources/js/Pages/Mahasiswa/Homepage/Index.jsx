import HistoryBox from "@/Components/HistoryBox";
import Sidebar from "@/Components/Sidebar";
import TopBar from "@/Components/TopBar";
import { Head, Link } from "@inertiajs/inertia-react";
import React from "react";
import Flickity from "react-flickity-component";

export default function Homepage({ auth, history }) {
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
            <Sidebar active="home" type="mahasiswa" auth={auth} />
            <div className="ml-[300px] pl-[50px] pr-[40px] pt-[40px]">
                <TopBar auth={auth} />
            </div>

            <div className="ml-[300px] pl-[50px]">
                <h1 className="font-bold text-xl mt-[50px] mb-[30px]">
                    History
                </h1>
                <Flickity options={flickityOption} className="gap-[30px]">
                    {history != "" ? (
                        history.map((val) => {
                            return (
                                <HistoryBox
                                    images={`storage/images/${val.video.thumbnail}`}
                                    title={`${val.video.title} - ${val.classes.title}`}
                                    subTitle={val.classes.user.name}
                                    href={route(
                                        "mahasiswa.class.detail.video",
                                        [val.classes.id, val.video.id]
                                    )}
                                    className={"mr-[20px]"}
                                    key={val.id}
                                />
                            );
                        })
                    ) : (
                        <div className="h-[100px]">
                            <div className="mb-[30px]">
                                Kamu belum menonton kelas manapun
                            </div>
                            <Link
                                className="py-[8px] px-[40px] rounded-lg font-semibold bg-alerange text-white"
                                href="/class"
                            >
                                Cari kelas
                            </Link>
                        </div>
                    )}
                </Flickity>
            </div>
        </div>
    );
}
