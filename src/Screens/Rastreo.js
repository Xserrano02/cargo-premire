import React from "react";
import NavBar from "../Components/NavBar";

export default function Rastreo() {
    return (
        <div >
            <NavBar/>
            <header className="App-header">
                <iframe
                    src="http://cargopremier.managercargo.com/public/status/indexstatus/indexstatusacc/wi/si"
                    title="Rastreo Cargo Premier"
                    width="100%"
                    height="900px"
                    style={{ border: 'none' }}
                />
            </header>

        </div>
    )
}

