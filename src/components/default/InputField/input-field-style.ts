const inputStyle = {
    label: (isFocus: boolean) => `
                transition-all 
                text-sm font-medium 
                mb-[7px] block
                text-gray-900
                ${isFocus ? 'border-emerald-500' : ''}
                `
    ,
    container: (isFocus: boolean) => `
                flex white-500
                bg-white
                p-3 rounded-lg
                gap-3 px-5
                shadow-sm
                w-full
                border-[1px] transition-all ease-linear
                ${isFocus ? 'border-emerald-500' : 'border-gray-200'}
                `
    ,
    input: () => `
                w-full
                bg-transparent
                focus-visible:outline-none
                text-gray-900
                `
    ,
    span: () => `
                text-[10px]
                `

};

export default inputStyle;