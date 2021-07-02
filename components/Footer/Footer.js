import SocialLinks from '../SocialLinks/SocialLinks'
import {FooterContainer,Copyright,FooterLinksContainer} from './footerStyle'

const Footer = () => {
    return (
        <FooterContainer>
            <p>FOLLOW STAR WARS</p>
            <SocialLinks/>
            <Copyright>TM & © Ugurcan Ltd. All Rights Reserved</Copyright>
            <FooterLinksContainer>
            <a href="/" target="_blank">
          Terms of Use
        </a>
        <a href="/" target="_blank">
          Additional Content Information
        </a>
        <a href="/" target="_blank">
          Privacy Policy
        </a>
        <a href="/" target="_blank">
          Children's Online Privacy Policy
        </a>
        <a href="/" target="_blank">
          Your California Privacy Rights
        </a>
        <a href="/" target="_blank">
          Star Wars at shopDisney
        </a>
        <a href="/" target="_blank">
          Star Wars Helpdesk
        </a>
        <a href="/" target="_blank">
          Interest-Based Ads
        </a>
        <a href="/" target="_blank">
          Do Not Sell My Info
        </a>
            </FooterLinksContainer>
        </FooterContainer>
    )
}

export default Footer
