import ProgressBar from 'react-bootstrap/ProgressBar';
import "../css/Progressbar.css";

function ContextualExample() {
    return (
        <div className="progressbar">
        <p>html5 90%</p>
        <ProgressBar variant="danger" now={90} />
        <p>css3 80%</p>
        <ProgressBar variant="info" now={80} />
        <p>javascript 70%</p>
        <ProgressBar variant="warning" now={70} />
        <p>php 60%</p>
        <ProgressBar variant="success" now={60} />
        <p>react 50%</p>
        <ProgressBar variant="react" now={50} />     
    </div>
    );
}

export default ContextualExample;