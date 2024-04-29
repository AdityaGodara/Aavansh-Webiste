import React from "react";
import "./style.css"
import Home from "./Pages/Home"
import Content from "./Pages/Content"
import NoPage from "./Pages/NoPage"
import Events from "./Pages/Events"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){
    return <>
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/content" element={<Content />}></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/event" element={<Events />}></Route>
            <Route path="*" element={<NoPage />}></Route>
        </Routes>
    </BrowserRouter>
    </>
}