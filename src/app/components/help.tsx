'use client'

import { MdContactSupport } from "react-icons/md";
import React, { useState, useEffect } from 'react';

export function Help() {
    const [openChat, setOpenChat] = useState(false);

    function OpenSupportChat() {
        setOpenChat(!openChat);
    }

    return (
        <div className="fixed bottom-0 right-0 mr-4 mb-4">
            {openChat && (
                <div className="mb-6">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 text-gray-600">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"

                                className="border rounded w-full p-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block mb-2 text-gray-600">
                                Mensaje:
                            </label>
                            <textarea
                                id="message"

                                className="border rounded w-full p-2"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            )}
            <button className="dark:bg-gray-900 dark:hover:bg-gray-600 rounded-full w-12 h-12 flex items-center justify-center" onClick={OpenSupportChat}>
                <MdContactSupport size={40} />
            </button>
        </div>
    );
}
