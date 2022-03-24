import SplashSection from '../components/sections/SplashSection'

const data = [
  { component: 'SplashSection' }
]

const sections: any = {
  SplashSection
}

export default function Home() {
  return (
    <>
      {data.map(({ component, ...props }: any, i: number) => {
        const Component = sections[ component ]
        return <Component {...props} key={`${component}-${i}`} />
      })}
    </>
  )
}
