import React from "react";

interface IIcon {
    color?: string;
    size?: string;
}

export default function AlertIcon({
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

            <path fill="currentColor" d="m12.865 3 9.526 16.5a1 1 0 0 1-.866 1.5H2.473a1 1 0 0 1-.866-1.5L11.133 3a1 1 0 0 1 1.732 0Zm-1.866 13v2h2v-2h-2Zm0-7v5h2V9h-2Z" color={color}></path>

        </svg>
    );
};

