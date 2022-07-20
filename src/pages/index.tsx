import Cta11Section from '../components/sections/Cta11Section'
import Features4Section from '../components/sections/Features4Section'
import HeroWithVideoSection from '../components/sections/HeroWithVideoSection'
import Reviews4Section from '../components/sections/Reviews4Section'
import Divider from '../components/sections/Divider'

import Layout from '../layout/Layout'

const components: any = { HeroWithVideoSection, Features4Section, Divider, Reviews4Section }

const sections = [
  {
    component: 'HeroWithVideoSection',
    title: 'Cuidamos do marketing digital da sua empresa',
    videoId: 'czq7dyGAlxI',
    videoImage: 'images/dashboard-07.png',
    buttons: [
      { children: 'Chamar no Whatspp', className: 'btn-green blue-hover', href: 'https://wa.me/5551982073632' },
      { children: 'Pedir orçamento', className: 'btn-tra-green tra-blue-hover', href: '/contatos' },
    ],
  },
  {
    component: 'Features4Section',
    title: 'Serviços oferecidos',
    text: 'Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis a libero tempus, blandit and cursus varius and magnis sapien',
    items: [
      {
        background: '/images/ico-bkg.png',
        icon: 'flaticon-layers',
        title: 'Acessoria de Mídia',
        text: 'Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor',
      },
      {
        background: '/images/ico-bkg.png',
        icon: 'flaticon-dashboard',
        title: 'Gestão de redes sociais',
        text: 'Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor',
      },
      {
        background: '/images/ico-bkg.png',
        icon: 'flaticon-tool',
        title: 'Tráfigo pago',
        text: 'Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor',
      },
      {
        background: '/images/ico-bkg.png',
        icon: 'flaticon-increase-1',
        title: 'Desenvolvimento de Website',
        text: 'Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor',
      },
    ],
  },
  { component: 'Divider' },
  {
    component: 'Reviews4Section',
    title: 'Veja o que falam nossos clientes',
    text: 'Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis a libero tempus, blandit and cursus varius and magnis sapien',
    items: [
      {
        text: 'Etiam sapien sagittis congue augue massa varius egestas ultrice varius magna undo tempus aliquet undo cursus suscipit cubilia laoreet augue',
        image: '/images/review-author-1.jpg',
        name: 'Scott Boxer',
        identifiers: '@scott_boxer',
        rating: 5,
      },
      {
        text: `At sagittis congue augue egestas magna ipsum vitae a purus
                      ipsum primis in cubilia laoreet augue egestas luctus and
                      donec ultrice ligula magna at suscipit lectus gestas augue
                      into cubilia`,
        image: '/images/review-author-2.jpg',
        name: 'Joel Peterson',
        identifiers: 'Internet Surfer',
        rating: 4,
      },
      {
        text: `Mauris donec magnis sapien sapien congue augue egestas et
          ultrice vitae purus diam integer congue magna ligula undo
          egestas magna suscipit`,
        image: '/images/review-author-3.jpg',
        name: 'Marisol19',
        identifiers: '@marisol19',
        rating: 5,
      },
      {
        text: `Mauris donec a magnis sapien etiam sapien undo congue
            augue pretium ligula lectus aenean ipsum magna undo mauris
            lectus laoreet tempor`,
        image: '/images/review-author-4.jpg',
        name: 'Leslie D.',
        identifiers: 'Web Developer',
        rating: 5,
      },
    ],
  },
  { component: 'Divider' },
  {
    component: 'Cta11Section',
    title: 'Teve interesse?',
    text: 'Obtenha resultados agora mesmo! Entre em contato por nosso whatsapp e nos conte sobre seu projeto.',
    image: '/images/img-25.png',
    href: '/contatos',
  },
]

const HomePage = () => {
  return (
    <Layout btnCustomHover="btn-tra-black violet-red-hover" navHoverColor="nav-violet-red-hover">
      {sections.map(({ component, ...props }) => {
        const Component = components[component]
        if (!Component) return null

        return <Component {...props} />
      })}

      <Cta11Section
        title="Teve interesse?"
        text="Obtenha resultados agora mesmo! Entre em contato por nosso whatsapp e nos conte sobre seu projeto."
        image="/images/img-25.png"
        href="/contatos"
      />
    </Layout>
  )
}

export default HomePage
