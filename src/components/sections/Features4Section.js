const Features4Section = ({ title, text, items = [] }) => (
  <section id="features-4" className="wide-60 features-section division">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          <div className="section-title title-01 mb-70">
            <h2 className="h2-md">{title}</h2>
            <p className="p-xl">{text}</p>
          </div>
        </div>
      </div>

      <div className="fbox-4-wrapper fbox-4-wide">
        <div className="row row-cols-1 row-cols-md-2">
          {items.map(item => (
            <div className="col">
              <div className="fbox-4 pr-25 mb-40 wow fadeInUp">
                <div className="fbox-ico">
                  <div className="ico-60 shape-ico violet-red-color">
                    <img className="ico-bkg" src={item.background} alt="ico-bkg" />
                    <span className={item.icon} />
                  </div>
                </div>
                <div className="fbox-txt">
                  <h5 className="h5-md">{item.title}</h5>
                  <p className="p-lg">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Features4Section
