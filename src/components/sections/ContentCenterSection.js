import classNames from 'classnames'

const ContentCenterSection = ({ title, text, responsivityClass = 'wide-60' }) => (
  <section id="content-3" className={classNames('content-3  content-section division', responsivityClass)}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          <div className="section-title title-01 mb-70">
            <h2 className="h2-md">{title}</h2>
            <p className="p-xl">{text}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ContentCenterSection
