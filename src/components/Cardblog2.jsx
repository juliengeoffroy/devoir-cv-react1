import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "../css/Cardblog.css";

function Cardblog2 () {
    return (
        <CardGroup>
            <Card>
                <Card.Img id="imgcard" variant="top" src="/img/blog/screens.jpg" />
                <Card.Body>
                    <h5>Coder en responsive design</h5>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                    <div className="btn">
                        <button>Lire la suite</button>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Publié le 31 juillet 2022</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img id="imgcard" variant="top" src="/img/blog/seo.jpg" />
                <Card.Body>
                    <h5>Technique de référencement</h5>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                    <div className="btn">
                        <button>Lire la suite</button>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Publié le 30 juillet 2022</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img id="imgcard" variant="top" src="/img/blog/technos.png" />
                <Card.Body>
                    <h5>Apprendre à coder</h5>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                    <div className="btn">
                        <button>Lire la suite</button>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Publié le 12 juillet 2022</small>
                </Card.Footer>
            </Card>
      
        </CardGroup>
    );
};

export default Cardblog2;        