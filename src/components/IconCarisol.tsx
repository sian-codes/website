import './icon-carisol.css';
import { faDocker, faAws, faBootstrap, faRaspberryPi, faCodepen, faConfluence, faSwift, faCss3, faHtml5, faJava, faJenkins, faNodeJs, faJs, faNpm, faPython, faReact, faReadme, faSass, faYarn} from "@awesome.me/kit-459d1b3662/icons/classic/brands";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const IconCarisol = () => {
    return (
        <div className="icon-container">
        <div className="icon-slide">
                <a href="https://docs.aws.amazon.com/"><FontAwesomeIcon icon={faAws} className="icons" /></a>
                <a href="https://docs.docker.com/"><FontAwesomeIcon icon={faDocker} className="icons" /></a>
                <a href="https://getbootstrap.com/docs/4.1/getting-started/introduction/"><FontAwesomeIcon icon={faBootstrap} className="icons" /></a>
                <a href="https://blog.codepen.io/documentation/"><FontAwesomeIcon icon={faCodepen} className="icons"/> </a>
                <a href="https://www.atlassian.com/software/confluence"><FontAwesomeIcon icon={faConfluence} className="icons" /></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><FontAwesomeIcon icon={faCss3} className="icons" /></a>
                <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"><FontAwesomeIcon icon={faHtml5} className="icons" /></a>
                <a href="https://docs.oracle.com/en/java/"><FontAwesomeIcon icon={faJava} className="icons" /></a>
                <a href="https://www.jenkins.io/doc/" ><FontAwesomeIcon icon={faJenkins} className="icons"/></a>
                <a href="https://nodejs.org/docs/latest/api/"><FontAwesomeIcon icon={faNodeJs} className="icons" /></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><FontAwesomeIcon icon={faJs} className="icons" /></a>
                <a href="https://docs.npmjs.com/"><FontAwesomeIcon icon={faNpm} className="icons" /></a>
                <a href="https://docs.python.org/3/"><FontAwesomeIcon icon={faPython} className="icons" /></a>
                <a href="https://react.dev/"><FontAwesomeIcon icon={faReact} className="icons" /></a>
                <a href="https://docs.readme.com/"><FontAwesomeIcon icon={faReadme} className="icons" href="https://docs.readme.com/" /></a>
                <a href="https://sass-lang.com/documentation/"><FontAwesomeIcon icon={faSass} className="icons" /></a>
                <a href="https://www.swift.org/documentation/"><FontAwesomeIcon icon={faSwift} className="icons" /></a>
                <a href="https://classic.yarnpkg.com/lang/en/docs/"><FontAwesomeIcon icon={faYarn} className="icons" /></a>
                <a href="https://www.raspberrypi.com/documentation/"><FontAwesomeIcon icon={faRaspberryPi} className="icons" /></a>
        </div>
        </div>
    )
}

export default IconCarisol
