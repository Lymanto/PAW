import React from "react";
import ClassBox from "@/Components/ClassBox";

import Sidebar from "@/Components/Sidebar";
import TopBar from "@/Components/TopBar";
import { Head, Link } from "@inertiajs/inertia-react";

export default function YourClass({ auth, member }) {
    return (
        <div className="hvh-100">
            <Head title="Your Class">
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <Sidebar active="yourClass" type="mahasiswa" auth={auth} />
            <div className="ml-[300px] pl-[50px] pr-[40px] pt-[40px]">
                <TopBar auth={auth} />
            </div>

            <div className="ml-[300px] pl-[50px]">
                <h1 className="font-bold text-xl mt-[50px] mb-[30px]">
                    Your Class
                </h1>
            </div>
            <div className="ml-[300px] pl-[50px] pr-[40px] gap-[30px] pb-[30px] gap-y-[20px] flex flex-wrap">
                {member != "" ? (
                    member.map((val) => {
                        return (
                            <ClassBox
                                images={val.classes.photo}
                                title={val.classes.title}
                                subTitle={val.classes.user.name}
                                href={`/class/detail/${val.classes.id}`}
                            />
                        );
                    })
                ) : (
                    <div>
                        <div className="mb-[30px]">
                            Kamu belum bergabung ke dalam kelas
                        </div>
                        <Link
                            className="py-[8px] px-[40px] rounded-lg font-semibold bg-alerange text-white"
                            href="/courses"
                        >
                            Cari kelas
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
