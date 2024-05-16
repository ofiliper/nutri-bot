'use client'

import CopyIcon from "@/assets/icons/CopyIcon";
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";
import PageHeader from "@/components/default/PageHeader/PageHeader";
import BoardField from "@/components/default/BoardField/BoardField";
import ButtonField from "@/components/default/ButtonField/ButtonField";
import StepperField from "@/components/default/StepperField/StepperField";
import { navigationStore } from "@/store/navigation/navigation-store";
import { useStore } from "zustand";
import PageContainer from "@/components/layout/PageContainer";
import { answerStore } from "@/store/answer/answer-store";
import { useEffect } from "react";
import FormUserData from "@/components/layout/calcular-calorias/Form/FormUserData/FormUserData";
import FormUserEating from "@/components/layout/calcular-calorias/Form/FormUserEating/FormUserEating";
import FormUserConclusion from "@/components/layout/calcular-calorias/FormUserConclusion/FormUserConclusion";

export default function PageComponent() {

    const navigation = useStore(navigationStore);
    const answer = useStore(answerStore);
    const { stepper } = navigation.data;
    const { data: responseAnswer } = answer.data;

    const options = [
        { id: 0, label: 'Sobre você' },
        { id: 1, label: 'Seu consumo', },
        { id: 2, label: "Finalizar" }
    ];


    return (
        <PageContainer>

            <div className="h-screen w-full overflow sm:overflow-hidden">

                <div
                    className="w-10/12 mx-auto mt-[95px] mb-[-40px]">
                    <div className="w-full sm:w-5/12">
                        <StepperField
                            active={stepper}
                            options={options} />
                    </div>
                </div>

                <div
                    className="
                    z-20
                    flex w-10/12 
                    mx-auto 
                    justify-between">

                    <div className="flex-1 w-6/12">

                        <div className="w-full sm:w-9/12 flex flex-col pt-10 justify-start h-screen">

                            {stepper === 0 && (<FormUserData />)}
                            {stepper === 1 && (<FormUserEating />)}
                            {stepper === 2 && (<FormUserConclusion />)}

                        </div>

                    </div>

                    <div className="hidden sm:block mt-[-50px]">

                        <BoardField
                            content={responseAnswer} />

                    </div>

                </div>
            </div>

        </PageContainer>
    );
}