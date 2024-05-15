'use client'

import { useState } from "react";

interface IButtonField {
    label?: string;
    type?: string;
    className?: string;
    placeholder?: string;
    limit?: number;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    isDisabled?: boolean;
    isLoading?: boolean;
    onChange?: () => void;
    onClick?: () => void;
    onHover?: () => void;
}

export default function ButtonField({
    label,
    type = "text",
    placeholder,
    onChange,
    leftIcon,
    rightIcon,
    className,
    limit,
    onClick,
    isDisabled = false,
    isLoading = false,
    onHover }: IButtonField) {

    const [isFocus, setIsFocus] = useState(true);

    return (
        <>

            <button
                disabled={isDisabled}
                onClick={onClick}
                className={`
                flex p-3 
                rounded-3xl 
                gap-3 
                px-5
                shadow-sm
                w-full
                ${isDisabled ? 'opacity-40' : 'opacity-100'}
                ${className}
                `}>

                {
                    isLoading ?
                        (<div className="flex items-center justify-center">
                            <svg
                                viewBox="0 0 24 24"
                                className="animate-spin h-5 w-5"
                            >
                                <circle
                                    r="10"
                                    cx="12"
                                    cy="12"
                                    strokeWidth="4"
                                    stroke="currentColor"
                                    className="opacity-10"
                                ></circle>
                                <path
                                    fill="currentColor"
                                    className="opacity-75"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                        </div>) :
                        (<>
                            {leftIcon && (leftIcon)}
                            {label &&
                                (<span className={`${rightIcon ? 'w-full' : ''}`}>
                                    {label}
                                </span>)}
                            {rightIcon && (rightIcon)}
                        </>)
                }

            </button>

        </>
    )
};