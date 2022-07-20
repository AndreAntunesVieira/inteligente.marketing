import classNames from "classnames";

const ContentImageLeftSection = ({title, children, sectionId, image, responsivityClass = 'wide-60'}) => {
  return (
    <section id="content-3" className={classNames("content-3 content-section division", responsivityClass)} >
      <div className="container">
        <div className="top-row pb-50">
          <div className="row d-flex align-items-center">
            <div className="col-md-5 col-lg-6">
              <div className="img-block left-column wow fadeInRight">
                <img className="img-fluid" src={image} alt="content-image" />
              </div>
            </div>

            <div className="col-md-7 col-lg-6">
              <div className="txt-block right-column wow fadeInLeft">
                <span className="section-id purple-color txt-upcase">
                  {sectionId}
                </span>
                <h2 className="h2-xs">{title}</h2>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentImageLeftSection;
