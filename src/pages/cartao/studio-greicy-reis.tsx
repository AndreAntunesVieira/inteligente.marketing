import styled from 'styled-components'
import Head from 'next/head'

export default function VirtualCard() {
  return (
    <>
    <Head>
      <meta property="og:title" content="Studio Greicy Reis"/>
      <meta property="og:image" content="/cards/studio-greicy-reis/background.png"/>
    </Head>
      <Container style={{ backgroundImage: 'url(/cards/studio-greicy-reis/background.png)' }}>
        <h1>Studio Greicy Reis</h1>
        <MainButtons>
          <div className="Buttons1">
            <div className="Buttons2">
              <Text1>
                <div>Referência em Cílios e Micropigmentação.</div>
                <div className="upper">Cursos e Mentorias</div>
              </Text1>
            </div>
            <div className="ButtonsContainer">
              <a href="https://bit.ly/3MrQDES">
                <img src="/cards/studio-greicy-reis/7.png" />
                Serviços
              </a>
              <a href="https://bit.ly/3s66jG0">
                <img src="/cards/studio-greicy-reis/3.png" />
                Whatsapp
              </a>
              <a href="https://bit.ly/3kBvHzk">
                <img src="/cards/studio-greicy-reis/2.png" />
                Instagram
              </a>
              <a href="https://bit.ly/3MrQDES">
                <img src="/cards/studio-greicy-reis/8.png" />
                Cursos
              </a>
              <a href="https://bit.ly/38EKuXn">
                <img src="/cards/studio-greicy-reis/5.png" />
                Localização
              </a>
            </div>
          </div>

          <small className="Text2">Clique nos ícones para interagir</small>
        </MainButtons>
      </Container>
    </>

  )
}

const Text1 = styled.div`
  max-width: 180px;
  background: #782116;
  color: #ffcc99;
  padding: 10px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  flex-grow: 1;
  position: relative;

  .upper {
    text-transform: uppercase;
    font-size: 0.8em;
  }

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 40px 0 40px 20px;
    border-color: transparent transparent transparent #782116;
    right: -20px;
    top: 0;
  }

  @media (max-width: 360px) {
    font-size: 0.9em;
    max-width: 160px;
  }
`

const MainButtons = styled.div`
  display: flex;

  .Buttons1 {
    display: flex;
    padding-right: 10px;
    position: fixed;
    width: 100vw;
    bottom: 20px;
  }

  .Buttons2 {
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
    padding-bottom: 20px;
  }

  a {
    margin-bottom: 10px;
    display: inline-flex;
    color: #fdeb97;
    background-size: contain;
    flex-direction: column;
    padding: 0 10px;
    align-items: center;

    img {
      height: 60px;
      width: 60px;
    }

    @media (max-height: 590px) {
      &:nth-child(1) {
        position: absolute;
        top: 0;
        right: 100px;
      }
    }
    @media (max-height: 510px) {
      &:nth-child(2) {
        position: absolute;
        top: 90px;
        right: 100px;
      }
    }
  }

  .ButtonsContainer {
    display: flex;
    flex-direction: column;
    padding: 0 0 20px 0;
  }
`

const Container = styled.div`
  background-size: cover;
  background-position: top center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  flex-direction: column;

  .Text2 {
    background: #fbd82055;
    border-radius: 10px 10px 0 0;
    width: 260px;
    right: calc(50% - 130px);
    position: fixed;
    bottom: 0;
    padding: 10px 10px 5px 10px;
    text-align: center;
  }

  .logo {
    display: flex;
    justify-content: center;

    img {
      width: 50vw;
    }
  }

  h1 {
    color: white;
    text-align: center;
    margin: 16px 0;
    background: url(/cards/studio-greicy-reis/name-background.png);
    background-size: contain;
    background-position: center center;
    padding: 16px 0;
    background-repeat: no-repeat;
    position: fixed;
    top: 20px;
    width: 100vw;
  }
`
