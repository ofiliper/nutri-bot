import { HealthConditionENUM, ObjectiveENUM } from '@/services/enum';
import { create } from 'zustand'

interface IContent {
    desc?: string;
}

interface IProps {
    age?: number | null;
    name: string;
    height?: string;
    weight?: string;
    objective?: ObjectiveENUM | null;
    healthCondition?: HealthConditionENUM | null;
    content: IContent[];
}

const stateDefault: IProps = {
    age: null,
    name: "",
    height: "",
    weight: "",
    objective: null,
    healthCondition: null,
    content: []
}

type Store = {
    data: IProps
    errors: Partial<{ [field in keyof IProps]: string }>
    fnOnChange: (field: keyof IProps, value: any) => void
    fnReset: () => void
    fnParcialReset: (field: keyof IProps) => void
}

export const userStore = create<Store>((set, get) => ({
    data: { ...stateDefault },
    errors: {},
    fnOnChange: (field, value) => {
        set((prevState) => (
            {
                ...prevState,
                data: {
                    ...prevState.data,
                    [field]: value
                }
            }))
    },
    fnReset: () => {
        set((prevState) => (
            {
                ...prevState,
                data: { ...stateDefault }
            }))
    },
    fnParcialReset: (field) => {
        set((prevState) => {
            return {
                ...prevState,
                data: {
                    ...prevState.data,
                    [field]: stateDefault[field]
                }
            }
        }
        )
    }
}))