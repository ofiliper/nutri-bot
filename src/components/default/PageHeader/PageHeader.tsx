'use client'

import AlertIcon from "@/assets/icons/AlertIcon";
import Image from "next/image";
import { useState } from "react";
import pageHeaderStyle from "./page-header-style";

export default function PageHeader() {

    const [showMenu, setShowMenu] = useState<boolean>(false);

    const menuOptions = [
        {
            permalink: "/calcular-calorias", label: "Calcular calorias",
        },
        {
            permalink: "#", label: "Contato",
        },
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
            <div className={pageHeaderStyle.main()}>

                <AlertIcon color="yellow" />
                <p>Este serviço não substitui a necessidade de um atendimento com um profissional em nutrição</p>

            </div>

            <div className="z-50 w-full absolute">

                <div className={pageHeaderStyle.container()}>

                    <div>
                        <a href="/">
                            <Image
                                src="/digital-nutri.svg" width={140} height={0}
                                alt="Digital Nutri" className="w-[120px] sm:w-[150px]"
                            />
                        </a>
                    </div>

                    <div className="flex">

                        <ul className={pageHeaderStyle.menu(showMenu)}>
                            {
                                menuOptions &&
                                menuOptions.map((item, i) =>
                                    <li
                                        key={i}
                                        className={pageHeaderStyle.menuItem()}>
                                        <a href={item.permalink} rel="follow">{item.label}</a></li>)
                            }
                        </ul>

                        <button
                            onClick={e => setShowMenu(!showMenu)}
                            className={pageHeaderStyle.menuButton()}>
                            {
                                Array(3).fill(0).map((item, i) => {

                                    return (
                                        <span
                                            key={i}
                                            className={pageHeaderStyle.menuButtonItem(showMenu)}
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