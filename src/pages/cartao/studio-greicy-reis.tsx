import styled from 'styled-components'

export default function VirtualCard() {
  return (
    <>
      <Container style={{ backgroundImage: 'url(/cards/studio-greicy-reis/background.png)' }}>
        <div className="logo">
          <img src="/cards/studio-greicy-reis/image.png" />
        </div>
        <div>
          <h1>Studio Greicy Reis</h1>
        </div>
        <MainButtons>
          <a href="https://www.instagram.com/studiogreicyreis"
             style={{ backgroundImage: `url(/cards/studio-greicy-reis/1.png)` }}>a</a>
          <a href="https://www.instagram.com/studiogreicyreis"
             style={{ backgroundImage: `url(/cards/studio-greicy-reis/2.png)` }}>a</a>
          <a href="https://wa.me/5551992894493"
             style={{ backgroundImage: `url(/cards/studio-greicy-reis/3.png)` }}>a</a>
          <a href="tel:051992894493" style={{ backgroundImage: `url(/cards/studio-greicy-reis/4.png)` }}>a</a>
          <a href="https://maps.google.com/?q=Avenida Assis Brasil, 3966, Jardim Lindoia, Porto Alegre"
             style={{ backgroundImage: `url(/cards/studio-greicy-reis/5.png)` }}>a</a>
          <Text1>
            <div>Referência em Cílios e Micropigmentação.</div>
            <div className="upper">Cursos e Mentorias</div>
          </Text1>
          <Text2>
            Clique nos ícones para interagir
          </Text2>
        </MainButtons>
      </Container>
    </>
  )
}

const Text2 = styled.div`
  background: #FBD820;
  position: absolute;
  bottom: -10px;
  padding: 10px;
  border-radius: 10px 10px 0 0;
  width: 260px;
  right: calc(50% - 130px);
`

const Text1 = styled.div`
  position: absolute;
  bottom: 70px;
  right: 0;
  max-width: 50vw;
  background: #973E45;
  color: #FFCC99;
  padding: 10px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
    border-width: 40px 20px 40px 0;
    border-color: transparent #973E45 transparent transparent;
    left: -20px;
    top: 0;
  }
`

const MainButtons = styled.div`
  position: relative;
  width: calc(100vw - 20px);
  min-height: 300px;
  flex-grow: 1;
  margin: 10px;

  a {
    height: 60px;
    width: 60px;
    display: inline-block;
    color: transparent;
    background-size: contain;
    position: absolute;
    right: 0;

    &:nth-child(1) {
      bottom: 280px;
    }

    &:nth-child(2) {
      right: calc(45vw - 80px);
      bottom: 240px;
    }

    &:nth-child(3) {
      right: calc(65vw - 80px);
      bottom: 180px;
    }

    &:nth-child(4) {
      right: calc(85vw - 80px);
      bottom: 100px;
    }

    &:nth-child(5) {
      right: calc(100vw - 80px);
      bottom: 30px;
    }
  }
`

const Container = styled.div`
  background-size: cover;
  background-position: center center;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

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
  }
`
