import React from "react";

interface IIcon {
    color?: string;
    size?: string;
}

export default function CopyIcon({
    color = "#727272",
    size = "20px",
}: IIcon) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M11.875 0H8.125C6.40188 0 5 1.40188 5 3.125V6.875C5 8.59813 6.40188 10 8.125 10H11.875C13.5981 10 15 8.59813 15 6.875V3.125C15 1.40188 13.5981 0 11.875 0ZM13.75 6.875C13.75 7.90875 12.9087 8.75 11.875 8.75H8.125C7.09125 8.75 6.25 7.90875 6.25 6.875V3.125C6.25 2.09125 7.09125 1.25 8.125 1.25H11.875C12.9087 1.25 13.75 2.09125 13.75 3.125V6.875ZM10 11.875C10 13.5981 8.59813 15 6.875 15H3.125C1.40188 15 0 13.5981 0 11.875V8.125C0 6.40188 1.40188 5 3.125 5C3.47062 5 3.75 5.28 3.75 5.625C3.75 5.97 3.47062 6.25 3.125 6.25C2.09125 6.25 1.25 7.09125 1.25 8.125V11.875C1.25 12.9087 2.09125 13.75 3.125 13.75H6.875C7.90875 13.75 8.75 12.9087 8.75 11.875C8.75 11.53 9.02938 11.25 9.375 11.25C9.72062 11.25 10 11.53 10 11.875Z" fill={color}></path>

        </svg>
    );
} 