import React from "react";

export default function InputLabel({ forInput, value, className, children }) {
    return (
        <label htmlFor={forInput} className={`font-medium ${className}`}>
            {value ? value : children}
        </label>
    );
}
