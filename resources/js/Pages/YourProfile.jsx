import ChangePassword from "@/Components/ChangePassword";
import ProfileDetail from "@/Components/ProfileDetail";
import Sidebar from "@/Components/Sidebar";
import TopBar from "@/Components/TopBar";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

export default function YourProfile({ auth, token, email }) {
    console.log(auth);
    return (
        <div className="hvh-100">
            <Head title="Your Profile" />
            <Sidebar
                active="profile"
                type={auth.user.roles[0].name}
                auth={auth}
            />
            <div className="ml-[300px] pl-[50px] pr-[40px] pt-[40px]">
                <TopBar auth={auth} />
            </div>

            <div className="ml-[300px] pl-[50px] pr-[40px]">
                <h1 className="font-bold text-xl mt-[50px] mb-[30px]">
                    Profile
                </h1>
                <div className=" flex flex-row justify-between">
                    <ProfileDetail
                        email={auth.user.email}
                        nim={auth.user.nim}
                        jurusan={auth.user.major}
                    />
                    <ChangePassword token={token} email={email} />
                </div>
            </div>
        </div>
    );
}
