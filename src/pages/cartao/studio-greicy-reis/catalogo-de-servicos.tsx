import styled from 'styled-components'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

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
        <meta property="og:url" content="https://inteligente.marketing/cartao/studio-greicy-reis/catalogo-de-servicos.html" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Catálogo de Serviços | Studio Greicy Reis" />
        <meta property="og:description" content="Referência em Cílios e Micropigmentação | Cursos e Mentorias" />
        <meta property="og:image" content="https://inteligente.marketing/cards/studio-greicy-reis/background-720.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="inteligente.marketing" />
        <meta property="twitter:url" content="https://inteligente.marketing/cartao/studio-greicy-reis/catalogo-de-servicos.html" />
        <meta name="twitter:title" content="Catálogo de Serviços | Studio Greicy Reis" />
        <meta name="twitter:description" content="Referência em Cílios e Micropigmentação | Cursos e Mentorias" />
        <meta name="twitter:image" content="https://inteligente.marketing/cards/studio-greicy-reis/background-720.jpg" />
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
              <img src="/cards/studio-greicy-reis/arrow-down.gif" />
            </a>
          </div>
        </section>
        <section className="Section2" id="service2">
          <ReadyOnScroll Component="p" offset={300}>
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
            maravilhosa!</ReadyOnScroll>
        </section>
        <section className="Section3">
          <Service title="Mega" subtitle="volume" motivationalText="Milionária" price="250,00"
                   image="/cards/studio-greicy-reis/service-1.jpeg" />
          <Service title="Volume" subtitle="russo" motivationalText="Empoderada" price="200,00"
                   image="/cards/studio-greicy-reis/service-2.jpeg" />
          <Service title="Volume" subtitle="brasileiro" motivationalText="Luxuosa" price="200,00"
                   image="/cards/studio-greicy-reis/service-3.jpeg" />
        </section>
        <section className="Section3">
          <Service title="Volume" subtitle="brasileirinho" motivationalText="Poderosa" price="180,00"
                   image="/cards/studio-greicy-reis/service-4.jpeg" />
          <Service title="Volumão" subtitle="gatinha" motivationalText="Moderna" price="200,00"
                   image="/cards/studio-greicy-reis/service-5.jpeg" />
          <Service title="Volume" subtitle="spike" motivationalText="Ousada" price="200,00"
                   image="/cards/studio-greicy-reis/service-6.jpeg" />
        </section>
        <section className="Section3">
          <Service title="Efeito" subtitle="rímel" motivationalText="Natural" price="150,00"
                   image="/cards/studio-greicy-reis/service-7.jpeg" />
          <Service title="Cílios" subtitle="express" motivationalText="Prática" price="130,00"
                   image="/cards/studio-greicy-reis/service-8.jpeg" />
          <Service title="Volume" subtitle="spike" motivationalText="Kardashian" price="200,00"
                   image="/cards/studio-greicy-reis/service-9.jpeg" />
        </section>
        <section className="Section4">
          <h2>
            <span>Manutenção</span>
            <span>de extensão de cílios</span>
          </h2>

          <ReadyOnScroll className="box">
            <p>Nós trocamos todos os cílios a cada 100 dias, perdemos de 3 a 5 cílios por dia, para nascer um novo
              fio.</p>
            <p>A manutenção é feita de 15 a 20 dias, para manter em condições impecavéis, ajustar as extenções que se
              afastaram da pálpebra pois seu fio cresceu, e repor os fios que se desprenderam por causa do seu
              ciclo.</p>
          </ReadyOnScroll>

          <ReadyOnScroll className="DaysWarnning">
            <div className="box">
              <div>VALOR DA MANUTENÇÃO</div>
              <div className="price">R$100,00</div>
            </div>
            <img src="/cards/studio-greicy-reis/img1.png" />
          </ReadyOnScroll>
        </section>
      </Container>
    </>

  )
}

const ReadyOnScroll = ({ Component = 'div', className, offset = 50, ...props }: any) => {
  const [ ready, setReady ] = useState(false)
  const ref: any = useRef(null)
  useEffect(() => {
    function handleScroll() {
      if (ready) return null

      if (ref.current.getBoundingClientRect().y < ( window.innerHeight - offset )) {
        setReady(true)
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return <Component className={classNames('scrollable', className, { ready })} ref={ref} {...props} />
}

const Service = ({ title, subtitle, motivationalText, price, image, className }: any) => {
  return (
    <ReadyOnScroll className={classNames('Service', className)}>
      <div className="box">
        <div>
          <div className="ServiceTitle">{title}</div>
          <div className="ServiceSubtitle">{subtitle}</div>
        </div>
        <div className="ServiceMotivationalText">{motivationalText}</div>
        <div className="ServicePrice">R${price}</div>
      </div>
      <img src={image} />
    </ReadyOnScroll>
  )
}

const Container = styled.div`
  .scrollable {
    transition: all ease 300ms;
  }

  .box {
    border: 2px solid #c2050f;
    background-color: #782116;
    padding: 14px;
  }

  section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-size: cover;
    max-width: 100vw;
    overflow-x: hidden;
  }

  .Section1 {
    background-image: url(/cards/studio-greicy-reis/background-720.jpg);
    justify-content: space-between;

    .scroll-button {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        border: 2px solid white;
        border-radius: 50%;
        width: 30px;
        margin-bottom: 100px;
        margin-top: -10px;
      }
    }

    .Title {
      color: #D6AE41;
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
      color: #D6AE41;
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
      transform: translateY(-20px);
      opacity: 0;

      &.ready {
        transform: translateY(0px);
        opacity: 1;
      }
    }
  }

  .Section3 {
    background-image: url("/cards/studio-greicy-reis/background-servico-2.jpeg");
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .Service {
      display: flex;
      justify-content: space-between;
      padding: 14px 28px;
      color: white;
      position: relative;
      align-items: center;

      img {
        border-radius: 50%;
        transition: all ease 300ms;
        transform: translateX(100%);
        opacity: 0;
      }

      .box {
        height: 100px;
        width: 140px;
        transition: all ease 300ms;
        transform: translateX(-100%);
        opacity: 0;
      }

      .ServiceTitle {
        position: absolute;
        transform: rotate(-15deg) translate(-20px, -40px);
        font-size: 2em;
        font-family: cursive;
      }

      .ServiceSubtitle {
        margin-left: 40px;
        position: relative;

        &:after {
          content: '';
          border-bottom: 2px dashed white;
          width: 100px;
          height: 1px;
          top: 60px;
          display: block;
        }

        &:before {
          content: '';
          display: block;
          border-bottom: 2px solid white;
          border-right: 2px solid white;
          width: 10px;
          height: 10px;
          top: 14px;
          left: 91px;
          position: absolute;
          transform: rotate(-45deg);
        }
      }

      .ServiceMotivationalText {
        color: #D6AE41;
      }

      .ServicePrice {
        text-align: right;
      }

      &.ready {
        .box {
          transform: translateX(0);
          opacity: 1;
        }

        img {
          transform: translateX(0);
          opacity: 1;
        }
      }
    }
  }

  .Section4 {
    background-image: url(/cards/studio-greicy-reis/background-servico-3.jpeg);
    padding: 20px;

    h2 {
      color: white;

      > span:nth-child(1) {
        font-family: cursive;
        transform: rotate(-15deg) translate(10px, -20px);
        display: inline-block;
        font-size: 1.4em;
        margin-right: -90px;
      }

      > span:nth-child(2) {
        color: #D6AE41;
        text-transform: uppercase;
        font-size: 0.9em;
      }
    }

    > .box {
      color: white;
      opacity: 0;
      transform: translateX(-100%);

      &.ready {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .DaysWarnning {
      position: relative;
      margin-top: 20px;
      opacity: 0;
      transform: translateX(200%);

      &.ready {
        opacity: 1;
        transform: translateX(0);
      }

      .box {
        position: absolute;
        bottom: 10px;
        left: 10px;
        width: 35%;
        color: white;
        text-align: center;
        font-size: 0.7em;
        padding: 8px 14px;
      }

      img {
        max-width: 100%;
      }

      .price {
        color: #D6AE41;
        font-size: 1.6em;
      }
    }
  }


  @media (max-width: 360px) {
    .Service {
      img {
        width: 90px;
      }
    }

    .Section4 {
      h2 {
        > span:nth-child(2) {
          font-size: 0.6em;
        }
      }
    }
`
