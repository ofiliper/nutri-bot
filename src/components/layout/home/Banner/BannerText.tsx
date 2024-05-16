import CopyIcon from "@/assets/icons/CopyIcon";
import { bannerTextStyle } from "./banner-style";

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

            <h1 className={bannerTextStyle.h1()}>
                Qual é o seu objetivo?
            </h1>

            <p className={bannerTextStyle.p()}>
                Clique abaixo e faça o cálculo estimado de calorias que você consumiu hoje.</p>

            <div className={bannerTextStyle.buttonContainer()}>
                {
                    options &&
                    options.map((item, i) => {

                        const isActive = item.active ?
                            "group/edit shadow-lg transition-all ease-linear hover:shadow-md" :
                            "opacity-35";

                        return (
                            <a href={item.permalink} key={i}>
                                <button className={bannerTextStyle.button(isActive)} >
                                    {
                                        !item.active && (
                                            <span className={bannerTextStyle.buttonLabel()}>Em breve</span>
                                        )
                                    }

                                    <p className="font-medium">{item.label}</p>

                                    <div className={bannerTextStyle.buttonIcon()}>{item.icon}</div>
                                </button>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}