'use client'

import { BiCategoryAlt } from "react-icons/bi";
import { SiDigikeyelectronics } from "react-icons/si";
import { FaShoppingBag } from "react-icons/fa";
import React, { useState } from 'react';

export function NavBar() {
    const [openCategories, setOpenCategories] = useState(false);

    function HandleCategories() {
        if (openCategories === false) {
            setOpenCategories(true);
        } else if (openCategories === true) {
            setOpenCategories(false);
        }
    }

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <button className="flex items-center" onClick={HandleCategories}>
                    <BiCategoryAlt size={30} className="text-xl mr-2" />
                </button>
                <button className="flex items-center">
                    <SiDigikeyelectronics size={40} className="text-xl mx-4" />
                </button>
                <button className="flex items-center">
                    <FaShoppingBag size={30} className="text-xl ml-2" />
                </button>
            </div>

            {openCategories ? (
                <div className="h-full flex flex-col justify-between animate-slide-down">
                    <div className="animate-slide-down">
                        <button className="flex items-center mb-4">
                            <li>1</li>
                        </button>
                        <button className="flex items-center mb-4">
                            <li>2</li>
                        </button>
                        <button className="flex items-center">
                            <li>3</li>
                        </button>
                    </div>
                </div>
            ) : (
                null
            )}
        </nav>
    );
}
