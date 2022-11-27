import React from "react";

import Logo from "../assets/images/logo.png";
import ICHome from "../assets/icon/ICHome.svg";
import ICHomeActive from "../assets/icon/ICHomeActive.svg";
import ICCourses from "../assets/icon/ICCourses.svg";
import ICCoursesActive from "../assets/icon/ICCoursesActive.svg";
import ICClass from "../assets/icon/ICClass.svg";
import ICClassActive from "../assets/icon/ICClassActive.svg";
import ICProfile from "../assets/icon/ICProfile.svg";
import ICProfileActive from "../assets/icon/ICProfileActive.svg";
import ICNotification from "../assets/icon/ICNotification.svg";
import ICNotificationActive from "../assets/icon/ICNotificationActive.svg";
import ICLogout from "../assets/icon/ICLogout.svg";

import { Link } from "@inertiajs/inertia-react";
import "../../css/sidebar.css";

export default function Sidebar({ active = "home", type = "mahasiswa", auth }) {
    return (
        <div className="p-[30px] pr-0 w-[300px] border-[#E5E7EB] border-r-[1px] h-full fixed flex flex-col justify-between">
            {type === "mahasiswa" && (
                <div>
                    <div className="img-logo pb-[50px]">
                        <Link
                            href={
                                auth.user.roles[0].name == "mahasiswa"
                                    ? "/home"
                                    : "/dosen/home"
                            }
                        >
                            <img
                                src={Logo}
                                className="w-full"
                                alt="Logo Pradita"
                            />
                        </Link>
                    </div>
                    <div>
                        <div className="text-gray-1 text-sm mb-4">Menu</div>
                        <Link
                            className={`side-link ${
                                active === "home" && "active"
                            }`}
                            href="/home"
                        >
                            <img
                                src={active === "home" ? ICHomeActive : ICHome}
                            />
                            Home
                        </Link>
                        <Link
                            className={`side-link ${
                                active === "allCourses" && "active"
                            }`}
                            href="/courses"
                        >
                            <img
                                src={
                                    active === "allCourses"
                                        ? ICCoursesActive
                                        : ICCourses
                                }
                            />
                            All Courses
                        </Link>
                        <Link
                            className={`side-link ${
                                active === "yourClass" && "active"
                            }`}
                            href="/class"
                        >
                            <img
                                src={
                                    active === "yourClass"
                                        ? ICClassActive
                                        : ICClass
                                }
                            />
                            Your Class
                        </Link>
                    </div>
                </div>
            )}

            {type === "dosen" && (
                <div>
                    <div className="img-logo pb-[50px]">
                        <Link
                            href={
                                auth.user.roles[0].name == "mahasiswa"
                                    ? "/home"
                                    : "/dosen/home"
                            }
                        >
                            <img
                                src={Logo}
                                className="w-full"
                                alt="Logo Pradita"
                            />
                        </Link>
                    </div>
                    <div>
                        <div className="text-gray-1 text-sm mb-4">Menu</div>
                        <Link
                            className={`side-link ${
                                active === "home" && "active"
                            }`}
                            href="/dosen/home"
                        >
                            <img
                                src={active === "home" ? ICHomeActive : ICHome}
                            />
                            Home
                        </Link>
                        <Link
                            className={`side-link ${
                                active === "notification" && "active"
                            }`}
                            href="/dosen/notification"
                        >
                            <img
                                src={
                                    active === "notification"
                                        ? ICNotificationActive
                                        : ICNotification
                                }
                            />
                            Notification
                        </Link>
                    </div>
                </div>
            )}

            <div>
                <div>
                    <div className="text-gray-1 text-sm mb-4">Others</div>
                    <Link
                        className={`side-link ${
                            active === "profile" && "active"
                        }`}
                        href={
                            auth.user.roles[0].name == "mahasiswa"
                                ? "/profile"
                                : "/dosen/profile"
                        }
                    >
                        <img
                            src={
                                active === "profile"
                                    ? ICProfileActive
                                    : ICProfile
                            }
                        />
                        Your Profile
                    </Link>
                    <Link
                        className="side-link"
                        href={route("logout")}
                        method="post"
                        as="button"
                    >
                        <img src={ICLogout} />
                        Sign Out
                    </Link>
                </div>
            </div>
        </div>
    );
}
