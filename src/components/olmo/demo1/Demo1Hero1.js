import { VideoWithBtn } from "../../VideoContent";

const Demo1Hero1 = () => {
  return (
    <section id="hero-1" className="bg-scroll hero-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* HERO TEXT */}
          <div className="col-md-7 col-lg-6">
            <div className="hero-1-txt white-color wow fadeInRight">
              {/* Title */}
              <h2 className="h2-md">
                Share text, voice, photos, videos and GIFs files for free
              </h2>
              {/* Text */}
              <p className="p-xl">
                Feugiat primis a ligula undo auctor mauris auctor laoreet and
                pretium augue an egestas cubilia
              </p>
              {/* Buttons Group */}
              <div className="btns-group mb-20">
                <a
                  href="#content-3"
                  className="btn btn-orange-red tra-white-hover mr-15"
                >
                  Learn More
                </a>
                <VideoWithBtn />
              </div>
              {/* Advantages List */}
              <ul className="advantages">
                <li className="first-li">
                  <p>14 days free trial</p>
                </li>
                <li className="last-li">
                  <p>No credit card</p>
                </li>
              </ul>
            </div>
          </div>
          {/* END HERO TEXT */}
          {/* HERO IMAGE */}
          <div className="col-md-5 col-lg-6">
            <div className="hero-1-img wow fadeInLeft">
              <img
                className="img-fluid"
                src="/images/hero-1-img.png"
                alt="hero-image"
              />
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
      {/* WAVE SHAPE BOTTOM */}
      <div className="wave-shape-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 130">
          <path
            fill="#ffffff"
            fillOpacity={1}
            d="M0,64L120,80C240,96,480,128,720,128C960,128,1200,96,1320,80L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Demo1Hero1;
