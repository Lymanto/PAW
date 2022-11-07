import React from "react";
import "../../css/button.css";

export default function Button({
    type = "submit",
    className = "",
    processing,
    variant = "primary",
    children,
    onClick,
}) {
    return (
        <button
            type={type}
            className={`py-[8px] px-[40px] rounded-lg font-semibold ${
                processing && "opacity-30"
            } btn-${variant} ${className}`}
            disabled={processing}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
