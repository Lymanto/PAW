import React from "react";

export default function ProfileDetail({ email, nim, jurusan }) {
    return (
        <div>
            <div className="mb-[30px]">
                <div className="font-medium">Email</div>
                <div className="font-normal mt-[10px] text-[#999999]">
                    {email}
                </div>
            </div>
            {nim != null && (
                <div className="mb-[30px]">
                    <div className="font-medium">NIM</div>
                    <div className="font-normal mt-[10px] text-[#999999]">
                        {nim}
                    </div>
                </div>
            )}
            {jurusan != null && (
                <div className="mb-[30px]">
                    <div className="font-medium">Jurusan</div>
                    <div className="font-normal mt-[10px] text-[#999999]">
                        {jurusan}
                    </div>
                </div>
            )}
        </div>
    );
}
