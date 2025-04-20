import React from "react";
import NavBar from "../Components/NavBar";

export default function Cotizar() {
    return (
        <div >
            <NavBar/>
            <header className="App-header">
                <iframe
                    src="https://cargopremier.managercargo.com/public/web/webindex/webcalculador/wi/1"
                    title="Rastreo Cargo Premier"
                    width="100%"
                    height="900px"
                    style={{ border: 'none' }}
                />
            </header>

        </div>
    )
}
