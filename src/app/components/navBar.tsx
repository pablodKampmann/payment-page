'use client'

import { BiCategoryAlt, BiArrowFromLeft, BiArrowFromTop } from "react-icons/bi";
import { SiDigikeyelectronics } from "react-icons/si";
import { FaShoppingBag } from "react-icons/fa";
import { IoHome, IoHeadsetSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { BsFillPhoneFill } from "react-icons/bs";
import { RiSeparator } from "react-icons/ri";
import React, { useState, useEffect } from 'react';

export function NavBar() {
    const [openCategories, setOpenCategories] = useState(false);
    const [animationFinished, setAnimationFinished] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubCategory, setSelectedSubCategory] = useState('');

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

    useEffect(() => {
        setSelectedSubCategory('')
    }, [selectedCategory]);

    function HandleSelectCategories(category: string) {
        setSelectedCategory(category);
    }

    function HandleSelectSubCategories(subCategory: string) {
        setSelectedSubCategory(subCategory);
    }

    return (
        <nav className=" border-gray-200 dark:bg-gray-900 animate-slide-down">
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

            {openCategories && (
                <div className="h-full flex flex-col justify-between animate-slide-down h-32">
                    <hr className="border-t-2 border-white lg:my-4 lg:ml-64 lg:mr-64 ml-4 mr-4 mb-4 mt-4" />
                    <div>
                        <button className="flex items-center mb-4 transition-transform transform hover:scale-110" onClick={() => HandleSelectCategories('home')} >
                            <IoHome size={20} className={`ml-4 lg:ml-64 ${selectedCategory === 'home' ? 'text-gray-500' : ''}`} />
                            <span className={`ml-4 text-lg ${selectedCategory === 'home' ? 'text-gray-500' : ''}`}>Inicio</span>
                        </button>

                        <button className={`flex items-center mb-4 ${selectedCategory === 'cellphone' ? '' : 'transition-transform transform hover:scale-110'}`} onClick={() => HandleSelectCategories('cellphone')} >
                            <BsFillPhoneFill size={20} className={`ml-4 lg:ml-64 ${selectedCategory === 'cellphone' ? 'text-gray-500' : ''}`} />
                            <span className={`ml-4 text-lg ${selectedCategory === 'cellphone' ? 'text-gray-500' : ''}`}>Celulares</span>
                            {selectedCategory === 'cellphone' && (
                                <div className="flex items-center">
                                    <BiArrowFromLeft size={20} className="ml-4 text-gray-500 hidden lg:block" />
                                    <button className={`ml-4 text-lg transition-transform transform hover:scale-110 ${selectedSubCategory === 'iphone' ? 'text-gray-500' : ''}`} onClick={() => HandleSelectSubCategories('iphone')}>
                                        Iphone
                                    </button>
                                    <RiSeparator size={30} className="ml-4 hidden lg:block" style={{ transform: 'rotate(130deg)' }} />
                                    <button className={`ml-4 text-lg transition-transform transform hover:scale-110 ${selectedSubCategory === 'samnsung' ? 'text-gray-500' : ''}`} onClick={() => HandleSelectSubCategories('samnsung')}>
                                        Samnsung
                                    </button>
                                </div>
                            )}
                        </button>

                        <button className={`flex items-center mb-4 ${selectedCategory === 'accessories' ? '' : 'transition-transform transform hover:scale-110'}`} onClick={() => HandleSelectCategories('accessories')}>
                            <IoHeadsetSharp size={20} className={`ml-4 lg:ml-64 ${selectedCategory === 'accessories' ? 'text-gray-500' : ''}`} />
                            <span className={`ml-4 text-lg ${selectedCategory === 'accessories' ? 'text-gray-500' : ''}`}>Accessorios</span>
                            {selectedCategory === 'accessories' && (
                                <div className="flex items-center">
                                    <BiArrowFromLeft size={20} className="ml-4 text-gray-500 hidden lg:block" />
                                    <BiArrowFromTop size={20} className="ml-4 text-gray-500 lg:hidden" />
                                    <button className={`transition-transform transform hover:scale-110 text-lg w-full ${selectedSubCategory === 'iphone' ? 'text-gray-500' : ''}`} onClick={() => HandleSelectSubCategories('iphone')}>
                                        Auriculares
                                    </button>
                                    <RiSeparator size={30} className="text-xl ml-4 hidden lg:block" style={{ transform: 'rotate(130deg)' }} />
                                    <button className={`ml-4 text-lg transition-transform transform hover:scale-110 w-full ${selectedSubCategory === 'samnsung' ? 'text-gray-500' : ''}`} onClick={() => HandleSelectSubCategories('samnsung')}>
                                        Cargadores
                                    </button>
                                </div>
                            )}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
