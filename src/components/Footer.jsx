import React from 'react';
import "../css/Footer.css";
import Social from "./Social";

function Footer() {
    return (
        <section className="footer">
            <div className="footerinfo">
                <h5>John Doe</h5>
                <p>40 Rue Laure Diebold</p>
           
                <p>69009 Lyon, France</p>
           
                <p>Téléphone: 06 20 30 40 50</p>
                <Social />
            </div>
            <div className="footerinfo">
                <h5>Liens utiles</h5>
                <li><a href="Accueil"><span className="fleche">{"> "}</span>Accueil</a></li>
                <li><a href="Accueil"><span className="fleche">{"> "}</span>A propos</a></li>
                <li><a href="Services"><span className="fleche">{"> "}</span>Services</a></li>
                <li><a href="Contact"><span className="fleche">{"> "}</span>Me contacter</a></li>
                <li><a href="Mentions"><span className="fleche">{"> "}</span>Mentions légales</a></li>
            </div>
            <div className="footerinfo">
                <h5>Mes dernières réalisations</h5>
                <li><a href="Realisations"><span className="fleche">{"> "}</span>Fresh food</a></li>
                <li><a href="Realisations"><span className="fleche">{"> "}</span>Restaurant Japonnais</a></li>
                <li><a href="Realisations"><span className="fleche">{"> "}</span>Espace bien-être</a></li>
            </div>
            <div className="footerinfo">
                <h5>Mes derniers articles</h5>
                <li><a href="Services"><span className="fleche">{"> "}</span>Coder son site en HTML/CSS</a></li>
                <li><a href="Services"><span className="fleche">{"> "}</span>Vendre ses produits sur le web</a></li>
                <li><a href="Services"><span className="fleche">{"> "}</span>Se positionner sur Google</a></li>
            </div>
            <div className="copyright">
                <p>© Designed by John Does</p>
            </div>
        </section>
    );
};

export default Footer;