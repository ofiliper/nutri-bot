'use client'

import { useRef, useState } from "react";
import FloatElements from "./FloatElements";
import BannerText from "./BannerText";

export default function Banner() {

    const [coordinates, setCoordinates] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent) => {
        setCoordinates({ x: event.clientX, y: event.clientY })
    }

    return (
        <div
            style={{ overflow: "hidden" }}
            className="
            h-screen
            bg-slate-50            
            before:content-['*']
            flex w-full justify-center items-center relative
            before:h-[600px] before:w-[700px] before:absolute
            before:bg-gradient-to-r from-purple-300 via-amber-100 
            before:rounded-full before:blur-[90px] before:right-[200px]
        "
            onMouseMove={handleMouseMove}>
            <FloatElements coordinates={coordinates} />
            <BannerText />
        </div >
    )

}