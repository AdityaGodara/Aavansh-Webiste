import React from "react"

export default function Header(){
    return <header>
        <h1 className="nav-title">Aavansh<span className="title-dot">.</span></h1>
        <nav>
            <ul>
                <a href="/home" className="pageLinks"><li className="nav-item">Home</li></a>
                <a href="/content" className="pageLinks"><li className="nav-item">Content</li></a>
                <a href="/events" className="pageLinks"><li className="nav-item">Events</li></a>
            </ul>
        </nav>
    </header>
}