'use client'

import { useEffect, useRef, useState } from "react";
import ButtonField from "../ButtonField/ButtonField";
import CopyIcon from "@/assets/icons/CopyIcon";
import selectFieldStyle from "./select-field";



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
        <div ref={selectRef} className="w-full">

            {label && (
                <label className={selectFieldStyle.label()}>
                    {label}
                </label>
            )}

            <button
                className={selectFieldStyle.button()}
                onClick={e => setActive(!active)}>

                {selected ?? placeholderText}

            </button>

            <div className="relative">
                {
                    options && (
                        <div className={selectFieldStyle.options(active, options.length)}>
                            {
                                options &&
                                options.map((item: IOptions, i: number) => {
                                    return (
                                        <ButtonField
                                            key={i}
                                            label={item.label}
                                            leftIcon={<CopyIcon />}
                                            onClick={() => handleOption(item, i)}
                                            className={selectFieldStyle.optionButton()}
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