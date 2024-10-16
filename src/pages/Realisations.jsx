import React from 'react';
import "../css/Realisation.css";
import Card from "../components/Card";

function Realisations() {
    return (
        
        <section className="portfolio">
            <img src="/img/banner.jpg" alt=""></img>
            <h3>Portfolio</h3>
            <p>Voici quelques unes de mes réalisation</p>
            <hr />
            <div className="portfoliocard">
                <Card />
            </div>
        </section>
        
    );
};

export default Realisations;