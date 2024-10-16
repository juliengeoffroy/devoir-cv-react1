import "../css/Social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faTwitter,  
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

function Social () {
    return (
        <div className="social-container">

            <a href="https://api.github.com/users/github-john-doe" target="_blank" className="GitHub">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://twitter.com/johndoe_game?lang=fr" target="_blank" className="Twitter">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://uk.linkedin.com/company/john-doe" target="_blank" className="Linkedin">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
        </div>
    );
};

export default Social;