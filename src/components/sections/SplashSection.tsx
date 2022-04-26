import styled from 'styled-components'

const SplashSection = () => (
  <Container style={{backgroundImage: `url(/pexels-caio-67112.jpeg)`}}>
    <main>
      <div className="container">

        <h1 className="font-light">
          Marketing Inteligente
        </h1>
        <h2 className="font-size-small">
          Aumente o faturamento do seu negócio com anúncios inteligentes
        </h2>
        <a className="btn btn1" href="/">
          Entre em contato
        </a>
      </div>
    </main>
  </Container>
)

const Container = styled.section`
  position: relative;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid;
  background-size: cover;
  background-position: center 20%;
  color: white;
  z-index: 0;
  &:before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    z-index: -1;
  }
  
  menu{
    display: flex;
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
        text-transform: uppercase;
      }
    }
  }
  main{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2em;
    .container{
      justify-content: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      flex-grow: 1;
    }
    h1{margin-bottom: 0}
    h2{margin-top: 0}
  }
`
export default SplashSection
