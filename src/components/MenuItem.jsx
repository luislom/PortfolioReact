import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MenuItem = ({menu, index}) => {

const [isHoverred, setIsHoverred] = useState(false);
return (

    <a href={menu.uri} className="w-12 rounded-full flex items-center justify-center text-darkcolor group cursor-pointer hover:bg-principal  relative" 
    onMouseEnter={() => setIsHoverred(true)}
    onMouseLeave={() => setIsHoverred(false)}
    
    >

        <menu.Icon className='text-primary group-hover:text-darkcolor text-xl'/>

      {/* tool tip  */}
        <AnimatePresence>
        {isHoverred &&(

            <motion.div 
            initial={{opacity: 0, x: -25}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -25}}
            className="hidden lg:block absolute bg-gradient-to-r bg-principal rounded-md px-6 py-2 -left-[140px] after:absolute after:right-1 after:top-3 after:w-3 after:h-3 after:bg-darkcolor after:rotate-45"
            style={{boxShadow: "inset 0px 0px 10px rbga(0,0,0,.4"}}
            >
                <p className="text-white" >{menu?.name}</p>
            </motion.div>
        )}
        </AnimatePresence>
    
    </a>
)
};

export default MenuItem;
