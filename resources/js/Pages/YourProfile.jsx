import ChangePassword from "@/Components/ChangePassword";
import ClassBox from "@/Components/ClassBox";

import MajorOption from "@/Components/MajorOption";
import ProfileDetail from "@/Components/ProfileDetail";
import Sidebar from "@/Components/Sidebar";
import TopBar from "@/Components/TopBar";
import { Head } from "@inertiajs/inertia-react";
import React from "react";
import History1 from "../assets/images/history1.png";

export default function YourProfile() {
    return (
        <div className="hvh-100">
            <Head title="Your Profile" />
            <Sidebar active="profile" type="mahasiswa" />
            <div className="ml-[300px] pl-[50px] pr-[40px] pt-[40px]">
                <TopBar />
            </div>

            <div className="ml-[300px] pl-[50px] pr-[40px]">
                <h1 className="font-bold text-xl mt-[50px] mb-[30px]">
                    Profile
                </h1>
                <div className=" flex flex-row justify-between">
                    <ProfileDetail
                        email="lymanto.hadibrata@student.pradita.ac.id"
                        nim="2010101022"
                        jurusan="Informatika"
                    />
                    <ChangePassword />
                </div>
            </div>
        </div>
    );
}
