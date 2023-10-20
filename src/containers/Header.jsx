import React from "react";
import { Menus } from "../utils/helper";
import MenuItem from "../components/MenuItem";
const Header = () => {
    return (
        <div className="fixed bottom-10 right-0 lg:top-0 w-full h-auto lg:h-screen lg:w-32 flex justify-center items-end lg:items-center z-50 ">
            <div className="px-2 py-3 lg:py-12 rounded-full border border-[rgba(255,255,255,.5)] flex flex-row lg:flex-col items-center justify-center gap-6 duration-200 backdrop-blur-sm">
                {Menus && Menus.map((item, index) => (
                <MenuItem key={index} menu={item} index={index} />
                ))}

            </div>
        </div>
    );
};

export default Header;
