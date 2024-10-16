import React from 'react';
import { useState } from 'react';
import "../css/Formulaire.css";

function Formulaire() {
                const [data, setData] = useState({nom:"", email:"", telephone:"", sujet:"", message:""});
    const handleChange = (e) =>{
        const name = e.target.name;
            const value = e.target.value;
            setData({...data, [name]: value})
    }
    const handleSubmit = (e) =>{
                e.preventDefault()
            }
    return (
        <section className="formulaire">
            <div className="titleform">
                <h3>Me contacter</h3>
                <p>Pour me contacter en vue d'un entretien ou d'une future collaboration,
                    merci de remplir le formulaire de contact.
                </p>
                <hr />
            </div>
            <div className="box">
                <form className="contactform" method="post" onSubmit={handleSubmit}>
                
                    <h3>Formulaire de contact</h3>
                    <hr />
                    <input type="nom" required minLength="2" name="nom" id="" onChange={handleChange} value={data.nom} placeholder="Votre Nom" />
                    <input type="email" required name="email" id="" onChange={handleChange} value={data.email} placeholder="Votre adresse email" />
                    <input type="telephone" required name="telephone" id="" onChange={handleChange} value={data.telephone} placeholder="Votre numéro de téléphone" />
                    <input type="sujet" required name="sujet" id="" onChange={handleChange} value={data.sujet} placeholder="Sujet" />
                    <textarea name="message" required id="" cols="30" rows="10" onChange={handleChange} value={data.message} placeholder="Votre message" />
                    <div className="btnform">
                        <button type="submit">Envoyer</button>
              
                    </div>
                </form>
                <div className="contactinfo">
                    <h3>Mes coordonnées</h3>
                    <hr />
                    <address>
                        <div className="address1">
                            <img src="/img/iconlocalisation.png" alt="localisation" />
                            <a href="localisation">40 rue Laure Diebold, 69009 Lyon, France</a>
                        </div>
                        <div className="address2">
                            <img src="/img/icontel.png" alt="tel" />
                            <a href="tel:+0620304050">06 20 30 40 50</a>
                        </div>
                    </address>
                    <div className="contactmap">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657540543!2d4.796403975991707!3d45.77866571240251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1705835704525!5m2!1sfr!2sfr"
                            allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
        
    );
};

export default Formulaire;