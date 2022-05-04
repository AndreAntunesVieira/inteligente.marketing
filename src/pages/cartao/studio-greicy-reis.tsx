import styled from 'styled-components'
import Head from 'next/head'

export default function VirtualCard() {
  return (
    <>
    <Head>
      <meta property="og:title" content="Studio Greicy Reis"/>
      <meta property="og:image" content="/cards/studio-greicy-reis/background.png"/>
    </Head>
      <Container>
        <h1>Studio Greicy Reis</h1>
        <div className="MainButtons">
          <div className="Buttons1">
            <div className="Buttons2">
              <div className="Text1">
                <div>Referência em Cílios e Micropigmentação.</div>
                <div className="upper">Cursos e Mentorias</div>
              </div>
            </div>
            <div className="ButtonsContainer">
              <a href="/cards/studio-greicy-reis/catalogo-de-servicos-studio-greicy-reis.pdf">
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
              {/*<a href="https://bit.ly/3MrQDES">*/}
              {/*  <img src="/cards/studio-greicy-reis/8.png" />*/}
              {/*  Cursos*/}
              {/*</a>*/}
              <a href="https://bit.ly/38EKuXn">
                <img src="/cards/studio-greicy-reis/5.png" />
                Localização
              </a>
            </div>
          </div>

          <small className="Text2">Clique nos ícones para interagir</small>
        </div>
      </Container>
    </>

  )
}
const Container = styled.div`
  background-size: cover;
  background-position: top center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  flex-direction: column;
  background-image: url(/cards/studio-greicy-reis/background-720.jpg);

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
  .MainButtons{
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
      color: #FFDE59;
      text-transform: uppercase;
      background-size: contain;
      flex-direction: column;
      padding: 0 10px;
      align-items: center;
      font-family: 'Open Sans', sans-serif;
      font-weight: lighter;
      font-size: 0.8em;

      img {
        height: 60px;
        width: 60px;
      }
    }

    .ButtonsContainer {
      display: flex;
      flex-direction: column;
      padding: 0 0 20px 0;
    }
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
    padding: 16pt 0;
    background-repeat: no-repeat;
    position: fixed;
    top: 20px;
    width: 100vw;
    @media screen and (min-resolution: 2dppx){
      padding: 20pt 0;
    }
  }
  .Text1{
    max-width: 180px;
    background: #782116;
    color: #FBD820;
    padding: 10px;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    flex-grow: 1;
    position: relative;
    bottom: 50px;

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
  }
  @media (max-width: 360px){
    background-image: url(/cards/studio-greicy-reis/background-360.jpg);
  }
`
