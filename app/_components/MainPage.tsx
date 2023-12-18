"use client"
import React, { useState } from 'react'
import Drawer from './DrawerComponent'
import Image from 'next/image'
import Hero from './Hero'
import About from './About'
import Award from './Award'
import ProductService from './ProductService'
import Footer from './Footer'

export const MainPage = () => {
    const [nav, setNav] = useState(true);

    return (
        <>
            <Hero />
            <About />
            <Award />
            <ProductService />
            <Footer />
        </>
    )
}
