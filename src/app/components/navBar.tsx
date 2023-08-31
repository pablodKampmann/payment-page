'use client'

import { BiCategoryAlt } from "react-icons/bi";
import { SiDigikeyelectronics } from "react-icons/si";
import { FaShoppingBag } from "react-icons/fa";
import { IoHome, IoHeadsetSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { BsFillPhoneFill } from "react-icons/bs";
import React, { useState, useEffect } from 'react';

export function NavBar() {
    const [openCategories, setOpenCategories] = useState(false);
    const [animationFinished, setAnimationFinished] = useState(false);

    useEffect(() => {
        const animationTimeout = setTimeout(() => {
            setAnimationFinished(true);
        }, 200);

        return () => clearTimeout(animationTimeout);
    }, [openCategories]);

    function HandleCategories() {
        setOpenCategories(!openCategories);
        setAnimationFinished(false);
    }

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 animate-slide-down">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 animate-slide-down">
                <button className={`flex items-center ${openCategories ? 'animate-rotate-180' : ''}`} onClick={HandleCategories}>
                    {animationFinished && openCategories ? (
                        <RxCross1 size={30} className="text-xl" />
                    ) : (
                        <BiCategoryAlt size={30} className="text-xl" />
                    )}
                </button>
                <button className="flex items-center">
                    <SiDigikeyelectronics size={40} className="text-xl mx-4" />
                </button>
                <button className="flex items-center">
                    <FaShoppingBag size={30} className="text-xl ml-2" />
                </button>
            </div>

            {openCategories ? (
                <div className="h-full flex flex-col justify-between animate-slide-down h-32">
                    <hr className="border-t-2 border-white my-4 ml-64 mr-64" />
                    <button className="flex items-center mb-4">
                        <IoHome size={20} className="ml-32 text-xl ml-2" />
                        <span className="ml-4 text-lg">Inicio</span>
                    </button>
                    <button className="flex items-center mb-4">
                        <BsFillPhoneFill size={20} className="ml-32 text-xl ml-2 text-lg">Celulares</BsFillPhoneFill>
                    </button>
                    <button className="flex items-center mb-4">
                        <IoHeadsetSharp size={20} className="ml-32 text-xl ml-2" />
                        <span className="ml-4 text-lg">Accesorios</span>
                    </button>
                </div>

            ) : (
                null
            )}
        </nav>
    );
}
