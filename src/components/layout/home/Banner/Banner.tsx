'use client'

import { useRef, useState } from "react";
import FloatElements from "./FloatElements";
import BannerText from "./BannerText";
import { bannerStyle } from "./banner-style";

export default function Banner() {

    const [coordinates, setCoordinates] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent) => {
        setCoordinates({ x: event.clientX, y: event.clientY })
    }

    return (
        <div
            style={{ overflow: "hidden" }}
            className={bannerStyle.container()}
            onMouseMove={handleMouseMove}>
            <FloatElements coordinates={coordinates} />
            <BannerText />
        </div >
    )

}