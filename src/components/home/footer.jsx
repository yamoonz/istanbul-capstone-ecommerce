import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faGoogle,
    faGithub
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return <div>
        <hr />
        <footer>
            <a href="https://www.twitter.com/" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.gmail.com/" className="Gmail social">
                <FontAwesomeIcon icon={faGoogle} size="2x" /> </a>
            <a href="https://www.facebook.com/" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" /></a>
            <a href="https://www.github.com/" className="github social">
                <FontAwesomeIcon icon={faGithub} size="2x" /></a>

            <ul className='navBar'>
                Home
                Products
                Blog
                Conatct
      </ul>
        </footer>
    </div>
};

export default Footer;