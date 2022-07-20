const FeaturesSection = ({ title, text, items = [] }) => {
  return (
    <section id="features-8" className="wide-60 features-section division">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-70">
              <h2 className="h2-md">{title}</h2>
              <p className="p-xl">
                {text}
              </p>
            </div>
          </div>
        </div>
        <div className="fbox-8-wrapper text-center">
          <div className="row row-cols-1 row-cols-md-3">
            {items.map(item => (
              <div className="col">
                <div className="fbox-8 mb-40 wow fadeInUp">
                  <div className="fbox-img bg-whitesmoke-gradient">
                    <img
                      className="img-fluid"
                      src={item.image}
                      alt="feature-icon"
                    />
                  </div>
                  <h5 className="h5-md">{item.title}</h5>
                  <p className="p-lg">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
