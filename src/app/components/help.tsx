'use client'

import { MdContactSupport } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import React, { useState, useEffect } from 'react';

export function Help() {
    const [openChat, setOpenChat] = useState(false);
    const [animationFinished, setAnimationFinished] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sendMessagge, setSendMessagge] = useState(false);

    useEffect(() => {
        const animationTimeout = setTimeout(() => {
            setAnimationFinished(true);
        }, 200);

        return () => clearTimeout(animationTimeout);
    }, [openChat]);

    function OpenSupportChat() {
        setOpenChat(!openChat);
        setAnimationFinished(false);
    }

    function HandleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault(); 
        
    }

    return (
        <div>
            <div className="fixed bottom-0 right-0 mr-4 mb-9">
                {openChat && (
                    <form onSubmit={HandleSubmit} className="mb-6 rounded-lg p-4 bg-gray-900 bg-opacity-95">
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 text-white">
                                Email:
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="border rounded w-full p-2 text-black"
                                placeholder="Tu correo electronico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block mb-2 text-white">
                                Mensaje:
                            </label>
                            <textarea
                                name="message"
                                className="border rounded w-full p-2 text-black"
                                placeholder="Escribi tu consulta"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="bg-white text-black text-md font-bold px-4 py-2 rounded hover:bg-gray-300">
                                Enviar
                            </button>
                        </div>
                    </form>
                )}
            </div>
            <button className={` ${openChat ? 'animate-rotate-180' : ''} fixed bottom-0 right-0 mr-3 mb-2 dark:bg-gray-900 dark:hover:bg-gray-600 rounded-full w-12 h-12 flex items-center justify-center`} onClick={OpenSupportChat}>
                {animationFinished && openChat ? (
                    <RxCross1 size={30} />
                ) : (
                    <MdContactSupport size={40} />
                )}
            </button>
        </div>
    );
}
