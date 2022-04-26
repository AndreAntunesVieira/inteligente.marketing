import styled from 'styled-components'

export default function VirtualCard() {
  return (
    <>
      <Container style={{backgroundImage: 'url(/cards/background1.jpeg)'}}>
        <div className="logo">
          <img src="/cards/logo1.png" />
        </div>
        <div>
          <h1>André Antunes Vieira</h1>
        </div>
        <MainButtons>
          <a>Ligar para mim</a>
          <a>Whatsappp</a>
        </MainButtons>
      </Container>
      <img src="/ref.png" className="ref" />
    </>
  )
}

const MainButtons = styled.div`

`

const Container = styled.div`
  background-size: cover;
  min-height: 100vh;
  background-position: center center;
  padding: 24px;
  position: relative;
  .logo{
    display: flex;
    justify-content: center;
    padding: 24px;
    img{
      width: 50vw;
    }
  }
  h1{
    color: white;
    padding: 24px;
    font-size: 1.7em;
    text-align: center;
  }
  &:before{
    width: calc(100vw - 48px);
    height: calc(100vh - 48px);
    position: absolute;
    content: '';
    background: rgba(0,0,0,0.2);
    border-radius: 24px;
  }

  + .ref {
    margin-top: 100vh;
    max-width: 100vw;
  }
`
