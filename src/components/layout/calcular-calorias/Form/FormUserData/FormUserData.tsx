import CopyIcon from "@/assets/icons/CopyIcon";
import formatDecimal from "@/utils/functions/formatDecimal";
import InputField from "@/components/default/InputField/InputField";
import SelectField from "@/components/default/SelectField/SelectField";
import { userStore } from "@/store/user/user-store";
import { useStore } from "zustand";
import ButtonField from "@/components/default/ButtonField/ButtonField";
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";
import { navigationStore } from "@/store/navigation/navigation-store";

export default function FormUserData() {

    const user = useStore(userStore);
    const navigation = useStore(navigationStore);
    
    const { name, age, weight, height, objective, healthCondition } = user.data;
    const { stepper } = navigation.data;


    return (
        <div>

            <h1 className="text-5xl mb-10 font-bold text-gray-900">
                Eu preciso te conhecer melhor
            </h1>

            <div>

                <div className="flex justify-between gap-5 mb-[20px]">

                    <InputField
                        value={name}
                        label="Seu nome"
                        className="w-[70%] sm:w-[50%]"
                        leftIcon={<CopyIcon />}
                        placeholder="Escreva seu nome..."
                        onChange={e => user.fnOnChange("name", e.target.value)}
                    />

                    <InputField
                        value={age}
                        label="Sua idade"
                        className="w-[50%]"
                        leftIcon={<CopyIcon />}
                        placeholder="Escreva seu nome..."
                        onChange={e => user.fnOnChange("age", e.target.value)}
                    />

                </div>

                <div className="flex justify-between gap-5 mb-[20px]">

                    <InputField
                        value={weight}
                        label="Seu peso"
                        className="w-[50%]"
                        leftIcon={<CopyIcon />}
                        placeholder="Escreva seu nome..."
                        onChange={e => user.fnOnChange("weight", formatDecimal(e.target.value))}
                    />

                    <InputField
                        value={height}
                        label="Sua altura"
                        className="w-[50%]"
                        placeholder="Escreva seu nome..."
                        onChange={e => user.fnOnChange("height", formatDecimal(e.target.value))}
                    />

                </div>

                <div className="flex flex-col sm:flex-row justify-between items-end gap-5 mb-[20px]">

                    <SelectField
                        label={"Alguma condição de saúde?"}
                        selected={healthCondition}
                        onClick={item => user.fnOnChange("healthCondition", item)}
                        options={[
                            { label: 'Não possuo', id: 1 },
                            { label: 'Hipertensão', id: 2 },
                            { label: 'Diabetes', id: 3 },
                        ]}
                    />

                    <SelectField
                        label={"Seu objetivo"}
                        selected={objective}
                        onClick={item => user.fnOnChange("objective", item)}
                        options={[
                            { label: 'Emagrecimento', id: 1 },
                            { label: 'Hipertrofia', id: 2 },
                        ]}
                    />

                </div>

            </div>

            <div className="flex justify-end gap-5">

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
    );

}