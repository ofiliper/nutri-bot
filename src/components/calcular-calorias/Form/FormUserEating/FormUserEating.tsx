'use client'

import CopyIcon from "@/assets/icons/CopyIcon";
import ButtonField from "@/components/default/ButtonField/ButtonField";
import InputField from "@/components/default/InputField/InputField";
import SelectField from "@/components/default/SelectField/SelectField";
import { userStore } from "@/store/user/user-store";
import formatDecimal from "@/utils/functions/formatDecimal";
import { useEffect, useState } from "react";
import { useStore } from "zustand";
import "@/assets/css/globals.css"
import TrashIcon from "@/assets/icons/TrashIcon";


export default function FormUserEating() {

    const user = useStore(userStore);
    const { content } = user.data;
    const [food, setFood] = useState<string>("");

    const updateFoodList = () => {
        if (food.trim() === "") return;
        addItem();
        setFood("");
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

    const addItem = () => {
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
                <div className="mb-[20px] h-[280px] sm:h-[180px] overflow-y-scroll custom-scrollbar pr-4">
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
                                                rightIcon={<TrashIcon color="#fff" />}
                                                className="w-[30px] bg-red-300 text-white flex-1"
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
        </div >
    )
}