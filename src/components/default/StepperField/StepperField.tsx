'use client'

import { useState } from "react";

interface IOptions {
    id: number;
    label: string;
}

interface IStepperField {
    active: number;
    colorActive?: string;
    colorInactive?: string;
    options: IOptions[];
}

export default function StepperField({
    active,
    options,
    colorActive = 'bg-emerald-300',
    colorInactive = 'bg-gray-200' }: IStepperField) {

    return (
        <div>

            <div className="flex mb-10">
                {
                    options &&
                    options.map((item, i) => {
                        return (
                            <div
                                key={i}
                                className="flex w-[30%] items-center gap-3">
                                <span
                                    className={`
                                    flex items-center justify-center
                                    rounded-full w-[30px] h-[30px]
                                    inline transition-all ease-linear
                                    ${i <= active ? `${colorActive} text-white` : `${colorInactive} text-gray-800`}
                        `}>
                                    {item.id + 1}
                                </span>
                                <span
                                    className={`
                                    grow inline 
                                    text-[9.5px] text-sm
                                    font-bold
                                    ${i <= active ? 'text-emerald-800' : 'text-gray-300'}
                                    `}>
                                    {item.label}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}