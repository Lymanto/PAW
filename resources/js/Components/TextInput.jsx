import React, { useEffect, useRef } from "react";
import "../../css/input.css";
export default function TextInput({
    type = "text",
    name,
    value,
    defaultValue,
    variant = "primary",
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
    placeholder,
    isError,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                className={`border-gray-2 rounded-lg py-2 px-[20px] w-full placeholder-[#B4B4B4] input-${variant} ${
                    className ? className : ""
                }`}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
            />
        </div>
    );
}
