// import { FolderDTO, FormDTO, FormListDTO, FormsListDTO, ShowFolderDTO } from '@/services/dto';
import { AnswerDTO } from '@/services/dto';
import { create } from 'zustand'

const stateDefault: AnswerDTO = {
    response: "",
    message: "",
    data: `Conte-me mais sobre você e seus objetivos, você quer emagrecer ou desenvolver massa magra?
    Você possui alguma condição de saúde que eu devo considerar?
    `
}

type Store = {
    data: AnswerDTO
    errors: Partial<{ [field in keyof AnswerDTO]: string }>
    fnOnChange: (field: keyof AnswerDTO, value: any) => void
    fnReset: () => void
    fnParcialReset: (field: keyof AnswerDTO) => void
}

export const answerStore = create<Store>((set, get) => ({
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