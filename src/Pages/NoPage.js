import React from "react";
import Header from "../Components/Header"
import Footer from "../Components/Footer"

export default function Home(){
    return <>
        <Header />
        <div className="error-container">
            <center>
                <h1>Error 404: Page not found</h1>
                <small>Oops! Wrong stage, I guess.</small>
            </center>
        </div>
        <Footer />
    </>
}