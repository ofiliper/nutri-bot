const buttonStyle = {
    button: (isDisabled: boolean) => `
    flex p-3 
    rounded-3xl 
    gap-3 
    px-5
    shadow-sm
    w-full
    ${isDisabled ? 'opacity-40' : 'opacity-100'}
    `
};

export default buttonStyle;