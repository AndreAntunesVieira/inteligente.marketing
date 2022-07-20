const Demo16hero16 = () => {
  return (
    <section id="hero-16" className="hero-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* HERO IMAGE */}
          <div className="col-md-5 col-lg-6 order-last order-md-2">
            <div className="hero-16-img pc-25 text-center">
              <img
                className="img-fluid"
                src="/images/img-02.png"
                alt="hero-image"
              />
            </div>
          </div>
          {/* HERO TEXT */}
          <div className="col-md-7 col-lg-6 order-first order-md-2">
            <div className="hero-16-txt">
              {/* Title */}
              <h2 className="h2-sm">
                Post your photos anywhere and see it everywhere
              </h2>
              {/* Text */}
              <p className="p-xl">
                Feugiat primis ligula risus auctor egestas and augue viverra
                mauri tortor in iaculis magna feugiat
              </p>
              {/* STORE BADGES */}
              <div className="stores-badge mb-25">
                {/* AppStore */}
                <a href="#" className="store">
                  <img
                    className="appstore"
                    src="/images/appstore.png"
                    alt="appstore-badge"
                  />
                </a>
                {/* Google Play */}
                <a href="#" className="store">
                  <img
                    className="googleplay"
                    src="/images/googleplay.png"
                    alt="googleplay-badge"
                  />
                </a>
                {/* Aamazon Market 
									<a href="#" class="store">
										<img class="amazon" src="/images/amazon.png" alt="amazon-badge" />
									</a>  */}
                {/* Mac AppStore 
									<a href="#" class="store">
										<img class="mac-appstore" src="/images/macstore.png" alt="macstore-badge" />
									</a> */}
                {/* Microsoft Store  
									<a href="#" class="store">
										<img class="microsoft" src="/images/microsoft.png" alt="microsoft-badge" />
									</a> */}
              </div>{" "}
              {/* END STORE BADGES */}
              {/* Advantages List */}
              <ul className="advantages">
                <li className="first-li">
                  <p>Current version 2.13</p>
                </li>
                <li className="last-li">
                  <p>14 Days Free Trial</p>
                </li>
              </ul>
            </div>
          </div>{" "}
          {/* END HERO TEXT */}
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo16hero16;
