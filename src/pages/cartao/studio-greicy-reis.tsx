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
          <a href="https://www.instagram.com/studiogreicyreis" style={{ backgroundImage: `url(/cards/studio-greicy-reis/1.png)` }}>a</a>
          <a href="https://www.instagram.com/studiogreicyreis" style={{ backgroundImage: `url(/cards/studio-greicy-reis/2.png)` }}>a</a>
          <a href="https://www.instagram.com/studiogreicyreis" style={{ backgroundImage: `url(/cards/studio-greicy-reis/3.png)` }}>a</a>
          <a href="https://www.instagram.com/studiogreicyreis" style={{ backgroundImage: `url(/cards/studio-greicy-reis/4.png)` }}>a</a>
          <a href="https://www.instagram.com/studiogreicyreis" style={{ backgroundImage: `url(/cards/studio-greicy-reis/5.png)` }}>a</a>
        </MainButtons>
      </Container>
    </>
  )
}

const MainButtons = styled.div`
  position: relative;
  width: 100%;
  min-height: 20vh;
  flex-grow: 1;

  a {
    height: 60px;
    width: 60px;
    display: inline-block;
    color: transparent;
    background-size: contain;
    position: absolute;
    right: 0;

    &:nth-child(1) {
      bottom: 300px;
    }

    &:nth-child(2) {
      right: 70px;
      bottom: 240px;
    }
    &:nth-child(3) {
      right: 140px;
      bottom: 170px;
    }
    &:nth-child(4) {
      right: 210px;
      bottom: 90px;
    }
    &:nth-child(5) {
      right: 250px;
      bottom: 0;
    }
  }
`

const Container = styled.div`
  background-size: cover;
  background-position: center center;
  padding: 24px;
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
  }
`
