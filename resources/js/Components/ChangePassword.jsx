import React from "react";
import Button from "./Button";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";
import { useForm } from "@inertiajs/inertia-react";

export default function ChangePassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });
    const submit = (e) => {
        e.preventDefault();

        post(route("password.update"));
    };
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };
    return (
        <form
            onSubmit={submit}
            className="border w-[500px] h-fit border-gray-3 p-[30px] flex flex-col rounded-[8px]"
        >
            <h2 className="font-semibold mb-[20px] text-center">
                Change Password
            </h2>
            <div className="flex flex-col mb-[20px] ">
                <InputLabel
                    forInput="currentPassword"
                    value="Current Password"
                    className="text-normal mb-[10px]"
                />
                <TextInput
                    type="password"
                    name="currentPassword"
                    placeholder="Current Password"
                    handleChange={onHandleChange}
                />
            </div>
            <div className="flex flex-col mb-[20px] ">
                <InputLabel
                    forInput="newPassword"
                    value="New Password"
                    className="text-normal mb-[10px]"
                />
                <TextInput
                    type="password"
                    name="newPassword"
                    value={data.password}
                    placeholder="New Password"
                    handleChange={onHandleChange}
                />
            </div>
            <div className="flex flex-col mb-[20px] ">
                <InputLabel
                    forInput="confirmPassword"
                    value="Confirm Password"
                    className="text-normal mb-[10px]"
                />
                <TextInput
                    type="password"
                    value={data.password_confirmation}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    handleChange={onHandleChange}
                />
            </div>
            <div className="self-end">
                <Button type="submit">Save Changes</Button>
            </div>
        </form>
    );
}
