import React from "react";

interface IIcon {
    color?: string;
    size?: string;
}

export default function TrashIcon({
    color = "#727272",
    size = "20px",
}: IIcon) {
    return (
        <svg
            fill="none"
            width="1em"
            height="1em"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: "visible", color: "currentcolor" }}
        >
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <path d="M10 11 10 17"></path>
            <path d="M14 11 14 17"></path>
            <path d="M3 6 5 6 21 6"></path>
        </svg>
    );
};

