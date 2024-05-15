'use client'

import { useRef, useState } from "react";

interface IInputField {
    label?: string;
    value?: string | number | null;
    type?: string;
    className?: string;
    placeholder?: string;
    limit?: number;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onHover?: () => void;
}

export default function InputField({
    label,
    type = "text",
    value = "",
    placeholder,
    onChange,
    leftIcon,
    rightIcon,
    className,
    limit,
    onKeyDown,
    onHover }: IInputField) {

    const [isFocus, setIsFocus] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    return (
        <>
            <div
                className={`${className}`}
                onClick={e => {
                    if (inputRef && inputRef.current) { inputRef.current.focus() };
                }}
                onMouseOver={e => setIsFocus(true)}
                onMouseOut={e => setIsFocus(false)}>

                {label && (
                    <label className={` 
                    transition-all text-sm font-medium mb-[7px] block text-gray-900
                    ${isFocus ? 'text-emerald-500' : ''}`}>
                        {label}
                    </label>)}

                <div
                    className={`
                    flex bg-
                    white-500
                    bg-white
                    p-3 
                    rounded-lg
                    gap-3 
                    px-5
                    shadow-sm
                    w-full
                    border-[1px] transition-all ease-linear
                    ${isFocus ? 'border-emerald-500' : 'border-gray-200'}
                `}
                >

                    {leftIcon && (leftIcon)}

                    <input
                        ref={inputRef}
                        type={type}
                        onChange={onChange}
                        placeholder={placeholder}
                        value={value ?? ""}
                        onKeyDown={e => {
                            if (onKeyDown) {
                                onKeyDown(e);
                            }
                        }}
                        className="w-full bg-transparent focus-visible:outline-none text-gray-900"
                    />

                    {rightIcon && (rightIcon)}

                </div>

                {
                    limit &&
                    (<span className="text-[10px]">
                        Digite até {limit} caracteres
                    </span>)
                }

            </div>
        </>
    )
};