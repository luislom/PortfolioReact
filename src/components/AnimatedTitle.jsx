import React, {useEffect} from "react";
import {useAnimation, motion } from "framer-motion";
import styled from "styled-components";

import { useInView } from 'react-intersection-observer';

const Title = styled.h2`
    font-size: 3rem;

`;

const Character = styled(motion.span)`
    display: inline-block;
    margin-right: -0.05em;
`;

const Word = styled(motion.span)`
    display: inline-block;
    margin-right: 0.25em;
    white-space: nowrap;
`;


const AnimatedTitle = ({title, classes})=> {
    const text = title; // This would normally be passed into this component as a prop!

    const ctrls = useAnimation();
    
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: false,
    });
    const wordAnimation = {
        hidden: {},
        visible: {},
    };
    
    useEffect(() => {
        if (inView) {
        ctrls.start("visible");
        }
        if (!inView) {
        ctrls.start("hidden");
        }
    }, [ctrls, inView]);
    
    const characterAnimation = {
        hidden: {
        opacity: 0,
        y: `0.25em`,
        },
        visible: {
        opacity: 1,
        y: `0em`,
        transition: {
            duration: 2,
            ease: [0.2, 0.65, 0.3, 0.9],
        },
        },
    };

    return(
        <Title aria-label={text} role="heading" >
                    {text.split(" ").map((word, index) => {
                    return (
                    <Word
                        ref={ref}
                        aria-hidden="true"
                        key={index}
                        initial="hidden"
                        animate={ctrls}
                        variants={wordAnimation}
                        transition={{
                            delayChildren: index * 0.25,
                            staggerChildren: 0.05,
                            }}
                                            >
                            {word.split("").map((character, index) => {
                            return (
                                <Character
                                aria-hidden="true"
                                key={index}
                                variants={characterAnimation}
                                className={classes}
                                >
                                {character}
                                </Character>
                            );
                            })}
                    </Word>
                        );
                    })}
                </Title>
    )

}

export default AnimatedTitle;