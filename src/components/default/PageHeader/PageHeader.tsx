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
        <>
            <div className="
            py-[7px]
            px-[40px] sm:px-auto 
            text-center 
            text-[10px] sm:text-[12px]
            bg-gradient-to-r from-red-500 to-red-900
            ">
                Este serviço não substitui a necessidade de um atendimento com um profissional em nutrição
            </div>
            <div className="z-50 w-full absolute">

                <div className={`
                     relative 
                     z-50 
                     mx-auto 
                     flex 
                     justify-between 
                     items-center 
                     py-5
                     px-5 sm:px-20
                     w-11/12 sm:w-9/12 
                     rounded-full
                `}>

                    <div>
                        <a href="/">
                            <Image
                                src="/digital-nutri.svg"
                                width={140}
                                height={0}
                                alt="Digital Nutri"
                                className="w-[120px] sm:w-[150px]"
                            />
                        </a>
                    </div>

                    <div className="flex">

                        <ul className={`
                            mr-5 
                            flex 
                            flex-col sm:flex-row
                            items-center
                            justify-center sm:justify-start
                            gap-10 sm:gap-5 
                            ease-linear
                            transition-all 
                            bg-red-900 sm:bg-transparent
                            fixed sm:relative
                            top-0
                            left-0
                            w-[100%] sm:w-auto
                            h-screen sm:h-auto
                            ${showMenu ?
                                'opacity-1 visible' :
                                'opacity-0 invisible'}`}>
                            {
                                menuOptions &&
                                menuOptions.map((item, i) =>
                                    <li
                                        key={i}
                                        className="font-bold 
                                        text-[32px] sm:text-sm
                                        text-sm text-gray-900
                                    ">
                                        <a href={item.permalink} rel="follow">{item.label}</a></li>)
                            }
                        </ul>

                        <button
                            onClick={e => setShowMenu(!showMenu)}
                            className="w-[25px] flex flex-col items-end gap-1">
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
                                    );
                                })
                            }
                        </button>

                    </div>

                </div>
            </div>
        </>
    )
}