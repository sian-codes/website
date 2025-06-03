// @ts-ignore
import '../components/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from "@awesome.me/kit-459d1b3662/icons/classic/brands";
import {faEnvelope} from "@awesome.me/kit-459d1b3662/icons/classic/solid";


const Header = () => {
    return (
        <header className="header">
            <a href="https://github.com/sian-codes"><FontAwesomeIcon icon= {faGithub} size={"2xl"} className="icons" /></a>
            <a href="https://www.linkedin.com/in/si%C3%A2n-kearley-32151986/"><FontAwesomeIcon icon={faLinkedin} size={"2xl"} className="icons" /></a>
            {/*TODO add email contact*/}
            <FontAwesomeIcon icon={faEnvelope} size={"2xl"} className="icons" />
        </header>
    );
};

export default Header
