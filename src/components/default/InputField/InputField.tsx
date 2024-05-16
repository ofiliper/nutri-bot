'use client'

import { useRef, useState } from "react";
import inputStyle from "./input-field-style";

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
    onHover
}: IInputField) {

    const [isFocus, setIsFocus] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    return (
        <>
            <div
                onClick={e => {
                    if (inputRef && inputRef.current) { inputRef.current.focus() };
                }}
                className={`${className}`}
                onMouseOver={e => setIsFocus(true)}
                onMouseOut={e => setIsFocus(false)}>

                {label && (
                    <label className={inputStyle.label(isFocus)}>
                        {label}
                    </label>)}

                <div className={inputStyle.container(isFocus)}>

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
                        className={inputStyle.input()}
                    />

                    {rightIcon && (rightIcon)}

                </div>

                {
                    limit &&
                    (<span className={inputStyle.span()}>
                        Digite até {limit} caracteres
                    </span>)
                }

            </div>
        </>
    )
};