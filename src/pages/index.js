import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import CallSection from "../components/CallSection";
import SeoHead from "../components/SeoHead";
import TestimoniSection from "../components/TestimoniSection";
import ImageWithText from "../components/ImageWithText";
import {useI18n} from '../utils/languages'

export default function Home() {
  const {getString} = useI18n()
  return (
    <>
      <SeoHead title="Trek Trend Marketing"/>
      <Layout>
        <Hero title={getString('home.hero.title')}
              description={getString('home.hero.subtitle')}
              button={{
                href: "/events/webnar-xyz",
                text: getString('home.hero.button.label')
              }}
              image="/assets/hero.1.webp"

        />


        <ImageWithText
          id="clientes"
          title="Clientes satisfeitos"
          customers={[
            {
              image: '/assets/customer-mesalva.com.png',
              title: "Me Salva! - Plataforma de ensino",
              href: 'https://www.mesalva.com',
              description: `E-commerce completo, uma plataforma de ensino com recursos avançados de simulados, correção de redação e plano de estudos personalizado para cada estudante.`
            },
            {
              reverse: true,
              image: '/assets/customer-vida100rota.com.png',
              title: "Vida 100 Rota - Canal de viagens",
              href: 'https://www.vida100rota',
              description: `De roteiros de viagens a acessórios especializados para viajantes, o site Vida100Rota é o portal dos influenciadores de viagens com o canal de mesmo nome no instagram, @vida100rota.`
            },
            {
              image: '/assets/customer-julifigueiro.com.br.png',
              title: "Juli Figueiró - Influenciadora Digital",
              href: 'https://www.julifigueiro.com.br',
              description: `Influenciadora digital e modelo a ambito nacional, a caminhoneira Juli Figueiró utiliza o site como um portal para seus clientes que consomem seus conteúdos privados na internet.`
            }
          ]}/>
        <TestimoniSection/>
        <CallSection/>
        <Feature
          id="sobre"
          image={`/assets/casal2.webp`}
          title={"Marketing impulsionado por dados"}
          description={
          <>
            <p>Na "Agência Marketing Inteligente", acreditamos que o sucesso em marketing não vem apenas de ideias criativas, mas de uma compreensão profunda e orientada por dados do mercado e do comportamento do consumidor.
              Nosso objetivo principal é fornecer estratégias de marketing que são tanto inovadoras quanto eficazes em atingir o público certo com a mensagem certa.</p>

            <p>Nos alinhamos com parceiros que valorizam a tomada de decisões baseada em dados e estão prontos para explorar novas fronteiras em marketing digital. Juntos, iremos além das abordagens tradicionais, utilizando insights de dados precisos para moldar estratégias que elevam a visibilidade da sua marca e impulsionam o faturamento.</p>

            <p>Com a "Agência Marketing Inteligente" ao seu lado, você terá uma equipe dedicada que não apenas entende os números, mas sabe como transformá-los em ações de marketing eficazes. Vamos juntos, decifrar o código do sucesso de marketing com estratégias impulsionadas por dados que proporcionam resultados tangíveis desde o início.</p>

            <p>"Agência Marketing Inteligente": Onde a ciência de dados encontra a arte do marketing para impulsionar o crescimento do seu negócio.</p>
          </>
          }
        />
      </Layout>
    </>
  );
}
