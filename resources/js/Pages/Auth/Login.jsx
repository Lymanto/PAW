import React, { useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import loginImage from "../../assets/images/login-image.png";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/Button";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";

import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

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
                        <form onSubmit={submit} className="flex flex-col">
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
                                    value={data.email}
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
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
                                    value={data.password}
                                    handleChange={onHandleChange}
                                />
                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>
                            <Link
                                href="/login"
                                className="text-gray-4 text-right mb-[35px]"
                            >
                                Forgot password
                            </Link>

                            <Button
                                children="Log in"
                                type="submit"
                                className="w-full"
                                processing={processing}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
