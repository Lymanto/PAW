import React from "react";
import Button from "./Button";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";

export default function ChangePassword() {
    return (
        <div className="border w-[500px] h-fit border-gray-3 p-[30px] flex flex-col rounded-[8px]">
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
                    placeholder="New Password"
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
                    name="confirmPassword"
                    placeholder="Confirm Password"
                />
            </div>
            <div className="self-end">
                <Button variant="second" className="mr-[20px]">
                    Cancel
                </Button>
                <Button>Save Changes</Button>
            </div>
        </div>
    );
}
