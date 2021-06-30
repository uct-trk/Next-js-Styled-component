import styled from 'styled-components'

export const HeaderContainer = styled.div`
    padding: 20px;
    padding-bottom: 0;
    background-image: url("https://static-mh.content.disney.io/starwars/assets/navigation/navigation_stars@2x-815223a7aade.jpg");
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 999;

    > a > img {
        object-fit: contain;
        margin-top: -40px;
        margin-bottom: -20px;
        height: 180px;
        filter: brightness(0) invert(1);
    }
`
export const HeaderLeft = styled.div``
export const HeaderRight = styled.div``

export const HeaderSearch = styled.div`
  width: 26px;
  min-width: 26px;
  border-radius: 4px;
  background-color: #343434;
  box-shadow: none;
  border: 0;
  position: relative;
  width: 248px;
  opacity: 0.7;
  height: 40px;
  transition: opacity 350ms;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  opacity: 0.7;

  :focus-within {
    opacity: 1;
  }

  > input {
    background: transparent;
    outline: none;
    border: none;
    font-weight: 400;
    font-family: inherit;
    font-size: 15px;
    color: white;
  }

  > input::placeholder {
    opacity: 1;
    color: gray;
  }

  > img {
    object-fit: contain;
    height: 20px;
  }
`
export const HeaderActions = styled.div`
    width: 100%;
    margin-top: 10px;
    color: #999;
    display: flex;
    align-items: center;
    justify-content: flex-end;

  > button {
    background: transparent;
    font-family: inherit;
    font-weight: 600;
    border: none;
    color: #999;
    font-size: 14px;
    cursor: pointer;
    transition: color 200ms;
    letter-spacing: 2px;

    :hover {
      color: #ccc;
    }
  }

  > span {
    color: #343434;
    font-size: 1.125em;
    font-weight: 500;
  }
`