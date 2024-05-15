import React from "react";

interface IIcon {
    color?: string;
    size?: string;
}

export default function ArrowRightIcon({
    color = "#727272",
    size = "20px",
}: IIcon) {
    return (


        <svg
            fill="currentColor"
            strokeWidth="0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            style={{ overflow: "visible", color: "currentcolor" }}>
            <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z" color={color}></path></svg>
    );
};

