import {MenuServices} from "../utils/helper"
import React, {useState} from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedTitle from "../components/AnimatedTitle";
import './styles.css'
import {FaRegCircleXmark, FaCheck} from "react-icons/fa6"

const wrapperVariants = {
    initial: {
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
        transition: { duration: 0.4 },
    },
    animate: {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        transition: { duration: 0.4, staggerChildren: 0.1 },
    },
    exit: {
        clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
        transition: { duration: 0.4 },
    },
};

const squareVariants = {
    initial: {
        opacity: 0,
        scale: 0.3,
    },
    animate: {
        opacity: 1,
        scale: 1,
    },
};



const Services = () => {
    // const [selectedSquare, setSelectedSquare] = useState(null);
    const [service,setService] = useState(null)

    const renderSquares = () => {
        

        return MenuServices.map((item, i)=>(
            <motion.div
            key={i}
            className={`square flex flex-col justify-evenly items-center w-full h-fit md:w-1/3 md:h-5/6  m-4 rounded-xl shadow-md transition-transform transform hover:-translate-y-3 cursor-pointer border-4 border-principal backdrop-blur-sm`}
            onClick={() => setService(item)}
            variants={squareVariants}
            transition={{ duration: 0.2, type: 'spring' }}
            >
                <h2 className="text-center font-bold text-xl font-principalText text-primary">{item.title}</h2>
                <img className="md:w-1/2 md:h-1/2 w-1/3 h-1/3 " src={item.icon} alt={item.title} />
            </motion.div>

        ))
    }
    const renderServices = () => {
        return service.content.map((item, i) =>(
            <div key={i} className="flex flex-row m-5 gap-2 text-secondary">
                <FaCheck  />
                <h3 key={i} className="font-principalText text-xl text-primary"> {item.text}</h3>
            </div>
        ))
    }

    return (

        <section id="services" className="flex items-center justify-center flex-col relative h-screen mt-10 mb-20">
            {/* <div className={`flex flex-col items-center justify-center h-full gap-0`}> */}
        
                <AnimatePresence mode='wait' initial={false}>
                    {service 
                    ? (
                        <motion.div 
                        className={` md:w-5/6 md:h-5/6 h-fit w-fit flex flex-col p-5 gap-5 md:p-10 md:gap-20 font-principalText rounded-xl shadow-md transition-transform transform hover:-translate-y-3 cursor-pointer border-4 border-primary backdrop-blur-sm`}
                        key="card"
                        variants={wrapperVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        >
                            <div className=" w-full flex flex-row justify-between">
                                <h2 className="font-bold text-2xl md:text-4xl text-principal">{service.title}</h2>
                                <button className="w-2 h-2 text-2xl text-white hover:text-red-600" onClick={() => setService(null)}>
                                    <FaRegCircleXmark/>
                                </button>
                            </div>
                            <div className="flex flex-col-reverse md:flex-row gap-8 items-center justify-between">
                                <div className="h-44 w-44" >
                                    <img src={service.image} alt="" />
                                </div>
                                <div className="text-justify gap-5 card__text-placeholder ">
                                    {renderServices()}
                                </div>
                            </div>
                        </motion.div>
                    )
                    : (
                        <div className={`flex flex-col items-center justify-between gap-10 `} >
                            <AnimatedTitle title={"Servicios"} classes={"text-5xl text-primary font-principalText text-center "} />
                            <motion.div 
                            className=" w-full h-full flex justify-center items-center bg-transparent flex-col md:flex-row"
                            key="squares"
                            variants={wrapperVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            >
                            {renderSquares()}
                            </motion.div>
                        </div>
                    )
                    }
                </AnimatePresence>
            {/* </div> */}

        </section>










        // <div>
            // {MenuServices.map((item) => (
            //     <div className="card" key={item.title}>
            //         <div>
            //             <div className="card-top" >{}</div>
            //             <AnimatedTitle title={item.title} classes={"text-xl font-bold lg:text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r to-principal from-secondary font-principalText text-center lg:text-start"} />

            //             <div>Icon</div>
            //         </div>
            //         <div>
            //             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolores dignissimos, nemo temporibus esse accusantium eveniet, quibusdam officia ipsa sit qui molestias deleniti! Repellat dolores eius, consequatur ab tempore id!</p>
            //         </div>
            //     </div>
            //     ))}

            // </div>
    )
}

export default Services;