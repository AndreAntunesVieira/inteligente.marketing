import styled from 'styled-components'

const SplashSection = () => (
  <Container>
    <menu>
      <div className="container">
        <div>
          <a href="/">Agência Marketing Inteligente</a>
          {/*<img src="/logo-social-media.png"/>*/}
        </div>
        <ul>
          <li>
            <a>Página principal</a>
          </li>
          <li>
            <a>Serviços</a>
          </li>
          <li>
            <a>Contato</a>
          </li>
        </ul>
      </div>
    </menu>
    <main>
      <div className="container">

        <h1>
          Aumente o faturamento do seu negócio com anúncios inteligentes
        </h1>
        <a className="btn" href="/">
          Entre em contato
        </a>
      </div>
    </main>

  </Container>
)

const Container = styled.section`
min-height: 80vh;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid;
  background-image: url("/splash-fundo.jpeg");
  background-size: cover;
  background-position: center 20%;
  menu{
    display: flex;
    color: white;
    align-items: center;
    justify-content: space-between;
    font-size: 1.5em;
    .container{
      border-bottom: 1px solid #333;
      align-items: center;
      justify-content: space-between;
      display: flex;
      height: 65px;
    }
    ul{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0;
      margin: 0;
      list-style: none;
      li>a{
        display: inline-flex;
        padding: 8px;
        cursor: pointer;
      }
    }
  }
  main{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-size: 2em;
    .container{
      justify-content: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      flex-grow: 1;
    }
  }
`
export default SplashSection
