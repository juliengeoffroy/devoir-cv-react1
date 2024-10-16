import { Link } from "react-router-dom";
import "../css/Accueil.css";
import Progressbar from "../components/Progressbar";

function Accueil() {
    return (
        
        <main>
            <section className="presentation">
                <h1>Bonjour, je suis John Doe</h1>
                <h2>Développeur web full stack</h2>
       
                <Link className="btn" to="">
                    <button to="#">En savoir plus</button>
                </Link>
            </section>
            <section className="about">
                <article className="apropos">
                    <h3>A propos</h3>
                    <hr />
                    <p>Passionné par l'informatique et les nouvelles technologies,
                        j'ai suivi une formation <strong>d'intégrateur-développeur web </strong>au CEF.
                        Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler
                        dans le domaine du <strong>développement web.</strong>
                        <br />
                        Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale
                        pour consolider ma formation de <strong>développeur web full stack.</strong>
                        <br />
                        J'accorde une attention particulière à la qualité du code que j'écris et je
                        respecte les bonnes pratiques du web.
                    </p>
                </article>
                <img src="/img/john-doe-about.jpg" alt="profil"></img>
            </section>
            <section className='progressbar'>
                <h3>Mes Compétences</h3>
                <Progressbar />
            </section>
    
        </main>
        
    );
};
export default Accueil