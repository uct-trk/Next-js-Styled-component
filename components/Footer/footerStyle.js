import styled from "styled-components";

export const FooterContainer = styled.div`
margin-top: 70px;
display: grid;
place-items: center;
background-color: black;
padding: 20px;
color: white;
background-image: url(https://static-mh.content.disney.io/starwars/assets/footer/vader_2-86e8fdb4e26d.jpg);
background-position: center top;
background-repeat: no-repeat;
position: absolute;

> p:nth-of-type(1) {
    margin: 64px 0 22px;
    color: #cccccc;
    font-size: 0.875rem;
    line-height: normal;
  }
`
export const Copyright = styled.p`
  margin-top: 32px;
  margin-bottom: 12px;
  font-size: 0.875rem;
  color: #ccc;
`

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 40px;

  > a {
    padding: 0 11px 0 12px;
    color: #cccccc;
    font-size: 0.875rem;
    line-height: normal;
    text-decoration: none;
    margin: 6px 0 0;

    :hover::after{
      border-bottom-color: #fff;
      width: 100%;
    }

    ::after {
      content: "";
      display: block;
      width: 40%;
      margin: 0 auto;
      opacity: 0.9;
      border-bottom: 1px solid transparent;
      
      /* Animations */
      -webkit-transition: border-color 200ms, width 250ms;
      -moz-transition: border-color 200ms, width 250ms;
      transition: border-color 200ms, width 250ms;
    }
  }

  > a:not(:last-child) {
    border-right: 1px solid #cccccc;
  }
`