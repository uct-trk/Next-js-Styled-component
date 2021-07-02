import { GlobalStyle } from '../globalStyle/globalStyle'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Circle } from "better-react-spinkit";


function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false)
    }, 500);
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <GlobalStyle />
      {loading ? (
        <AppLoading>
          <AppLoadingContents>
            <img
              src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
              alt=""
            />
            <Circle color="#edec51" size={60} />
          </AppLoadingContents>
        </AppLoading>
      ) : (
        <>
          <Header />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  )
}

export default MyApp

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    object-fit: contain;
    height: 150px;
    margin-bottom: 20px;
    filter: brightness(0) invert(1);
  }
`;
