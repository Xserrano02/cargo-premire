import React from "react";
import NavBar from "../Components/NavBar";

export default function Rastreo() {
    return (
        <div >
            <NavBar/>
            <header className="App-header">
                <iframe
                    src="https://cbone.controlbox.net/CargoPremier/cbone/app/index.asp?err=cbone.controlbox.net"
                    title="Rastreo Cargo Premier"
                    width="100%"
                    height="900px"
                    style={{ border: 'none' }}
                />
            </header>

        </div>
    )
}