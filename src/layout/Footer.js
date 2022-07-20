const Footer = () => {
  return (
    <footer id="footer-1" className="footer division">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-info mb-40">
              <img
                className="footer-logo mb-25"
                src="/images/logo-01.png"
                alt="footer-logo"
              />
              <p className="p-md">
                Aliquam nullam tempor sapien donec and gravida congue an ipsum
                porta justo velna auctor magna and laoreet augue an auctor
                gravida donec
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="footer-links mb-40">
              <h6 className="h6-xl">Company</h6>
              <ul className="foo-links text-secondary clearfix">
                <li>
                  <p className="p-md">
                    <a href="#">About Us</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">Careers</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">Press &amp; Media</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">Contact Us</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="footer-links mb-40">
              <h6 className="h6-xl">Discover</h6>
              <ul className="foo-links text-secondary clearfix">
                <li>
                  <p className="p-md">
                    <a href="#">Our Blog</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">Advertising</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">Plans &amp; Pricing</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">Testimonials</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="footer-links mb-40">
              <h6 className="h6-xl">Legal</h6>
              <ul className="foo-links text-secondary clearfix">
                <li>
                  <p className="p-md">
                    <a href="#">Terms of Use</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">Privacy Policy</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">Cookie Policy</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">Site Map</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="footer-links mb-40">
              <h6 className="h6-xl">Support</h6>
              <ul className="foo-links text-secondary clearfix">
                <li>
                  <p className="p-md">
                    <a href="#">FAQs</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">Editor Help</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">Community</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="#">Live Chatting</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="bottom-footer">
          <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
            <div className="col">
              <div className="footer-copyright">
                <p>
                  © 2010 - {new Date().getFullYear()} OLMO. All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col">
              <ul className="bottom-footer-list text-secondary text-end">
                <li className="first-li">
                  <p>
                    <a href="#">Facebook</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">Twitter</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">LinkedIn</a>
                  </p>
                </li>
                <li className="last-li">
                  <p>
                    <a href="#">Dribbble</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
