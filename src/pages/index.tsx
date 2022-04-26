import SplashSection from '../components/sections/SplashSection'
import ServicesSection from '../components/sections/ServicesSection'
import Sidebar from '../components/sections/Sidebar'
import styled from 'styled-components'

const data = [
  { component: 'SplashSection' },
  { component: 'ServicesSection' },

]

const sections: any = {
  SplashSection, ServicesSection
}

export default function Home() {
  return (
    <Container>
      <Sidebar />
      <div className="main">
        {data.map(({ component, ...props }: any, i: number) => {
          const Component = sections[ component ]
          return <Component {...props} key={`${component}-${i}`} />
        })}
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  .main{
    flex-grow: 1;
  }
`
