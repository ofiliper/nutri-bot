'use client'

import CopyIcon from "@/assets/icons/CopyIcon";
import ButtonField from "@/components/default/ButtonField/ButtonField";
import InputField from "@/components/default/InputField/InputField";
import SelectField from "@/components/default/SelectField/SelectField";
import { userStore } from "@/store/user/user-store";
import formatDecimal from "@/utils/functions/formatDecimal";
import { useEffect, useRef, useState } from "react";
import { useStore } from "zustand";
import "@/assets/css/globals.css"
import TrashIcon from "@/assets/icons/TrashIcon";
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";
import { navigationStore } from "@/store/navigation/navigation-store";
import UserData from "@/store/user/UserData";
import { answerStore } from "@/store/answer/answer-store";


export default function FormUserConclusion() {

    const { createCalculate } = UserData();
    const user = useStore(userStore);
    const navigation = useStore(navigationStore);
    const answer = useStore(answerStore);

    const { stepper } = navigation.data;
    const { content } = user.data;
    const [food, setFood] = useState<string>("");

    const scrollRef = useRef<HTMLDivElement | null>(null);

    const sendRequest = () => {
        createCalculate(user.data).then(answer_res => {
            answer.fnOnChange("data", answer_res.data);
        })
    }

    return (
        <div>
            <h1 className="text-5xl mb-10 font-bold text-gray-900">
                Clique abaixo para ver o resultado
            </h1>

            <button className="text-gray-600" onClick={sendRequest}>
                Verificar
            </button>

            <div>
                <div
                    ref={scrollRef}
                    className="
                    mb-[20px] 
                    h-[280px] sm:h-[180px] 
                    overflow-y-scroll 
                    custom-scrollbar pr-4">

                </div>


            </div>

            <div className="flex justify-start gap-5">


                <div className="w-[50%]">
                    <ButtonField
                        className="bg-emerald-300"
                        label={"Retornar..."}
                        onClick={() => {
                            navigation.fnOnChange("stepper", stepper - 1);
                        }}
                        leftIcon={<CopyIcon />}
                    />
                </div>



            </div>

        </div >
    )
}