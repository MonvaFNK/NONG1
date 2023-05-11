'use client'
import './globals.css'
import './stylesheets'
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';

import ContactContext from './../context/ContactFormContext';
import React, { useState } from 'react';
import Contacto from './../components/contact/Contact';

export const metadata = {
  title: 'Agencia Hispana',
  description: 'Servicios legales de Agencia Hispana.',
}

export default function RootLayout({ children }) {
  const [showContact, setShowContact] = useState(false);

  return (
    <html lang="en">
      <body>
        <ContactContext.Provider value={{ showContact, setShowContact }}>
          {showContact && <Contacto />}

          <Header />
          {children}
          <Footer />
        </ContactContext.Provider>
      </body>
    </html>
  )
}
