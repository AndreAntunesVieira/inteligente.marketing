import { VideoImage } from '../VideoContent'
import classNames from 'classnames'

const HeroWithVideoSection = ({ title, buttons = [], videoId, videoImage }) => (
  <section id="hero-10" className="bg-scroll rel hero-section division">
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col text-center">
          <div className="hero-10-txt">
            <h2 className="h2-md wow fadeInUp">{title}</h2>
            <div className="btns-group wow fadeInUp">
              {buttons.map(button => (
                <a className={classNames('btn mr-15', button.className)} href={button.href}>
                  {button.children}
                </a>
              ))}
            </div>
          </div>
          <div className="hero-10-img video-preview wow fadeInUp">
            <VideoImage extraClass="video-btn video-btn-xl bg-violet-red ico-90" id={videoId} img={videoImage} />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HeroWithVideoSection
