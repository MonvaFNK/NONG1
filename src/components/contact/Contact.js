'use client'
import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import ContactContext from '../../context/ContactFormContext';
import CalendlyWidget from './../CalendlyWidget/CalendlyWidget';

function Contacto() {
    const { showContact, setShowContact } = useContext(ContactContext);
    const handleHideContact = () => {
        setShowContact(false);
    };
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        mode: "onTouched",
    })
    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState(false);
    const apiKey = process.env.PUBLIC_ACCESS_KEY || "3eab9f0c-f281-46ec-bb16-f5312a5a9af9";

    const { submit: onSubmit } = useWeb3Forms({
        access_key: apiKey,
        settings: {
            from_name: "Agencia Hispana",
            subject: "Programar meeting de Agencia Hispana",
        },
        onSuccess: (msg, data) => {
            setIsSuccess(true);
            setMessage(msg);
            reset();
        },
        onError: (msg, data) => {
            setIsSuccess(false);
            setMessage(msg);
        },
    });

    return (
        <div id="contactForm" className="flex-row justify-center items-center contact__container">
                <button onClick={handleHideContact} type="button" className="buttonClose bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
{/*             <form className="form shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
                <label>Name: </label>
                <input

                    type="text"
                    placeholder="Nombre Completo"
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-4 focus:shadow-outline ${errors.message
                        ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                        : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                        }`
                    }
                    {...register('Nombre',
                        {
                            required: 'Este campo es obligatorio',
                            maxLength: 80,
                        })} />
                {errors.name && (
                    <div className="mt-1 text-red-600">
                        <span>{errors.name.message}</span>
                    </div>
                )}
                <label>Email:</label>
                <input
                    type="email"
                    placeholder='Email'
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-4 focus:shadow-outline${errors.message
                        ? "border-red-600 focus:border-red-600 ring-red-100 ring-0"
                        : "border-gray-300 focus:border-gray-600 ring-gray-100 ring-0"
                        }`
                    }
                    {...register('Email',
                        {
                            required: 'Este campo es obligatorio',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Please enter a valid email",
                            }
                        })} />
                {errors.email && (
                    <div className="mt-1 text-red-600">
                        <span>{errors.email.message}</span>
                    </div>
                )}
                <label>Message:</label>
                <textarea
                    className="resize-none w-9/12 h-24 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-4 focus:shadow-outline"
                    type='text'
                    placeholder="Ingresar descripcion de su problema"
                    {...register('Mensaje',
                        {
                            required: 'Este campo es obligatorio',
                            maxLength: 155,
                        })}></textarea>
                <label for="meeting">Time:</label>
                <input
                    id="meeting-date"
                    type="datetime-local"
                    name="meeting-date"
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-4 focus:shadow-outline${errors.message
                        ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                        : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                        }`
                    }
                    {...register('Fecha y hora',
                        {
                            required: 'Este campo es obligatorio',
                            maxLength: 80,
                        })} />
                <button
                    type='submit'
                    className="contact__submit bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Siguiente
                </button>

                {isSuccess &&
                    <div className="mt-3 text-sm text-center text-green-500 font-bold">
                        {message || "Success. Message sent successfully"}
                    </div>
                }
            </form> */}
            <CalendlyWidget />
        </div>
    );
}
export default Contacto;