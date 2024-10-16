import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import "../css/Mentions.css";

function Mentions() {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <h3>Mentions légales</h3>
                <Accordion.Header>Editeur du site</Accordion.Header>
                <Accordion.Body>
                    <address>
                        <h4>John Doe</h4>
                        <div className="address1">
                            <img src="img/iconlocalisation.png" alt="localisation" />
                            <a href="localisation">40 rue Laure Diebold <br /> 69009 Lyon, France</a>
                        </div>
                        <div className="address2">
                            <img src="img/icontel.png" alt="tel" />
                            <a href="tel:+0620304050">06 20 30 40 50</a>
                        </div>
                        <div className="address3">
                            <img src="img/iconmail.png" alt="mail" />
                            <a href="email">john.doe@gmail.com</a>
                        </div>
                    </address>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Hébergeur</Accordion.Header>
                <Accordion.Body>
                    <h4>Always Data</h4>
                    <p>91 rue du Faubourg Saint Honoré <br />75008 Paris</p>
                    <div className="hebergeur">
                        <img src="img/iconwww.png" alt="net" />
                        <a href="net">www.alwaysdata.com</a>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Crédits</Accordion.Header>
                <Accordion.Body>
                    <h4>Crédits</h4>
                    <p>Site développé par John Doe, étudiant du CEF</p>
                    <p>Les images libres de droit sont issues du site <a href="https://pixabay.com/fr/">Pixabay</a></p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}
export default Mentions