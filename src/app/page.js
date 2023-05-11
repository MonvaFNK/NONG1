'use client'
/* import FloatingButton from './../components/FloatingButton/FloatingButton'; */
import Image, { ImageProps } from 'next/image';
import AgenciaHispana from '../Images/AgenciaHispana.png';
import AgenciaHispanaSuit from '../Images/AgenciaHispana-MainPage-Suit.png'
import GalindoAvatar from '../Images/Galindo_avatar.png';

import React, { useContext } from 'react';
import ContactContext from '../context/ContactFormContext';


function Page() {
    const { showContact, setShowContact } = useContext(ContactContext);
    const handleShowContact = () => {
        setShowContact(true);
    };
    return (
        <main className='main'>
            <section>
                <div className="mainContainer h-screen overflow-hidden">
                    <div className='mainContainer__topBar'>
                    </div>

                    <div className='flex flex-row'>

                        <h1 className='flex flex-col w-2/5 h-100 px-5 py-20 font-bold mainContainer__title items-center'>
                            <span className=' text-slate-100'>Somos </span>
                            <span className=' mainContainer__title--text'>Agencia</span>
                            <span className=' mainContainer__title--text '>Hispana</span>
                        </h1>

                        <div className='flex flex-col w-3/5  py-2 justify-center items-center'>
                            <div className=' justify-self-center h-4/6 mainContainer__image'>
                                <Image className='h-auto max-w-full max-h-full' src={AgenciaHispana} alt="Agencia Hispana Logo" />
                            </div>
                            <p className='py-10 px-5 font-bold h-2/6 mainContainer__paragraph'>
                                Permítanos ayudarlo a navegar el sistema legal
                            </p>
                        </div>
                    </div>
                    {/* <FloatingButton /> Deshabilitado */}
                </div>
            </section>
            <div className='mainContainer__topBarSecondary'>
            </div>
            <section >
                <div className='mainContainer__textBox flex justify-center items-center flex-col pt-10'>
                    <h2 className="w-3/5 mainContainer__textBox--paragraphTitle flex flex-col w-2/5 h-100 font-bold px-5">
                        Con más de 35 años de experiencia, somos sus expertos de confianza en la preparación de documentos legales
                    </h2>
                    <p className='h-100  w-4/5 mainContainer__textBox--paragraph py-10'>
                        ¿Es usted un inmigrante que necesita ayuda para navegar el complejo sistema legal? ¡No busques más! Nuestro equipo de profesionales experimentados ha estado preparando documentos legales por más de 35 años. Entendemos los desafíos que conlleva navegar por el sistema legal, y estamos aquí para ayudar a que el proceso sea lo más simple y libre de estrés posible.
                    </p>
                </div>
            </section>
            <section>

                <div className='flex flex-row justify-evenly py-8 items-center'>
                    {/* MANUTENCION SVG */}
                    <div className='w-1/6 h-full flex flex-col items-center justify-center'>
                        <div className='w-full h-full flex flex-col items-center justify-center'>
                            <svg id="Capa_1" className='svg__Icons' data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 631.54 672.99">

                                <g>
                                    <path class="manutencion-2" d="m437.92,197.2V64.02s-11.84-46.35-46.35-46.35-44.9,44.9-44.9,44.9v134.63h91.25Z" />
                                    <path class="manutencion-2" d="m347.21,197.2V50.91S334.16,0,296.13,0s-49.49,49.32-49.49,49.32v147.88h100.57Z" />
                                    <path class="manutencion-2" d="m246.64,197.2v-112.64s-11.84-39.2-46.35-39.2-44.9,37.97-44.9,37.97v113.87h91.25,0Z" />
                                    <path class="manutencion-2" d="m155.93,197.2v-80.46s-9.54-28-37.33-28-36.16,27.12-36.16,27.12v81.33h73.49Z" />
                                </g>
                                <path class="manutencion-1" d="m507.04,506.88H84.83c-41.33,0-74.83-33.5-74.83-74.83v-165.86c0-41.33,33.5-74.83,74.83-74.83h422.21c41.33,0,74.83,33.5,74.83,74.83v165.86c0,41.33-33.5,74.83-74.83,74.83h0Z" />
                                <circle class="manutencion-2" cx="104.65" cy="360.95" r="23.66" />
                                <path class="manutencion-2" d="m508.91,360.95c-.14,30.95-47.19,30.94-47.33,0,.14-30.94,47.19-30.94,47.33,0h0Z" />
                                <path class="manutencion-2" d="m376.79,430.96c68.58-213.5-232.27-206.57-163.67,0h163.67Z" />
                                <path class="manutencion-2" d="m631.17,491.1l-100.57,41.41s-108.46,140.01-189.31,140.01c-138.41-5.62-238.33,38.55-256.46-165.65h303.13s53.91-68.81,193.91-68.81c57.19,7.69,49.3,53.04,49.3,53.04h0Z" />
                            </svg>
                        </div>
                        <p className='font-bold text-xl '>La manutencion de tus Hijos</p>
                    </div>

                    {/* MANUTENCION SVG */}

                    {/* DIVORCIOS SVG */}
                    <div className='w-1/6 h-full flex flex-col items-center justify-center'>
                        <div className=' w-full h-full flex flex-col items-center justify-center '>

                            <svg id="Capa_1" className='svg__Icons2' data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 998 597.08">

                                <path class="divorcios-1" d="m613.11,0c-57.68,0-101.72,11.5-147.42,39.97,17.49,10.88,33.8,23.51,48.63,37.67,32.69-16.53,59.73-20.9,98.79-20.9,133.33,0,241.79,108.46,241.79,241.79s-108.46,241.79-241.79,241.79c-39.06,0-63.63-1.9-96.32-18.43-14.83,14.16-31.14,26.79-48.63,37.67,45.69,28.47,87.27,37.5,144.95,37.5,164.61,0,298.54-133.92,298.54-298.54S777.72,0,613.11,0Zm-241.79,298.54c0-73.33,17.99-124.32,69.7-168.69-14.78-12.68-31.09-23.61-48.63-32.47-57.04,54.4-77.82,116.31-77.82,201.15s25.71,151.69,82.75,206.09c17.54-8.86,33.85-19.79,48.63-32.47-51.71-44.35-74.63-100.28-74.63-173.61Z" />
                                <path class="divorcios-1" d="m514.32,94.92c-17.54,8.86-33.85,19.79-48.63,32.47,51.71,44.36,74.63,97.83,74.63,171.15s-22.92,126.79-74.63,171.15c14.78,12.68,31.09,23.61,48.63,32.47,57.04-54.4,82.75-118.77,82.75-203.62s-25.71-149.22-82.75-203.62Zm-215.78,445.41c-133.33,0-241.79-108.46-241.79-241.79S165.21,56.75,298.54,56.75c39.06,0,75.97,9.3,108.66,25.83,14.83-14.16,31.14-26.79,48.63-37.67C410.14,16.44,356.23.01,298.54.01,133.92,0,0,133.93,0,298.54s133.92,298.54,298.54,298.54c57.68,0,111.59-16.43,157.29-44.9-17.49-10.88-33.8-23.51-48.63-37.67-32.7,16.52-69.61,25.82-108.66,25.82Z" />
                                <polygon class="divorcios-1" points="879.57 120.9 935.09 65.39 978.26 65.39 998 111.03 974.56 140.64 896.84 150.51 879.57 120.9" />
                            </svg>
                        </div>
                        <p className='font-bold text-xl'>Divorcios por publicacion</p>
                    </div>

                    {/* DIVORCIOS SVG */}

                    {/* CUSTODIA SVG */}
                    <div className='w-1/6 h-full flex flex-col items-center justify-center'>
                        <div className='w-full h-full flex flex-col items-center justify-center '>
                            <svg id="Capa_1" className='svg__Icons' data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 608.22 617.3">
                                <path class="personas-1" d="m196.61,281.42h-14.21C81.66,281.42,0,363.08,0,463.82v151.22h288.23s-11.35-154.33,88.51-189.8c-.01-87.09-79.4-143.82-180.13-143.82" />
                                <path class="personas-1" d="m608.22,617.3v-60.14c0-59.54-48.26-107.8-107.8-107.8h-54.47c-59.54,0-107.8,48.26-107.8,107.8v60.14h270.07Z" />
                                <circle class="personas-1" cx="203.12" cy="116.88" r="116.88" />
                                <circle class="personas-1" cx="469.78" cy="315.46" r="86.24" />
                            </svg>
                        </div>
                        <p className='font-bold text-xl'>Obten la custodia</p>
                    </div>

                    {/* CUSTODIA SVG */}
                </div>
            </section>
            <section>
                <div className=' w-screen h-screen max-w-full max-h-full'>
                    <Image className=' h-full w-full max-w-full max-h-full' src={AgenciaHispanaSuit} alt="Agencia Hispana Logo"></Image>
                </div>
                <div className='mainContainer__topBarSecondary'>
                </div>
            </section>
            <section>
                <div className='flex flex-row justify-center items-center'>
                    <div className='galindoAvatarContainer h-max py-8 px-8 w-2/4  flex justify-center items-center'>
                        <Image
                            height={1906}
                            width={5147}
                            className='galindoAvatar'
                            src={GalindoAvatar}
                            alt="Galindo Personaje"
                        />
                    </div>
                    <div className='w-2/4 flex justify-center items-center'>
                        <button onClick={handleShowContact} id='contactButton' class="bg-blue-500 hover:bg-blue-600  font-bold py-2 px-4 rounded-lg mainContainer__button">
                            Programa una meeting con nosotros
                        </button>
                    </div>
                </div>
            </section>

        </main>
    );
}
export default Page;