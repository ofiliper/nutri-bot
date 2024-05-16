export const bannerStyle = {
    container: () => `
    h-screen
    bg-slate-50            
    before:content-['*']
    flex w-full justify-center items-center relative
    before:h-[600px] before:w-[700px] before:absolute
    before:bg-gradient-to-r from-purple-300 via-amber-100 
    before:rounded-full before:blur-[90px] before:right-[200px]
    `
}

export const bannerTextStyle = {
    h1: () => `
    
    text-[58px] sm:text-[86px] 
    relative
    leading-tight 
    mb-5
    font-sans font-extrabold 
    bg-gradient-to-br from-red-950 via-indigo-800  
    text-transparent 
    bg-clip-text
    `
    ,
    p: () => `
    w-[90%] sm:w-[420px]
    mx-auto 
    mb-[30px]
    text-sm sm:text-lg
    text-gray-900
    `
    ,
    buttonContainer: () => `
    flex
    flex-col sm:flex-row
    items-center
    justify-around
    gap-[20px]
    `
    ,
    button: (extraClass: string) => `
    relative text-gray-900
    bg-white px-7 py-4 rounded-3xl flex justify-between items-center gap-5
    ${extraClass}
    `
    ,
    buttonLabel: () => `
    absolute top-[-5px] rounded-md text-xs bg-red-400 text-white px-2 py-1
    `
    ,
    buttonIcon: () => `
    bg-red-400 group-hover/edit:bg-emerald-400 transition-all ease-linear 
    w-[35px] h-[35px] rounded-full text-white flex justify-center items-center
    `
}

export const bannerElements = {
    orange: () => `
    absolute left-0 bottom-0 blur-[1px] hover:blur-none transition-all ease-linear ease-linear transition-all
    `,
    choco: () => `
    absolute right-[200px] bottom-40 blur-sm hover:blur-[1.5px]  transition-all ease-linear transition-all
    `,
    straw: () => `
    absolute top-20 right-60 blur hover:blur-sm opacity-60 transition-all ease-linear transition-all
    `
}