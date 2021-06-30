import { NavbarContainer, NavbarLinks } from './navbarStyle'
import NavbarLink from '../NavbarLink/NavbarLink'

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarLinks>
                <NavbarLink title="NEWS + BLOG" />
                <NavbarLink title="VIDEO" />
                <NavbarLink title="FILMS" />
                <NavbarLink title="SERIES" />
                <NavbarLink title="INTERACTIVE" />
                <NavbarLink title="COMMUNITY" />
                <NavbarLink title="DATABANK" />
            </NavbarLinks>
        </NavbarContainer>
    )
}

export default Navbar
