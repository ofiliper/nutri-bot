import CopyIcon from "@/assets/icons/CopyIcon";
import formatDecimal from "@/utils/functions/formatDecimal";
import InputField from "@/components/default/InputField/InputField";
import SelectField from "@/components/default/SelectField/SelectField";
import { userStore } from "@/store/user/user-store";
import { useStore } from "zustand";

export default function FormUserData() {

    const user = useStore(userStore);
    const { name, age, weight, height, objective, healthCondition } = user.data;

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
                        className="w-[50%]"
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

                <div className="flex justify-between gap-5 mb-[20px]">

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

                {/* <button onClick={() => {
                    fetch(`http://localhost:4001/calculate`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(user.data)
                    }).then(res => {
                        console.log(res);
                    })
                }}>
                    Obj
                </button> */}

            </div>
        </div>
    )
}