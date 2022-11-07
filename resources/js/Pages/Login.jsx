import React from "react";
import Logo from "../assets/images/logo.png";
import loginImage from "../assets/images/login-image.png";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/Button";
import InputLabel from "@/Components/InputLabel";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Login(props) {
    return (
        <div className="hvh-100 flex flex-row">
            <Head title="Login" />
            <img
                src={loginImage}
                alt="s"
                className="object-cover w-1/2 h-full"
            />
            <div className="self-center w-full">
                <div className="flex flex-column justify-center">
                    <div className="">
                        <div className="img-logo">
                            <img
                                src={Logo}
                                className="w-full"
                                alt="Logo Pradita"
                            />
                        </div>
                        <div className="mb-[30px] mt-[30px] ">
                            <h1 className="font-semibold text-2xl mb-2.5">
                                Sign In
                            </h1>
                            <p className="text-lg">
                                Streaming Video Pembelajaran Pradita University
                            </p>
                        </div>
                        <form className="flex flex-col">
                            <div className="flex flex-col mb-[30px]">
                                <InputLabel
                                    forInput="email"
                                    value="Email Address"
                                    className="text-lg mb-[10px]"
                                />
                                <TextInput
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div className="flex flex-col mb-[15px]">
                                <InputLabel
                                    forInput="password"
                                    value="Password"
                                    className="text-lg mb-[10px]"
                                />
                                <TextInput
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                            </div>
                            <Link
                                href="/login"
                                className="text-gray-4 text-right mb-[35px]"
                            >
                                Forgot password
                            </Link>

                            <Button children="Log in" className="w-full" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
