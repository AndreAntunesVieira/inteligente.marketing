import styled from 'styled-components'

const ServicesSection = () => (
  <Container>
    <div className="container">

      <h2>Serviços Oferecidos</h2>
      <div className="serives">

        <div>
          <img width={30}
            src="https://cdn-bpmjd.nitrocdn.com/hYZKWztTpnUwvsNUnifELwSjXhiJqZdC/assets/static/optimized/rev-3116aeb/wp-content/uploads/2021/05/Design-sem-nome-24.png" />
          <h3>Gestão de redes sociais</h3>
        </div>

        <div>
          <img width={30}
            src="https://cdn-bpmjd.nitrocdn.com/hYZKWztTpnUwvsNUnifELwSjXhiJqZdC/assets/static/optimized/rev-3116aeb/wp-content/uploads/2021/05/Design-sem-nome-24.png" />
          <h3>Anúncios Pagos</h3>
          <p>Google Ads + Facebook Ads</p>
        </div>
        <div>
          <img width={30}
            src="https://cdn-bpmjd.nitrocdn.com/hYZKWztTpnUwvsNUnifELwSjXhiJqZdC/assets/static/optimized/rev-3116aeb/wp-content/uploads/2021/05/Design-sem-nome-24.png" />
          <h3>Google Ads</h3>
          <p>Seja encontrado por pessoas que precisam de você. Sua empresa nas primeiras posições de buscas no
            Google.</p>
        </div>
        <div>
          <img width={30}
            src="https://cdn-bpmjd.nitrocdn.com/hYZKWztTpnUwvsNUnifELwSjXhiJqZdC/assets/static/optimized/rev-3116aeb/wp-content/uploads/2021/05/Design-sem-nome-24.png" />
          <h3>Marketing De Conteúdo</h3>
          <p>Conteúdos que engajam e divertem seu público é a nova forma de criar relacionamento nos dias de hoje. Nós
            criamos tudo para você.</p>
        </div>


      </div>
    </div>

  </Container>
)

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-position: center 20%;
  font-size: 1.5em;

  .container {
    min-height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .serives {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 32px;

      > div {
        min-width: 200px;
        min-height: 200px;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid;
        padding: 16px;
      }
    }
  }
`
export default ServicesSection
