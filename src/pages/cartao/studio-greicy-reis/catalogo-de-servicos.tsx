import styled from 'styled-components'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function VirtualCard() {
  const [ ready, setReady ] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setReady(true)
    }, 1000)
  }, [])
  return (
    <>
      <Head>
        <meta name="description" content="Referência em Cílios e Micropigmentação | Cursos e Mentorias" />
        <meta property="og:url" content="https://dbgipmeljyjb5.cloudfront.net/cartao/studio-greicy-reis.html/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Studio Greicy Reis" />
        <meta property="og:description" content="Referência em Cílios e Micropigmentação | Cursos e Mentorias" />
        <meta property="og:image" content="/cards/studio-greicy-reis/background-720.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="inteligente.marketing" />
        <meta property="twitter:url" content="https://dbgipmeljyjb5.cloudfront.net/cartao/studio-greicy-reis.html/" />
        <meta name="twitter:title" content="Studio Greicy Reis" />
        <meta name="twitter:description" content="Referência em Cílios e Micropigmentação | Cursos e Mentorias" />
        <meta name="twitter:image" content="/cards/studio-greicy-reis/background-720.jpg" />
        <style>{`body{background-color: #48281e;}`}</style>
      </Head>
      <Container className={ready ? 'ready' : ''}>
        <section className="Section1">
          <div className="Title box">
            <div>Seja Bem-vinda!</div>
            <h1>
              Catálogo de serviços
              <span>| Studio Greicy Reis</span>
            </h1>
          </div>
          <div>
            <a className="SubTitle box" href="https://bit.ly/3kBvHzk" target="_blank">
              <div>Catálogo válido no ano de 2022</div>
              <div className="flex align-items-center justify-content-center gap-4">
                <img src="/icons/instagram-30.png" width={30} />
                <span>@studiogreicyreis</span>
              </div>
            </a>
            <a className="scroll-button" href="#service2">
              <img src="/cards/studio-greicy-reis/arrow-down.gif"/>
            </a>
          </div>
        </section>
        <section className="Section2" id="service2">
          <p>
            Aqui você verá uma variedade
            de olhares poderosos.
            No Studio, fazemos os
            procedimentos personalizados,
            especialmente pra você!
            dentro do Seu estilo, simetria, E
            dia-a-dia, AJUDAMOS a
            escolher a melhor opção que
            combina com você! Após
            procedimento, você recebe
            uma massagem facial, com
            esferas de vidros, que
            tranquilizam seu sistema
            nervoso, e proporciona um
            relaxamento profundo.
            NOSSA MISSÃO É ELEVAR SUA AUTOESTIMA, E SUPERAR SUA EXPECTATIVA.
            Vem fazer sua avaliação, para se sentir
            maravilhosa!</p>
        </section>
        <section className="Section3">
          <Service title="Mega" subtitle="volume" motivationalText="Milionária" price="250,00" image="/cards/studio-greicy-reis/service-1.jpeg" />
          <Service title="Volume" subtitle="russo" motivationalText="Empoderada" price="200,00" image="/cards/studio-greicy-reis/service-2.jpeg" />
          <Service title="Volume" subtitle="brasileiro" motivationalText="Luxuosa" price="200,00" image="/cards/studio-greicy-reis/service-3.jpeg" />
        </section>
        <section className="Section3">
          <Service title="Volume" subtitle="brasileirinho" motivationalText="Poderosa" price="180,00" image="/cards/studio-greicy-reis/service-4.jpeg" />
          <Service title="Volumão" subtitle="gatinha" motivationalText="Moderna" price="200,00" image="/cards/studio-greicy-reis/service-5.jpeg" />
          <Service title="Volume" subtitle="spike" motivationalText="Ousada" price="200,00" image="/cards/studio-greicy-reis/service-6.jpeg" />
        </section>
        <section className="Section3">
          <Service title="Efeito" subtitle="rímel" motivationalText="Natural" price="150,00" image="/cards/studio-greicy-reis/service-7.jpeg" />
          <Service title="Cílios" subtitle="express" motivationalText="Prática" price="130,00" image="/cards/studio-greicy-reis/service-8.jpeg" />
          <Service title="Volume" subtitle="spike" motivationalText="Kardashian" price="200,00" image="/cards/studio-greicy-reis/service-9.jpeg" />
        </section>
      </Container>
    </>

  )
}

const Service = ({ title, subtitle, motivationalText, price, image }: any) => {
  return (
    <div className="Service">
      <div className="box">
        <div>
          <div className="ServiceTitle">{title}</div>
          <div className="ServiceSubtitle">{subtitle}</div>
        </div>
        <div className="ServiceMotivationalText">{motivationalText}</div>
        <div className="ServicePrice">R${price}</div>
      </div>
      <img src={image}/>
    </div>
  )
}

const Container = styled.div`
  .box{
    border: 2px solid #c2050f;
    background-color: #782116;
    padding: 14px;
  }
  section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-size: cover;
  }

  .Section1 {
    background-image: url(/cards/studio-greicy-reis/background-720.jpg);
    justify-content: space-between;
    .scroll-button{
     display: flex;
      align-items: center;
      justify-content: center;
      img{
        border: 2px solid white;
        border-radius: 50%;
        width: 30px;
        margin-bottom: 20px;
        margin-top: -10px;
      }
    }
    .Title {
      color: #FBD820;
      text-align: center;
      top: 20px;
      max-width: 300px;
      margin: 20px auto;
      font-family: Arial, sans-serif;

      h1 {
        color: white;
        margin: 0;

        span {
          opacity: 0;
          height: 0;
          font-size: 0;
        }
      }
    }

    .SubTitle {
      color: #FBD820;
      display: block;
      text-align: center;
      top: 20px;
      max-width: 300px;
      margin: 20px auto;
      font-family: Arial, sans-serif;
      border: 2px solid #c2050f;
      background-color: #782116;
      padding: 14px;

      span {
        color: white;
      }
    }
  }

  .Section2 {
    background-image: url("/cards/studio-greicy-reis/background-servico-1.jpeg");
    align-items: center;
    justify-content: center;
    border-bottom: 4px solid #6b1b11;

    p {
      background-color: #7F0303BB;
      margin: 20px;
      padding: 14px 28px;
      color: white;
      text-align: center;
      font-size: 1.2em;
    }
  }
  .Section3{
    background-image: url("/cards/studio-greicy-reis/background-servico-2.jpeg");
    .Service{
      display: flex;
      justify-content: space-between;
      padding: 14px 28px;
      color: white;
      position: relative;
      align-items: center;
      img{
        border-radius: 50%;
      }
      .box{
        height: 100px;
      }
      .ServiceTitle{
        position: absolute;
        transform: rotate(-15deg) translate(-20px, -40px);
        font-size: 2em;
      }
      .ServiceSubtitle{
        margin-left: 40px;
      }
      .ServiceMotivationalText{
        color: #FBD820;
      }
      .ServicePrice{
        text-align: right;
      }
    }
  }

`
