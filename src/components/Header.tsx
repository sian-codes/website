// @ts-ignore
import '../components/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from "@awesome.me/kit-459d1b3662/icons/classic/brands";
import Popup from "./Popup.tsx";
import {useState} from "react";
import {faEnvelope} from "@awesome.me/kit-459d1b3662/icons/classic/solid";


const Header = () => {
    const [contactPopup, setContactPopup] = useState(false)
    return (
        <header className="header">
            <a href="https://github.com/sian-codes"><FontAwesomeIcon icon= {faGithub} size={"2xl"} className="icons" /></a>
            <a href="https://www.linkedin.com/in/si%C3%A2n-kearley-32151986/"><FontAwesomeIcon icon={faLinkedin} size={"2xl"} className="icons" /></a>
            <FontAwesomeIcon icon={faEnvelope} size={"2xl"} className="icons" onClick={() => setContactPopup(true)} />
            <Popup  trigger={contactPopup} setTrigger ={setContactPopup} />
        </header>
    );
};

export default Header
