import Footer from './FooterComponent'
import Head from 'next/head'
import Navbar from './NavbarComponent'
import React from 'react'

const Layouts = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Hijrah Komputer Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layouts
