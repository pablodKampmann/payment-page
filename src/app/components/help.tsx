'use client'

import { MdContactSupport } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { AiFillCheckCircle } from "react-icons/ai";
import React, { useState, useEffect } from 'react';

export function Help() {
    const [openChat, setOpenChat] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sendMessagge, setSendMessagge] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    function OpenSupportChat() {
        setOpenChat(!openChat);
    }

    useEffect(() => {
        setSendMessagge(false);
        setShowSuccess(false);
    }, [openChat]);

    function HandleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setSendMessagge(true);
        setTimeout(() => {
            setShowSuccess(true);
        }, 200);
        setEmail('');
        setMessage('');
    }

    return (
        <div>
            <div className="fixed bottom-0 right-0 mr-4 mb-9">
                {openChat && (
                    <form onSubmit={HandleSubmit} className="mb-6 rounded-lg p-4 bg-gray-900 bg-opacity-95 h-90 w-62" style={{ width: '250px', height: '370px' }}>
                        {showSuccess ? (
                            <div className='animate-move-right-from-left flex flex-col items-center mt-10 mb-10'>
                                <p className="text-green-600 font-bold text-xl mb-4 text-center	">Tu consulta se ha enviado con exito.</p>
                                <AiFillCheckCircle size={70} className="text-green-600" />
                                <p className="mt-4 text-center">Dentro de las proximas 24 horas, recibiras una respuesta por correo electronico.</p>
                            </div>
                        ) : (
                            <div>
                                <div className={`${sendMessagge ? 'animate-move-right' : ''} mb-4`}>
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
                                        style={{ fontFamily: 'arial' }}
                                        required
                                    />
                                </div>
                                <div className={`${sendMessagge ? 'animate-move-right' : ''} mb-4 w-56`}>
                                    <label htmlFor="message" className="block mb-2 text-white">
                                        Mensaje:
                                    </label>
                                    <textarea
                                        name="message"
                                        className="border rounded w-full p-2 text-black h-36"
                                        placeholder="Escribi tu consulta"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                        style={{ fontFamily: 'arial' }}
                                    ></textarea>
                                </div>
                                <div className={`${sendMessagge ? 'animate-move-right-button' : ''} flex justify-center`}>
                                    <button type="submit" className="bg-white text-black text-md font-bold px-4 py-2 rounded hover:bg-gray-300">
                                        Enviar Consulta
                                    </button>
                                </div>
                            </div>
                        )}

                    </form>
                )}
            </div>
            <button className={` ${openChat ? 'animate-rotate-180' : 'animate-rotate-360-invert'} fixed bottom-0 right-0 mr-3 mb-2 dark:bg-gray-900 dark:hover:bg-gray-600 rounded-full w-12 h-12 flex items-center justify-center`} onClick={OpenSupportChat}>
                {openChat ? (
                    <RxCross1 size={30} />
                ) : (
                    <MdContactSupport size={40} />
                )}
            </button>
        </div >
    );
}
