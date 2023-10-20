import React from "react";
// import {useAnimation, motion } from "framer-motion";
import bot from '../assets/img/nexusLogo.svg'
import './styles.css'
// import { useInView } from 'react-intersection-observer';
import AnimatedTitle from "../components/AnimatedTitle";



const About = () => {
    

    

    return (
    <section id="about" className="flex items-center justify-center flex-col gap-12 relative h-screen">
        <div className="grid justify-center items-center grid-cols-1 lg:grid-cols-2 gap-4 w-full">
            <div className="w-full h-full text-principal flex flex-col items-center justify-center gap-0 lg:gap-4 my-14">
                
                <div className="w-60 h-60 relative rounded-full flex justify-center items-center ">
                    <img className='w-10/12 rounded-full border-principal border-2 border-solid' src={bot} />

                    <span className='circle-spin'></span>
                </div>
                <AnimatedTitle title={"Conocenos"} classes={"text-4xl lg:text-5xl font-principalText text-center "} />


            </div>
            <div className="w-full h-fit flex justify-center items-center rounded-xl shadow-md  border-2 border-primary backdrop-blur-sm">
                <p className="text-xl w-screen md:w-full p-4 mb-10 text-primary mt-2 text-center lg:p-0">NEXUS es una consultoría en ciencia de datos y machine learning. Nuestro objetivo es ayudarte a desbloquear el potencial a través del poder de los datos. Con nuestra experiencia en el campo, estamos listos para ayudarte a tomar decisiones basadas en datos que impulsarán tu negocio o proyecto.</p>
            </div>
        </div>
    </section>
    )
};

export default About;