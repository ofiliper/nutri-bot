import CopyIcon from "@/assets/icons/CopyIcon";

export default function BannerText() {

    const options = [
        {
            label: "Calcular calorias",
            icon: <CopyIcon color="#fff" size="15px" />,
            permalink: "/calcular-calorias",
            active: true,
        },
        {
            label: "Montar minha dieta",
            icon: <CopyIcon color="#fff" size="15px" />,
            permalink: "#",
            active: false,
        }
    ];

    return (
        <div className="w-[600px] text-center z-40 relative">

            <h1 className="text-[86px] relative
            leading-tight mb-5
            font-sans font-extrabold 
            bg-gradient-to-br from-red-950 via-indigo-800  
            text-transparent bg-clip-text">
                Qual é o seu objetivo?
            </h1>

            <p className="w-[420px] mx-auto text-sm">
                Clique abaixo e faça o cálculo estimado de calorias que você consumiu hoje. <br />
                Atenção: Este serviço não substitui a necessidade de um acompanhamento nutricional.</p>

            <div className="mt-[60px] flex justify-around">
                {
                    options &&
                    options.map((item, i) => {

                        const isActive = item.active ?
                            "group/edit shadow-lg transition-all ease-linear hover:shadow-md" :
                            "opacity-35";

                        return (
                            <a href={item.permalink} key={i}>
                                <button className={`${isActive} relative bg-white px-7 py-4 rounded-3xl flex justify-between items-center gap-5`} >
                                    {
                                        !item.active && (
                                            <span className="absolute top-[-5px] rounded-md text-xs bg-red-400 text-white px-2 py-1">Em breve</span>
                                        )
                                    }

                                    <p className="font-medium">{item.label}</p>

                                    <div className="
                                bg-red-400 group-hover/edit:bg-emerald-400 transition-all ease-linear 
                                w-[35px] h-[35px] rounded-full text-white flex justify-center items-center
                                ">{item.icon}</div>
                                </button>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}