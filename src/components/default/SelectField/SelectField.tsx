'use client'

import { useEffect, useRef, useState } from "react";
import ButtonField from "../ButtonField/ButtonField";
import CopyIcon from "@/assets/icons/CopyIcon";

interface IOptions {
    id: number;
    label: string;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
}

interface ISelectField {
    label?: string;
    placeholder?: string;
    options?: IOptions[];
    selected?: any;
    onClick: (item: string) => void;
}

export default function SelectField({
    label,
    placeholder = "Selecione...",
    options,
    selected,
    onClick,

}: ISelectField) {

    const [active, setActive] = useState<boolean>(false);
    const [placeholderText, setPlaceholder] = useState<string>(placeholder);
    const selectRef = useRef<HTMLDivElement>(null);

    const handleOption = (item: { id: number, label: string }, index: number) => {
        setPlaceholder(item.label);
        onClick(item.label);
        setActive(false);
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
            setActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <div
            ref={selectRef}
            className="w-full"
        >

            {label && (
                <label className={` transition-all text-sm font-medium mb-[7px] block text-gray-900`}>
                    {label}
                </label>)}

            <button
                className="
                flex p-3 
                rounded-xl 
                gap-3 
                px-5
                w-full
                shadow-sm
                border-[1px]
                border-gray-200
                text-gray-900
            "
                onClick={e => setActive(!active)}>{
                    selected ? selected :
                        placeholderText}
            </button>
            <div className="relative ">
                {
                    options && (
                        <div className={`
                        absolute transition-all 
                        bg-gray-50 w-full
                        rounded-xl ease-linear
                        ${active ?
                                'top-[-5px] opacity-100 visible' :
                                'top-[-10px] opacity-0 invisible'}
                        ${options.length > 4 ?
                                'overflow-y-scroll overflow-x-hidden h-[160px]' :
                                ''}
                        `

                        }>
                            {
                                options && options.map((item: { id: number, label: string }, i) => {
                                    return (
                                        <ButtonField
                                            key={i}
                                            className="shadow-none hover:bg-gray-100 text-gray-900"
                                            label={item.label}
                                            leftIcon={<CopyIcon />}
                                            onClick={() => {
                                                handleOption(item, i);
                                            }}
                                        />
                                    )
                                })
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}