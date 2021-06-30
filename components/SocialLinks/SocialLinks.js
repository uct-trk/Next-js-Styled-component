import SocialLink from "../SocialLink/SocialLink"
import { LinksContainer, KidsContainer } from './socialStyle'

const SocialLinks = () => {
    return (
        <LinksContainer>
            <SocialLink image="https://static-mh.content.disney.io/starwars/assets/shared/icon_facebook-aec3b685b1a1.svg" />
            <SocialLink image="https://static-mh.content.disney.io/starwars/assets/shared/icon_instagram-be8807d03d5f.svg" />
            <SocialLink image="https://static-mh.content.disney.io/starwars/assets/shared/icon_tumblr-9dbf2f5872a3.svg" />
            <SocialLink image="https://static-mh.content.disney.io/starwars/assets/shared/icon_twitter-bde9a7f5abaa.svg" />
            <SocialLink image="https://static-mh.content.disney.io/starwars/assets/shared/icon_youtube-ed78c6ee1c7d.svg" />
            <KidsContainer>
                <a href="">
                    <span />
                </a>
            </KidsContainer>
        </LinksContainer>
    )
}

export default SocialLinks
