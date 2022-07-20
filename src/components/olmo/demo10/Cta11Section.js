import ButtonLink from "../../atoms/ButtonLink";

const Cta11Section = ({title, text, image}) => {
  return (
    <section id="cta-11" className="bg-snow cta-section division wide-60">
      <div className="container">
        <div className="bg-tra-purple cta-11-wrapper">
          <div className="row d-flex align-items-center">
            <div className="col-lg-7 col-lg-7">
              <div className="cta-11-txt">
                <h2 className="h2-xs">{title}</h2>
                <p className="p-lg">
                  {text}
                </p>
                <ButtonLink href="/contatos" color="green">
                  Entre em contato
                </ButtonLink>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="text-end">
                <div className="cta-11-img text-center">
                  <img
                    className="img-fluid"
                    src={image}
                    alt="cta-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta11Section;
