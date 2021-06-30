import styled from "styled-components";

export const NavLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #333;
    text-decoration: none;
    padding: 0 25px;
    height: 100%;
    transition: color 100ms;
    color: #999;
    cursor: pointer;

    :hover {
        color: white;
    }

    :last-of-type {
        border-right: 1px solid #333;
    }

    > h4 {
        font-size: 14px;
        letter-spacing: 1px;
    }
`