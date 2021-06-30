import Link from "next/link";
import {
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderSearch,
  HeaderActions,
} from "./headerStyle";
import SocialLinks from "../SocialLinks/SocialLinks";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <SocialLinks />
      </HeaderLeft>
      <Link href="/">
        <a>
          <img
            src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
            alt="header"
          />
        </a>
      </Link>
      <HeaderRight>
        <HeaderSearch>
          <input placeholder="Search Star Wars" />
          <img
            src="https://static-mh.content.disney.io/starwars/assets/navigation/icon_search-957a123fdb62.svg"
            alt="search"
          />
        </HeaderSearch>
        <HeaderActions>
          <button>LOG IN</button>
          <span>//</span>
          <button>SIGN UP</button>
        </HeaderActions>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
