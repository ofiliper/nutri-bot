const pageHeaderStyle = {
    main: () => `
    flex items-center gap-2 justify-center
    py-[7px]
    px-[40px] sm:px-auto 
    text-center 
    text-[10px] sm:text-[12px]
    text-white
    bg-gradient-to-r from-red-500 to-red-900
    `
    ,
    container: () => `
    relative 
    z-50 
    mx-auto 
    flex 
    justify-between 
    items-center 
    py-5
    px-5 sm:px-20
    w-11/12 sm:w-9/12 
    rounded-full
    `
    ,
    menu: (show: boolean) => `
    mr-5 
    flex 
    flex-col sm:flex-row
    items-center
    justify-center sm:justify-start
    gap-10 sm:gap-5 
    ease-linear
    transition-all 
    bg-red-900 sm:bg-transparent
    fixed sm:relative
    top-0
    left-0
    w-[100%] sm:w-auto
    h-screen sm:h-auto
    ${show ?
            'opacity-1 visible' :
            'opacity-0 invisible'}
    `
    ,
    menuItem: () => `
    font-bold 
    text-[32px] sm:text-sm
    text-white sm:text-gray-900
    `
    ,
    menuButton: ()=> `
    w-[25px] flex flex-col items-end gap-1
    `,
    menuButtonItem: (show: boolean) => `
    ${show ? 'bg-stone-300' : 'bg-green-500 '}  
    transition-all ease-linear h-[4px] duration-500  
    rounded-full w-full
    `
}

export default pageHeaderStyle;