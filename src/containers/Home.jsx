import React from "react";
import { Socials } from "../utils/helper";
import { AnimatePresence, motion } from "framer-motion";
import HeroTypeWritter from "../components/HeroTypeWritter";
import HomeSocialLinks from "../components/HomeSocialLinks";
import { Hero, Hero2 } from "../assets";
import AnimatedTitle from "../components/AnimatedTitle";



const Home = () => {
    return (
    <section id="home" className="flex items-center justify-center flex-col gap-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          {/* Content section  */}
            <div
            className="w-full h-full flex flex-col items-center lg:items-start justify-center gap-0 lg:gap-4"
            >
                <AnimatedTitle title={"Bienvenido a"} classes={"text-3xl lg:text-4xl text-primary font-principalText text-center lg:text-start"} />
            
                <span className="block tracking-wider text-center lg:text-start text-4xl lg:text-5xl mt-2 text-primary font-principalText">
                {" "}
                NEXUS DEV STUDIO
                </span>

                {/* Typewritter  */}
                <h2 className="text-2xl md:text-4xl lg:text-4xl text-primary mt-2 font-principalText">
                    Expertos en {" "} <HeroTypeWritter words={["Analítica de Datos", "Machine Learning", "Deep Leaning", "AI APIs", "Business Intelligence"]} speed={100}/> 
                </h2>
                
                <p className="w-screen md:w-full text-lg p-8 font-principalText text-primary mt-2 text-center lg:p-0 lg:text-left">Conoce NEXUS, donde conectamos ideas para impulsar resultados. En un mundo cada vez más digital, la inteligencia artificial y la ciencia de datos son esenciales para mantenerse a la vanguardia. En NEXUS, te ayudamos a aprovechar el poder de estos campos para conseguir tus objetivos.</p>

                <div className="w-full h-full lg:hidden flex justify-center items-center">
                    <img src={Hero2} className="w-auto h-auto object-contain text-primary" />
                </div>


                {/* Social media links  */}
                <div className="flex items-center justify-center gap-8 lg:gap-16 mt-10">
                    <AnimatePresence>
                        {Socials && Socials.map((item, id) => (
                            <HomeSocialLinks key={id} data={ item} index={id }  />
                            ))}
                    </AnimatePresence>
                </div>
        </div>
          {/* Hero image  */}
        <div className="w-full h-full hidden lg:flex justify-center items-center ">
                <motion.img
                initial={{ y:0 }}
                animate={{ y:[-20, 20, -20] }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "linear"
                }}
                src={Hero}
                className="w-auto h-auto object-contain text-primary "

                />
            </div>
        </div>
    </section>
    )
};

export default Home;
