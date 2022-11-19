import React, { useState } from "react";
import Button from "./Button";
import "../../css/majorOption.css";
export default function MajorOption({ major }) {
    const [active, setActive] = useState(1);

    return (
        <div className="flex flex-row overflow-scroll gap-[20px] mb-[30px] major">
            {major.map((val) => {
                return (
                    <Button
                        className="whitespace-nowrap rounded-full"
                        variant={active === val.id ? "primary" : "second"}
                        key={val.id}
                        onClick={() => {
                            setActive(val.id);
                        }}
                    >
                        {val.name}
                    </Button>
                );
            })}
        </div>
    );
}
