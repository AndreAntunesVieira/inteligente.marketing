import Link from "next/link";
import { useEffect, useState } from "react";
import { scroll } from "../utils/utils";
import Image from 'next/image'

const Header = ({
  navLight,
  whiteLogo,
  getStartText,
  btnCustomHover,
  navHoverColor,
  singlePage,
}) => {
  useEffect(() => {
    window.addEventListener("scroll", scroll);
  }, []);

  const [toggle, setToggle] = useState(false);
  const [mobileMenuToggle, setMobileMenuToggle] = useState("");

  const toggleFun = () => {
    setToggle(!toggle);
    document.querySelector("body").classList.toggle("wsactive");
  };
  const toggleMenu = (value) => {
    setMobileMenuToggle(mobileMenuToggle !== value ? value : "");
  };

  return (
    <header
      id="header"
      className={`header tra-menu ${navLight ? "navbar-light" : "navbar-dark"}`}
    >
      <div className="header-wrapper">
        {/* MOBILE HEADER */}
        <div className="wsmobileheader clearfix">
          <span className="smllogo">
            <Image src="/logo/colorido-transparente-semborda-520.png" alt="mobile-logo" height={50} width={50} />
          </span>
          <a
            id="wsnavtoggle"
            onClick={() => toggleFun()}
            className="wsanimated-arrow"
          >
            <span />
          </a>
        </div>
        {/* NAVIGATION MENU */}
        <div className="wsmainfull menu clearfix">
          <div className="wsmainwp clearfix">
            {/* HEADER LOGO */}
            <div className="desktoplogo">
              <Link href="/">
                <a className="logo-black">
                  <Image src="/logo/colorido-transparente-semborda-520.png" alt="mobile-logo" height={50} width={50} />
                  Marketing Inteligente
                </a>
              </Link>
            </div>
            <div className="desktoplogo">
              <Link href="/">
                <a className="logo-white">
                  <img
                    src={`${
                      whiteLogo
                        ? "/logo/colorido-transparente-semborda-520.png"
                        : "/logo/colorido-transparente-semborda-520.png"
                    }`}
                    alt="header-logo"
                  />
                </a>
              </Link>
            </div>
            {/* MAIN MENU */}
            <nav className="wsmenu clearfix">
              <div className="overlapblackbg" onClick={() => toggleFun()} />

              <ul
                className={`wsmenu-list ${
                  navHoverColor ? navHoverColor : "nav-skyblue-hover"
                }`}
              >
                {/*<li className="mg_link">*/}
                {/*  <span*/}
                {/*    className={`wsmenu-click ${*/}
                {/*      mobileMenuToggle === "home" ? "ws-activearrow" : ""*/}
                {/*    }`}*/}
                {/*    onClick={() => toggleMenu("home")}*/}
                {/*  >*/}
                {/*    <i className="wsmenu-arrow" />*/}
                {/*  </span>*/}
                {/*  <Link href="#">*/}
                {/*    <a>*/}
                {/*      Home <span className="wsarrow" />*/}
                {/*    </a>*/}
                {/*  </Link>*/}
                {/*  <div*/}
                {/*    className="wsmegamenu w-75 clearfix"*/}
                {/*    style={{*/}
                {/*      display: mobileMenuToggle === "home" ? "block" : "",*/}
                {/*    }}*/}
                {/*  >*/}
                {/*    <div className="container">*/}
                {/*      <div className="row">*/}
                {/*        /!* MEGAMENU LINKS *!/*/}
                {/*        <ul className="col-md-12 col-lg-3 link-list">*/}
                {/*          <li className="fst-li">*/}
                {/*            <Link href="/demo-1">App Landing</Link>*/}
                {/*          </li>*/}
                {/*          <li>*/}
                {/*            <Link href="/demo-2">App Showcase 1</Link>*/}
                {/*          </li>*/}
                {/*          <li>*/}
                {/*            <Link href="/demo-3">Startup Agency</Link>*/}
                {/*          </li>*/}
                {/*          <li>*/}
                {/*            <Link href="/demo-4">Design Agency</Link>*/}
                {/*          </li>*/}
                {/*          <li>*/}
                {/*            <Link href="/demo-5">Software 1</Link>*/}
                {/*          </li>*/}
                {/*          <li>*/}
                {/*            <Link href="/demo-6">SaaS Service 1</Link>*/}
                {/*          </li>*/}
                {/*          <li>*/}
                {/*            <Link href="/demo-7">Digital Service 1</Link>*/}
                {/*          </li>*/}
                {/*        </ul>*/}
                {/*        /!* MEGAMENU LINKS *!/*/}
                {/*        <ul className="col-md-12 col-lg-3 link-list">*/}
                {/*          <li className="fst-li">*/}
                {/*            <Link href="/demo-8">Social Media Marketing</Link>*/}
                {/*          </li>*/}
                {/*          <li>*/}
                {/*            <Link href="/demo-9">Digital Agency</Link>*/}
                {/*          </li>*/}
                {/*          <li>*/}
                {/*            <Link href="/demo-10">SaaS Service 2</Link>*/}
                {/*          </li>*/}
                {/*          <li>*/}
                {/*            <Link href="/demo-11">Desktop Software 1</Link>*/}
                {/*          </li>*/}
                {/*          <li>*/}
                {/*            <Link href="/demo-12">Digital Service 2</Link>*/}
                {/*          </li>*/}
                {/*          <li>*/}
                {/*            <Link href="/demo-13">Software SaaS</Link>*/}
                {/*          </li>*/}
                {/*          <li>*/}
                {/*            <Link href="/demo-14">App Showcase 2</Link>*/}
                {/*          </li>*/}
                {/*        </ul>*/}
                {/*        /!* MEGAMENU LINKS *!/*/}
                {/*        <ul className="col-md-12 col-lg-3 link-list">*/}
                {/*          <li className="fst-li">*/}
                {/*            <Link href="/demo-15">Software 2</Link>*/}
                {/*          </li>*/}
                {/*          <li>*/}
                {/*            <Link href="/demo-16">App Showcase 3</Link>*/}
                {/*          </li>*/}
                {/*          <li>*/}
                {/*            <Link href="/demo-17">Desktop Software 2</Link>*/}
                {/*          </li>*/}
                {/*          <li>*/}
                {/*            <Link href="/demo-18">SEO Company</Link>*/}
                {/*          </li>*/}
                {/*          <li>*/}
                {/*            <Link href="/demo-19">Digital Marketing</Link>*/}
                {/*          </li>*/}
                {/*          <li>*/}
                {/*            <Link href="/demo-20">Cyber Security</Link>*/}
                {/*          </li>*/}
                {/*          <li>*/}
                {/*            <Link href="/demo-21">SaaS Service 3</Link>*/}
                {/*          </li>*/}
                {/*        </ul>*/}
                {/*        /!* MEGAMENU LINKS *!/*/}
                {/*        <ul className="col-md-12 col-lg-3 link-list">*/}
                {/*          <li className="fst-li">*/}
                {/*            <Link href="/demo-22">Marketing Agency</Link>*/}
                {/*          </li>*/}
                {/*          <li>*/}
                {/*            <Link href="/demo-23">Branding Agency</Link>*/}
                {/*          </li>*/}
                {/*          <li>*/}
                {/*            <Link href="/404">404 Page</Link>*/}
                {/*          </li>*/}
                {/*          <li>*/}
                {/*            <Link href="/demo-24">RTL Version #1</Link>*/}
                {/*          </li>*/}
                {/*          <li>*/}
                {/*            <Link href="/demo-25">RTL Version #2</Link>*/}
                {/*          </li>*/}
                {/*          <li>*/}
                {/*            <Link href="/demo-26">RTL Version #3</Link>*/}
                {/*          </li>*/}
                {/*        </ul>*/}
                {/*      </div>*/}
                {/*      /!* End row *!/*/}
                {/*    </div>*/}
                {/*    /!* End container *!/*/}
                {/*  </div>*/}
                {/*</li>*/}

                {/*<li className="nl-simple">*/}
                {/*  <Link href={`${singlePage ? "/features" : "#features-8"}`}>*/}
                {/*    Features*/}
                {/*  </Link>*/}
                {/*</li>*/}
                {/* HEADER BUTTON */}
                <li className="nl-simple">
                  <Link href="/contatos">
                    <a
                      className={`btn btn-tra-white green-hover`}
                    >
                      Peça um orçamento
                    </a>
                  </Link>
                </li>
                {/* HEADER SOCIAL LINKS 													
									<li class="nl-simple white-color header-socials ico-20 clearfix" >
										<span><Link href="#" class="ico-facebook"><span class="flaticon-facebook"></span></Link></span>
										<span><Link href="#" class="ico-twitter"><span class="flaticon-twitter"></span></Link></span>
										<span><Link href="#" class="ico-instagram"><span class="flaticon-instagram"></span></Link></span>
										<span><Link href="#" class="ico-dribbble"><span class="flaticon-dribbble"></span></Link></span>	
									</li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
