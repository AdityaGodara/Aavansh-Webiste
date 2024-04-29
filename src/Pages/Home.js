import React from "react";
import Carousel from "../Components/Carousel"
import About from "../Components/About"
import CoreTeam from "../Components/CoreTeam"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

export default function Home(){
    return <>
        <Header />
        <Carousel />
        <About />
        <CoreTeam />
        <Footer />
    </>
}