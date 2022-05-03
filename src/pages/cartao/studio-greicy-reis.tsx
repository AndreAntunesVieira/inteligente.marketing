import styled from 'styled-components'

export default function VirtualCard() {
  return (
    <>
      <Container style={{ backgroundImage: 'url(/cards/studio-greicy-reis/background.png)' }}>
        <div>
          <h1>Studio Greicy Reis</h1>
        </div>
        <MainButtons>
          <div className="Buttons1">
            <div className="Buttons2">
              <Text1>
                <div>Referência em Cílios e Micropigmentação.</div>
                <div className="upper">Cursos e Mentorias</div>
              </Text1>
            </div>
            <div className="ButtonsContainer">
              <a href="https://www.instagram.com/studiogreicyreis"
              ><img src="/cards/studio-greicy-reis/7.png" />Serviços</a>
              <a href="https://wa.me/5551992894493"
              ><img src="/cards/studio-greicy-reis/3.png" />Whatsapp</a>
              <a href="https://www.instagram.com/studiogreicyreis"
              ><img src="/cards/studio-greicy-reis/2.png" />Instagram</a>
              <a href="tel:051992894493"><img src="/cards/studio-greicy-reis/8.png" />Cursos</a>
              <a href="https://maps.google.com/?q=Avenida Assis Brasil, 3966, Jardim Lindoia, Porto Alegre"
              ><img src="/cards/studio-greicy-reis/5.png" />Localização</a>
            </div>
          </div>

          <Text2>
            Clique nos ícones para interagir
          </Text2>
        </MainButtons>
      </Container>
    </>
  )
}

const Text2 = styled.div`
  background: #FBD82055;
  border-radius: 10px 10px 0 0;
  width: 260px;
  right: calc(50% - 130px);
  position: fixed;
  bottom: 0;
  padding: 10px 10px 5px 10px;
`

const Text1 = styled.div`
  max-width: 180px;
  background: #782116;
  color: #FFCC99;
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
    @media (max-height: 580px){
      &:nth-child(1){
        position: absolute;
        top: 0;
        right: 100px;
      }
      &:nth-child(2){
        position: absolute;
        top: 100px;
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
  position: relative;
  height: 100vh;
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
