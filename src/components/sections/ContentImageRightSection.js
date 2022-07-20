import classNames from 'classnames'

const ContentImageRightSection = ({ image, children, responsivityClass = 'wide-60' }) => (
  <section id="content-3" className={classNames('content-3 content-section division', responsivityClass)}>
    <div className="container">
      <div className="bottom-row">
        <div className="row d-flex align-items-center">
          <div className="col-md-7 col-lg-6 order-last order-md-2">{children}</div>

          <div className="col-md-5 col-lg-6 order-first order-md-2">
            <div className="img-block right-column wow fadeInLeft">
              <img className="img-fluid" src={image} alt="content-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ContentImageRightSection
