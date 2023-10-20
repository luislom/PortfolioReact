import React, {useState} from "react";
import { AnimatePresence, motion } from "framer-motion";
// import './styles.scss'
import './styles2.css'
import {FaRegCircleXmark} from "react-icons/fa6"


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


const Projects = () => {

    const [selectedSquare, setSelectedSquare] = useState(null);
    const [content,setContent] = useState('')

    const renderSquares = () => {
        const squares = ['yellow', 'green', 'blue', 'violet'];
        const diccionario = {'yellow': 'Deep Learning'};
        const text = {
            'Analitica de Datos': 'yellow', 
            'Machine Lerarning':'blue', 
            'Business Intelegence':'violet',
            'NLP': 'green', 
            'AI APIs':'red'}
        const colors = {'Analitica de Datos': 'yellow', 'Machine Lerarning':'blue', 'Business Intelegence':'violet','NLP': 'green', 'AI APIs':'red'}
        return squares.map((color, i) => (
        <motion.div
            key={i}
            className={`square square--${color}  relative w-36 h-36 m-4 rounded-xl shadow-md transition-transform transform hover:-translate-y-3 cursor-pointer`}
            onClick={() => setSelectedSquare(color)}
            variants={squareVariants}
            transition={{ duration: 0.2, type: 'spring' }}
        >
            <p>{diccionario[color]}</p>
        </motion.div>
        ));
    };

    return (
        <section id="projects" className="flex items-center justify-center flex-col gap-5 relative h-screen">
            <div className={`cp-transition cp-transition__container cp-transition__container--${selectedSquare}`}>
                <AnimatePresence mode='wait' initial={false}>
                    {selectedSquare 
                    ? (
                        <motion.div 
                        className={`card card__wrapper card__wrapper--${selectedSquare}`}
                        key="card"
                        variants={wrapperVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        >
                        <div className="card__header">
                            <h2>Lorem ipsum</h2>
                            <button onClick={() => setSelectedSquare(null)}>
                                {/* <i className="fas fa-times fa-2x "/> */}
                                <FaRegCircleXmark/>
                            </button>
                        </div>
                        <div className="card__content">
                            <div className="card__img-placeholder" />
                            <div className="card__text-placeholder">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Impedit ea neque quidem exercitationem possimus.
                            </div>
                        </div>
                        </motion.div>
                    )
                    : (
                        <motion.div 
                        className="cp-transition__squares-wrapper"
                        key="squares"
                        variants={wrapperVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        >
                        {renderSquares()}
                        </motion.div>
                    )
                    }
                </AnimatePresence>
            </div>

        </section>
    )
}

export default Projects;