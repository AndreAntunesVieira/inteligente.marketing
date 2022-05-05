import styled, { keyframes } from 'styled-components'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function VirtualCard() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setReady(true)
    }, 1000)
  }, [])
  return (
    <>
    <Head>
      <meta name="description" content="Referência em Cílios e Micropigmentação | Cursos e Mentorias"/>
      <meta property="og:url" content="https://dbgipmeljyjb5.cloudfront.net/cartao/studio-greicy-reis.html/"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Studio Greicy Reis"/>
      <meta property="og:description" content="Referência em Cílios e Micropigmentação | Cursos e Mentorias"/>
      <meta property="og:image" content="/cards/studio-greicy-reis/background-720.jpg"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="twitter:domain" content="inteligente.marketing"/>
      <meta property="twitter:url" content="https://dbgipmeljyjb5.cloudfront.net/cartao/studio-greicy-reis.html/"/>
      <meta name="twitter:title" content="Studio Greicy Reis"/>
      <meta name="twitter:description" content="Referência em Cílios e Micropigmentação | Cursos e Mentorias"/>
      <meta name="twitter:image" content="/cards/studio-greicy-reis/background-720.jpg"/>
    </Head>
      <Container className={ready ? 'ready' : ''}>
        <h1>
          <div>
            <span>Studio</span>
            <span>Greicy</span>
            <span>Reis</span>
          </div>
          </h1>
        <div className="MainButtons">
          <div className="Buttons1">
            <div className="Buttons2">
              <div className="Text1">
                <div>Referência em Cílios e Micropigmentação.</div>
                <div className="upper">Cursos e Mentorias</div>
              </div>
            </div>
            <div className="ButtonsContainer">
              <Button image="/cards/studio-greicy-reis/7.png" href="/cards/studio-greicy-reis/catalogo-de-servicos-studio-greicy-reis.pdf">
                Serviços
              </Button>
              <Button image="/cards/studio-greicy-reis/3.png" href="https://bit.ly/3s66jG0">
                Whatsapp
              </Button>
              <Button image="/cards/studio-greicy-reis/2.png" href="https://bit.ly/3kBvHzk">
                Instagram
              </Button>
              <Button href="https://bit.ly/38EKuXn" image="/cards/studio-greicy-reis/5.png" >
                Localização
              </Button>
            </div>
          </div>

          <small className="Text2">Clique nos ícones para interagir</small>
        </div>
      </Container>
    </>

  )
}

const Button = ({ children, href, image }: any) => {
  const [active, setActive] = useState(false)

  return (
    <a href={href} onClick={() => setActive(active => !active)} className={active?'active':''}>
      <img src={image} />
      {children}
    </a>
  )
}

const clickOutAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.6);
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
`

const colorAnimation = keyframes`
  0% {
    background: #802218;
  }
  50% {
    background: #6b1b11;
  }
  100% {
    background: #802218;
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
      transition: all ease 300ms;
      transform: translateX(200px);

      img {
        height: 60px;
        width: 60px;
      }
      
      &.active{
        animation: 1s ${clickOutAnimation} ease;
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
    color: #FBD820;
    text-align: center;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    position: fixed;
    top: 20px;
    width: 100%;
    font-family: Arial, sans-serif;
    background: url(/cards/studio-greicy-reis/name-background.png);
    margin: 0;
    padding: 14px 0;
    background-position: center center;
    background-repeat: no-repeat;
    > div{
      display: inline-flex;
      justify-content: center;
      gap: 4pt;
      border: 2px solid #c2050f;
      transition: all ease 300ms;
      animation: 4s ${colorAnimation} infinite linear;
      padding: 12px;
    }
    
    
    span{
      transition: all ease 300ms;
      transform: translate(0, -60px);
      opacity: 0;
      
    }
  }
  .Text1{
    max-width: 180px;
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
    transition: all ease 300ms;
    background-color: #782116;

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
      background: linear-gradient(90deg, rgba(153,47,33,1) 0%, rgba(120,33,22,1) 35%, rgba(105,24,14,1) 100%);
      transform: translateX(-100%);
      animation-name: example;
    }

    @media (max-width: 360px) {
      font-size: 0.9em;
      max-width: 160px;
    }
  }
  @media (max-width: 360px){
    background-image: url(/cards/studio-greicy-reis/background-360.jpg);
  }
  &.ready {
    .Text1{
    transform: translateX(0);
      
    }
    h1 span{
      transform: translate(0px, 0);
      opacity: 1;
      &:nth-child(1){
        transition-delay: 100ms;
      }
      &:nth-child(2){
        transition-delay: 150ms;
      }
      &:nth-child(3){
        transition-delay: 200ms;
      }
    }
    .MainButtons a{
      transform: translateX(0);

      &:nth-child(1){
        transition-delay: 100ms;
      }
      &:nth-child(2){
        transition-delay: 150ms;
      }
      &:nth-child(3){
        transition-delay: 200ms;
      }
      &:nth-child(4){
        transition-delay: 250ms;
      }
      &:nth-child(5){
        transition-delay: 300ms;
      }
      
    }
  }
`
