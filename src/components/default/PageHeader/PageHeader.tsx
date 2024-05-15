'use client'

import Image from "next/image";
import { useState } from "react";

export default function PageHeader() {

    const [showMenu, setShowMenu] = useState<boolean>(false);

    const menuOptions = [
        {
            permalink: "#", label: "Sobre",
        },
        {
            permalink: "/calcular-calorias", label: "Calcular calorias",
        }
    ];

    const parseStyle = (index: number) => {
        switch (index) {
            case 0: return { transform: "rotate(315deg)", marginTop: "8px" };
            case 1: return { opacity: 0 };
            case 2: return { transform: "rotate(225deg)", marginTop: "-15px" };
        };
    };

    return (
        <div className="z-50 w-full">

            <div className="relative z-50 w-9/12 mx-auto flex justify-between items-center py-5 px-20 rounded-full">

                <h1 className="text-[26px]">
                    <a href="/">
                        <Image src="/digital-nutri.svg" width={180} height={120} alt="Digital Nutri" />
                    </a>
                </h1>

                <div className="flex">

                    <ul className={`flex gap-5 mr-5 transition-all ease-linear
                ${showMenu ? 'opacity-1 visible' : 'opacity-0 invisible'}`}>
                        {
                            menuOptions &&
                            menuOptions.map((item, i) => <li key={i} className="font-bold text-sm text-gray-900"><a href={item.permalink}>{item.label}</a></li>)
                        }
                    </ul>

                    <button
                        onClick={e => setShowMenu(!showMenu)}
                        className="w-[25px] h-4 flex flex-col items-end gap-1">
                        {
                            Array(3).fill(0).map((item, i) => {

                                return (
                                    <span
                                        key={i}
                                        className={`${showMenu ? 'bg-stone-300' : 'bg-green-500 '}  
                                        transition-all ease-linear h-[4px] duration-500  rounded-full w-full
                                        `}
                                        style={{ ...(showMenu ? parseStyle(i) : {}) }}
                                    />
                                )
                            })
                        }
                    </button>

                </div>

            </div>
        </div>
    )
}