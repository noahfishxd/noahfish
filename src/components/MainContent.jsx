import "../CSS/MainContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faReact,
  faJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="center-content">
        <div className="main-content-icons">
          <a className="icon-container" href="https://www.python.org/">
            <FontAwesomeIcon icon={faPython} className="icon-white" size="lg" />
          </a>
          <a className="icon-container" href="https://react.dev/">
            <FontAwesomeIcon icon={faReact} className="icon-white" size="lg" />
          </a>
          <a className="icon-container" href="https://www.javascript.com/">
            <FontAwesomeIcon icon={faJs} className="icon-white" size="lg" />
          </a>
          <a
            className="icon-container"
            href="https://en.wikipedia.org/wiki/CSS"
          >
            <FontAwesomeIcon icon={faCss3} className="icon-white" size="lg" />
          </a>
          <a
            className="icon-container"
            href="https://en.wikipedia.org/wiki/HTML"
          >
            <FontAwesomeIcon icon={faHtml5} className="icon-white" size="lg" />
          </a>
        </div>
      </div>
      <div className="center-content-words">
        <div className="main-content-h1">
          <h1>Hello World,</h1>
        </div>
        <div className="main-content-p">
          <p>
            My name is Noah; I'm a Bay Area student focused on full-stack
            development, constantly working to improve my skills every day.
          </p>
          <p>
            If you require a website or are interested in contracting work,
            please don't hesitate to reach out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
