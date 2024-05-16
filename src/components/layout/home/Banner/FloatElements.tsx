import { animate } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface ICoordinates {
    coordinates: {
        x: number;
        y: number;
    }
}

export default function FloatElements({ coordinates }: ICoordinates) {

    const orangeRef = useRef<HTMLImageElement>(null);
    const strawRef = useRef<HTMLImageElement>(null);
    const chocoRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        updateCoordinates();
    }, [coordinates])

    const updateCoordinates = () => {
        const maxDistance = 100;
        const intensity = 1;

        if (orangeRef.current && strawRef.current && chocoRef.current) {
            const offsetX = (coordinates.x - orangeRef.current.x) * intensity / maxDistance;
            const offsetY = (coordinates.y - orangeRef.current.y) * intensity / maxDistance;

            orangeRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            strawRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            chocoRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        }
    }

    const appearKeyframe = (bottomFrom: string, bottomTo: string) => {
        return `
        @keyframes appear {
            0% {
                bottom: ${bottomFrom};
                opacity: 0;
            }
            100% {
                bottom: ${bottomTo};
                opacity: 1;
            }
        }
        `
    }

    return (
        <div>

            <style>
                {appearKeyframe('-500px', '30px')}
            </style>

            <img src="/orange.png"
                ref={orangeRef}
                className="absolute left-0 bottom-0 blur-[1px] hover:blur-none transition-all ease-linear ease-linear transition-all"
                style={{
                    animation: "appear 1s",
                    animationFillMode: "forwards",
                }}
                width={400} height={100} alt="Orange" />

            <Image src="/choco.png"
                ref={strawRef}
                className="absolute right-[200px] bottom-40 blur-sm hover:blur-[1.5px]  transition-all ease-linear transition-all"
                style={{
                    animation: "appear 1s",
                    animationFillMode: "forwards",
                }}
                width={350} height={100} alt="Strawberry" />

            <Image src="/strawberry.png"
                ref={chocoRef}
                className="absolute top-20 right-60 blur hover:blur-sm opacity-60 transition-all ease-linear transition-all"
                style={{
                    animation: "appear 1s",
                    animationFillMode: "forwards",
                }}
                width={220} height={100} alt="Chocolate" />
        </div>
    )
}