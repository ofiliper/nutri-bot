'use client'

import CopyIcon from "@/assets/icons/CopyIcon";
import TrashIcon from "@/assets/icons/TrashIcon";
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";
import ButtonField from "@/components/default/ButtonField/ButtonField";
import InputField from "@/components/default/InputField/InputField";
import { useRef, useState } from "react";
import { navigationStore } from "@/store/navigation/navigation-store";
import { userStore } from "@/store/user/user-store";
import { useStore } from "zustand";
import "@/assets/css/globals.css"


export default function FormUserEating() {

    const user = useStore(userStore);
    const navigation = useStore(navigationStore);

    const { stepper } = navigation.data;
    const { content } = user.data;
    const [food, setFood] = useState<string>("");

    const scrollRef = useRef<HTMLDivElement | null>(null);

    const updateFoodList = () => {
        if (food.trim() === "") return;
        addItem().then(() => {
            setFood("");
            if (scrollRef.current) {
                scrollRef.current.scrollTop = scrollRef.current.scrollHeight + 200;
            };
        });
    };

    const updateListItem = (value: string, index: number) => {
        const newData = [...content];
        newData[index].desc = value;
        user.fnOnChange("content", newData);
    };

    const removeListItem = (index: number) => {
        const newData = [...content];
        newData.splice(index, 1);
        user.fnOnChange("content", newData);
    };

    const addItem = async () => {
        const newData = [...content];
        newData.push({ desc: food });
        user.fnOnChange("content", newData);
    };

    return (
        <div>
            <h1 className="text-5xl mb-10 font-bold text-gray-900">
                Escreva seu consumo de hoje
            </h1>
            <div>
                <div
                    ref={scrollRef}
                    className="
                    mb-[20px] 
                    h-[280px] sm:h-[180px] 
                    overflow-y-scroll 
                    custom-scrollbar pr-4">
                    {
                        content &&
                        content.map((item, i) => {
                            return (
                                <div key={i} className="mb-2">
                                    <InputField
                                        value={item.desc}
                                        onChange={e => updateListItem(e.target.value, i)}
                                        rightIcon={<>
                                            <ButtonField
                                                onClick={() => removeListItem(i)}
                                                rightIcon={<TrashIcon />}
                                                className="w-[30px] text-gray-400 flex-1 shadow-none sm:shadow-none"
                                            />
                                        </>} />
                                </div>
                            );
                        })
                    }
                </div>

                <div className="mb-[20px]">
                    <InputField
                        value={food}
                        className="w-[100%]"
                        placeholder="Escreva o alimento"
                        onChange={e => { setFood(e.target.value) }}
                        onKeyDown={e => {
                            if (e.key === "Enter") return updateFoodList()
                        }}
                        rightIcon={<>
                            <ButtonField
                                label="+"
                                onClick={updateFoodList}
                                isDisabled={food.trim() === ""}
                                className="w-[30px] bg-emerald-300 text-gray-900 flex-1 text-[30px] px-[15px] py-[2.5px]"
                            />
                        </>}
                    />

                </div>
            </div>

            <div className="flex justify-end gap-5">

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

                <div className="w-[50%]">
                    <ButtonField
                        className="bg-emerald-300"
                        label={"Prosseguir..."}
                        rightIcon={<ArrowRightIcon color="#fff" />}
                        onClick={() => {
                            navigation.fnOnChange("stepper", stepper + 1);
                        }}
                    />
                </div>

            </div>

        </div >
    )
}