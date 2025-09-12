import User from "../src/assets/iconUser";
import { useAnimation } from "motion/react";
import { useState } from "react";
import { motion} from "framer-motion";

const CardClient: React.FC = () => {
    const [iconColor, setIconColor] = useState("#3B3B3B");
    const controls = useAnimation();
    const infoControls = useAnimation();
    const titleControls = useAnimation();

    const infoVariables = {
        "hidden": {y: -20, opacity: 0, transition:{ease: "linear", duration: 0.2}},
        "visible": {y: 0, opacity: 1, transition:{delay:0.1, ease: "linear", duration: 0.2}},
        "title": {y: -10, opacity: 1, transition:{ease: "linear", duration: 0.2}}
    }

    const titleVariables = {
        "up": {y: -20, opacity: 1, transition:{ease: "linear", duration: 0.2}},
        "down": {y: 0, opacity: 1, transition:{delay:0.1, ease: "linear", duration: 0.2}}
    }

    return (
        <div 
        onMouseEnter={() => {
            controls.start("animate")
            infoControls.start("visible")
            titleControls.start("up")
            setIconColor("var(--app-color)");
        }}
        onMouseLeave={() => {
            controls.start("normal")
            infoControls.start("hidden")
            titleControls.start("down")
            setIconColor("var(--primary-text)");
        }}
        className="w-full h-35 bg-[var(--background-color)] rounded-2xl
        hover:filter hover:brightness-90 transition-all duration-200
        flex items-center p-3 px-8 group
        ">
            <div className="flex flex-row items-center gap-3">
                <User controls={controls} stroke={iconColor} />
                <div className="flex flex-col gap-2">
                    <motion.h1
                    initial="visible"
                    animate={titleControls}
                    variants={titleVariables}
                    className="text-xl font-bold translate-y-6">Rafaele Dias Campelo</motion.h1>
                    <motion.div
                    initial="hidden"
                    animate={infoControls}
                    variants={infoVariables}
                    className="flex flex-col gap-0">
                        <h1 className="text-sm font-bold text-[var(--secondary-text)]">CPF: 047.598.782-97</h1>
                        <h1 className="text-sm font-bold text-[var(--secondary-text)]">Senha: 123456</h1>
                    </motion.div>

                </div>
                
            </div>
        </div>
    )
}

export default CardClient;