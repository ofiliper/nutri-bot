'use client'

import CopyIcon from "@/assets/icons/CopyIcon";
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";
import PageHeader from "@/components/default/PageHeader/PageHeader";
import BoardField from "@/components/default/BoardField/BoardField";
import ButtonField from "@/components/default/ButtonField/ButtonField";
import StepperField from "@/components/default/StepperField/StepperField";
import FormUserData from "@/components/calcular-calorias/Form/FormUserData/FormUserData";
import FormUserEating from "@/components/calcular-calorias/Form/FormUserEating/FormUserEating";
import { navigationStore } from "@/store/navigation/navigation-store";
import { useStore } from "zustand";

export default function PageComponent() {

    const navigation = useStore(navigationStore);
    const { stepper } = navigation.data;

    const options = [
        { id: 0, label: 'Sobre você' },
        { id: 1, label: 'Seu consumo', },
        { id: 2, label: "Resultado" }
    ];

    return (
        <div
            style={{ overflow: "hidden" }}
            className="">

            <PageHeader />

            <div
                className="
                z-50 
                h-screen 
                flex w-10/12 
                mx-auto 
                justify-between">

                <div className="flex-1 w-6/12">

                    <div className="w-9/12 flex flex-col pt-10 justify-start h-screen">

                        <StepperField
                            active={stepper}
                            options={options} />

                        {stepper === 0 && (<FormUserData />)}
                        {stepper === 1 && (<FormUserEating />)}
                        {stepper === 2 && (<FormUserData />)}

                        <div className="flex justify-end gap-5">

                            {
                                stepper > 0 && (
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
                                )
                            }

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

                    </div>

                </div>

                <BoardField />

            </div>

        </div>
    );
}