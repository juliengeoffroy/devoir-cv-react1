import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "../css/Card.css";

function GroupExample() {
    return (
        <CardGroup className="cardgroup">
            <Card>
                <Card.Img id="imgcard" variant="top" src="/img/portfolio/fresh-food.jpg" />
                <Card.Body>
                    <h5>Fresh food</h5>
                    <Card.Text className='card1'>
                        Réalisation d'un site avec commande en ligne.
                    </Card.Text>
                    <div className="btnportfolio">
                        <button>Voir</button>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Site réalisé avec PHP et MySQL</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img id="imgcard" variant="top" src="/img/portfolio/restaurant-akira.jpg" />
                <Card.Body>
                    <h5>Restaurant Akira</h5>
                    <Card.Text className='card2'>
                        Réalisation d'un site vitrine.
                    </Card.Text>
                    <div className="btnportfolio">
                        <button>Voir</button>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Site réaliser avec WordPress</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img id="imgcard" variant="top" src="/img/portfolio/espace-bien-etre.jpg" />
                <Card.Body>
                    <h5>Espace Bien-être</h5>
                    <Card.Text className='card3'>
                        Réalisation d'un site vitrine pour un praticien de bien-être.
                    </Card.Text>
                    <div className="btnportfolio">
                        <button>Voir</button>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Site réalisé en HTML/CSS</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
}

export default GroupExample;