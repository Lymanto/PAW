import React, { useState } from "react";
import Button from "./Button";
import "../../css/majorOption.css";
export default function MajorOption() {
    const [active, setActive] = useState(1);
    const majorData = [
        { id: 1, major: "Architecture" },
        { id: 2, major: "Interior Design" },
        { id: 3, major: "Civil Engineering" },
        { id: 4, major: "Urban Planning" },
        { id: 5, major: "Visual Communication Design" },
        { id: 6, major: "Information Technology" },
        { id: 7, major: "Business Information System" },
        { id: 8, major: "Hospitality and Tourism" },
        { id: 9, major: "Retail Management" },
        { id: 10, major: "Business Management" },
        { id: 11, major: "Accounting" },
        { id: 12, major: "Culinary Arts" },
    ];
    return (
        <div className="flex flex-row overflow-scroll gap-[20px] mb-[30px] major">
            {majorData.map((val) => {
                return (
                    <Button
                        className="whitespace-nowrap rounded-full"
                        variant={active === val.id ? "primary" : "second"}
                        key={val.id}
                        onClick={() => {
                            setActive(val.id);
                        }}
                    >
                        {val.major}
                    </Button>
                );
            })}
        </div>
    );
}
