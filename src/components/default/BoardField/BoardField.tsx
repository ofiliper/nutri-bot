'use client'

import { useEffect, useState } from "react";

export default function BoardField() {

    const textDefault = `Conte-me mais sobre você e seus objetivos, você quer emagrecer ou desenvolver massa magra?
    Você possui alguma condição de saúde que eu devo considerar?
    `.split(" ");
    const [index, setIndex] = useState(0);
    const [text, setText] = useState<string>("");

    useEffect(() => {
        if (index < textDefault.length) {
            const timer = setTimeout(() => {
                setText(prevText => prevText + " " + textDefault[index]);
                setIndex(prevIndex => prevIndex + 1);
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [index]);


    return (
        <>
            <style>
                {`
                @keyframes appear_a {
                    0% {
                        bottom: -500px;
                        opacity: 0;
                    }
                    100% {
                        bottom: -40px;
                        opacity: 1;
                    }
                }
                @keyframes appear_b {
                    0% {
                        bottom: -500px;
                        opacity: 0;
                    }
                    100% {
                        bottom: -110px;
                        opacity: 1;
                    }
                }
                @keyframes appear_c {
                    0% {
                        bottom: -500px;
                        opacity: 0;
                    }
                    100% {
                        bottom: -110px;
                        opacity: 1;
                    }
                }
                @keyframes click {
                    0% {
                        height: 140px
                    }
                    50% {
                        height: 90px
                    }
                    100% {
                        height: 140px
                    }
                 
                }
                @keyframes slide {
                    0% {
                        top: 15px
                    }
                    50% {
                        top: 0
                    }
                    100% {
                        top: 15px
                    }
                 
                }
                @keyframes compression {
                    0% {
                        top: 22.5px;
                        height: 50px;
                    }
                    50% {
                        top: 0px;
                        height: 45px;
                    }
                    100% {
                        top: 22.5px;
                        height: 50px;
                    }
                 
                }
                `}
            </style>

            <div
                style={{
                    animation: "appear_a .8s",
                    animationFillMode: "forwards",
                }}
                className="flex relative items-end relative rotate-[-2deg]">

                <div className="w-full absolute top-0 w-full h-[200px] flex items-start justify-center ">
                    <div
                        style={{
                            animation: "click 1.2s",
                            animationDelay: ".2s",
                            animationFillMode: "forwards"
                        }}
                        className="w-[280px] bg-gray-900 h-[140px] block rounded-lg z-10 relative">
                        <div className="w-full bg-gray-700 h-[7px] block absolute top-0 rounded-t-lg" />
                        <div
                            style={{
                                animation: "slide 1.2s",
                                animationDelay: ".2s",
                                animationFillMode: "forwards"
                            }}
                            className="w-full bg-gray-700 h-[7px] block absolute top-[15px] rounded-t-lg" />
                        <div
                            style={{
                                animation: "compression 1.2s",
                                animationDelay: ".2s",
                                // animationFillMode: "forwards"
                            }}
                            className="w-full bg-gray-700 h-[50px] block absolute top-[22.5px] rounded-t-lg
                        bg-gradient-to-br from-gray-700 from-gray-900 to-gray-700
                        " />
                        <div className="w-full bg-gray-500 h-[7px] block absolute bottom-0 rounded-b-lg" />
                    </div>
                </div>

                <div

                    className={`
                    bg-gradient-to-br from-orange-200 to-orange-300 w-[600px]
                    h-[90%]
                    rounded-t-3xl 
                    p-10 flex justify-center
                    border-4 border-orange-200
          
                        `

                    }
                >
                    <div
                        style={{
                            animation: "appear_b .8s",
                            animationFillMode: "forwards",
                        }}
                        className="bg-gray-50  w-11/12 h-screen p-10 shadow-xl absolute" />

                    <div
                        style={{
                            animation: "appear_c 1.4s",
                            animationFillMode: "forwards",
                        }}
                        className="bg-white absolute 
                        w-11/12 mx-auto text-sm
                        h-screen px-10 py-20 shadow-xl rotate-[1deg]">

                        <p>
                            {
                                text
                            }
                        </p>

                    </div>

                </div>
            </div>


        </>
    )
}