import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const HomeSocialLinks = ({data, index}) => {
    const [isHoverred, setIsHoverred] = useState(false);
    return (
        <motion.a key={index} 
        href={data.uril}
        initial={{opacity: 0, y:25}}
        animate={{opacity: 1, y:0}}
        exit={{opacity: 0, y:25}}
        transition={{
        delay:index * .3
    }}
        className="w-12 h-12 border-2 border-principal rounded-full bg-gradient-to-br bg-transparent relative p-[2px] cursor-pointer"
        onMouseEnter={() =>setIsHoverred(true)}
        onMouseLeave={() =>setIsHoverred(false)}
        >
        <AnimatePresence>
                {isHoverred && (
                <motion.div className="absolute inset-1 blur-md bg-gradient-to-br bg-primary z-10" >
                </motion.div>
            )}
            
            <div className="w-full h-full rounded-full flex items-center justify-center">
                <data.Icon className={`text-primary`} />
            </div>
    
        </AnimatePresence>
    </motion.a>
    )
};

export default HomeSocialLinks;