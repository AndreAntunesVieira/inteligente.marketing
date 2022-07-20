const Content5Section = ({title, text, sectionId, image}) => {
  return (
    <section id="content-5" className="content-5 ws-wrapper content-section division" >
      <div className="container">
        <div className="content-5-wrapper bg-whitesmoke">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-6">
              <div className="txt-block left-column wow fadeInRight">
                <span className="section-id purple-color txt-upcase">
                  {sectionId}
                </span>
                <h2 className="h2-xs">{title}</h2>
                <div dangerouslySetInnerHTML={{__html: text}} />
              </div>
            </div>

            <div className="col-md-5 col-lg-6">
              <div className="img-block right-column wow fadeInLeft">
                <img
                  className="img-fluid"
                  src={image}
                  alt="content-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content5Section;
