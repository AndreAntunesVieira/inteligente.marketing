import FaqSection from "../../components/sections/FaqSection"
import Features from "../../components/sections/FeaturesSection"
import Demo10blog1 from "../../components/olmo/demo10/Demo10blog1"
import Brands2Section from "../../components/sections/Brands2Section"
import Content5Section from "../../components/sections/Content5Section"
import ContentImageRightSection from "../../components/sections/ContentImageRightSection"
import Content3Section from "../../components/olmo/demo10/Content3Section"
import Content4Section from "../../components/olmo/demo10/Content4Section"
import Content6Section from "../../components/olmo/demo10/Content6Section"
import Cta11Section from "../../components/sections/Cta11Section"
import Features2Section from "../../components/sections/Features4Section"
import HeroWithVideoSection from "../../components/sections/HeroWithVideoSection"
import Demo10newsletter2 from "../../components/olmo/demo10/Demo10newsletter2"
import Reviews4Section from "../../components/sections/Reviews4Section"
import StatisticSection2 from "../../components/sections/StatisticSection2"
import Layout from "../../layout/Layout"
import Counter from "../../components/Counter"
import ContentCenterSection from "../../components/sections/ContentCenterSection"
import ContentImageLeftSection from "../../components/sections/ContentImageLeftSection"

const HomePage = () => (
  <Layout btnCustomHover="btn-tra-black violet-red-hover" navHoverColor="nav-violet-red-hover">
    <HeroWithVideoSection
      title="HeroWithVideoSection"
      buttons={[
        { children: "Chamar no Whatspp", className: "btn-green blue-hover", href: "https://wa.me/5551982073632" },
        { children: "Pedir orçamento", className: "btn-tra-green tra-blue-hover", href: "/contatos" },
      ]}
      videoId="SZEflIVnhH8"
      videoImage="images/dashboard-07.png"
    />
    <Features
      title="Serviços oferecidos"
      text="Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis a libero tempus, blandit and cursus varius and magnis sapien"
      items={[
        {
          image: "/images/img-21.png",
          title: "Friendly Interface",
          text: "Feugiat primis ultric",
        },
        {
          image: "/images/img-22.png",
          title: "Extremely Flexible",
          text: "Feugiat primis ultrice semper lacus cursus feugiat undo primis ultrice a ligula an auctor tempus magnis",
        },
        {
          image: "/images/img-23.png",
          title: "Strong Encryption",
          text: "Feugiat primis ultrice semper lacus cursus feugiat undo primis ultrice a ligula an auctor tempus magnis",
        },
      ]}
    />
    <Content5Section
      title="Work smarter with powerful features"
      sectionId="Fast Performance"
      image="/images/img-13.png"
      text={`<ul class="simple-list">
            <li>
                Fringilla risus, luctus mauris auctor euismod an iaculis
                luctus magna purus pretium ligula purus and quaerat sapien
                rutrum mr
            </li>
            <li>
                Quaerat st
            </li>
            <li>
                Nemo ipsam egestas volute turpis dolores ligula and
                aliquam qs
            </li>
          </ul>`}
    />
    <ContentCenterSection
      responsivityClass="widet-60"
      title="Beautiful Creative Solutions"
      text="Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis a libero tempus, blandit and cursus varius and magnis
                sapien"
    />
    <ContentImageLeftSection
      responsivityClass={null}
      image="/images/img-06.png"
      sectionId="Extremely Flexible"
      title="More productivity with less effort"
    >
      <p className="p-lg">
        Quaerat sodales sapien euismod blandit purus a purus ipsum primis in cubilia laoreet augue luctus magna dolor
        luctus and egestas sapien egestas vitae nemo volute
      </p>
      {/* Text */}
      <p className="p-lg">
        Quaerat sodales sapien euismod blandit at vitae ipsum primis undo and cubilia laoreet augue and luctus magna
        dolor luctus at egestas sapien vitae nemo egestas volute and turpis dolores aliquam quaerat sodales a sapien
      </p>
    </ContentImageLeftSection>
    <ContentImageRightSection responsivityClass="wideb-60" image="/images/img-09.png">
      <div className="txt-block left-column wow fadeInRight">
        {/* TEXT BOX */}
        <div className="txt-box mb-20">
          {/* Title */}
          <h5 className="h5-lg">Advanced Performance Made Easy</h5>
          {/* Text */}
          <p className="p-lg">
            Quaerat sodales sapien euismod blandit at vitae ipsum primis undo and cubilia laoreet augue and luctus
            magna dolor luctus at egestas sapien vitae nemo egestas volute and turpis dolores aliquam quaerat sodales
            a sapien
          </p>
        </div>
        {/* TEXT BOX */}
        <div className="txt-box">
          {/* Title */}
          <h5 className="h5-lg">Creative Alternative Solutions</h5>
          {/* List */}
          <ul className="simple-list">
            <li className="list-item">
              <p className="p-lg">
                Fringilla risus, luctus mauris auctor euismod an iaculis luctus magna purus pretium ligula purus and
                quaerat
              </p>
            </li>
            <li className="list-item">
              <p className="p-lg">
                Nemo ipsam egestas volute turpis dolores undo ultrice aliquam quaerat at sodales sapien purus
              </p>
            </li>
          </ul>
        </div>
      </div>
    </ContentImageRightSection>
    <Content3Section />
    <Content4Section />
    <Features2Section
      title="Simple to Use, Easy to Love"
      text="Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis a libero tempus, blandit and cursus varius and magnis sapien"
      items={[
        {
          background: "/images/ico-bkg.png",
          icon: "flaticon-dashboard",
          title: "Friendly Interface",
          text: "Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor",
        },
        {
          background: "/images/ico-bkg.png",
          icon: "flaticon-tool",
          title: "Powerful Options",
          text: "Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor",
        },
        {
          background: "/images/ico-bkg.png",
          icon: "flaticon-increase-1",
          title: "Fast Performance",
          text: "Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor",
        },
        {
          background: "/images/ico-bkg.png",
          icon: "flaticon-layers",
          title: "Extensions &amp; Addons",
          text: "Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor",
        },
        {
          background: "/images/ico-bkg.png",
          icon: "flaticon-album",
          title: "Video Tutorials",
          text: "Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor",
        },
        {
          background: "/images/ico-bkg.png",
          icon: "flaticon-24-hours",
          title: "Expert 24/7 Support",
          text: "Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor",
        },
      ]}
    />
    <hr className="divider" />
    <StatisticSection2
      title="More than 65,000 users around the world are already using OLMO actively"
      items={[
        <>
          <h2 className="h2-title-xs statistic-number">
            <Counter end={65} />k
          </h2>
          <p className="p-lg mt-20">
            Active downloads <br /> from the community
          </p>
        </>,
        <>
          <h2 className="h2-title-xs statistic-number">
            <Counter end={4.86} decimals={2} />
          </h2>
          {/* Rating */}
          <div className="txt-block-rating ico-15 yellow-color">
            <span className="flaticon-star-1" />
            <span className="flaticon-star-1" />
            <span className="flaticon-star-1" />
            <span className="flaticon-star-1" />
            <span className="flaticon-star-half-empty" />
          </div>
          <p className="p-lg txt-400">8,376 Rating</p>
        </>,
      ]}
    />
    <hr className="divider" />
    <Reviews4Section
      title="Stories From Our Customers"
      text="Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis a libero tempus, blandit and cursus varius and magnis sapien"
      items={[
        {
          text: "Etiam sapien sagittis congue augue massa varius egestas ultrice varius magna undo tempus aliquet undo cursus suscipit cubilia laoreet augue",
          image: "/images/review-author-1.jpg",
          name: "Scott Boxer",
          identifiers: "@scott_boxer",
          rating: 5,
        },
        {
          text: `At sagittis congue augue egestas magna ipsum vitae a purus
                      ipsum primis in cubilia laoreet augue egestas luctus and
                      donec ultrice ligula magna at suscipit lectus gestas augue
                      into cubilia`,
          image: "/images/review-author-2.jpg",
          name: "Joel Peterson",
          identifiers: "Internet Surfer",
          rating: 4,
        },
        {
          text: `Mauris donec magnis sapien sapien congue augue egestas et
          ultrice vitae purus diam integer congue magna ligula undo
          egestas magna suscipit`,
          image: "/images/review-author-3.jpg",
          name: "Marisol19",
          identifiers: "@marisol19",
          rating: 5,
        },
        {
          text: `Mauris donec a magnis sapien etiam sapien undo congue
            augue pretium ligula lectus aenean ipsum magna undo mauris
            lectus laoreet tempor`,
          image: "/images/review-author-4.jpg",
          name: "Leslie D.",
          identifiers: "Web Developer",
          rating: 5,
        },
      ]}
    />
    <Brands2Section
      title="This guys are using OLMO and they are more than happier ever"
      items={[
        { href: "#", image: "/images/brand-1.png" },
        { href: "#", image: "/images/brand-2.png" },
        { href: "#", image: "/images/brand-3.png" },
        { href: "#", image: "/images/brand-4.png" },
        { href: "#", image: "/images/brand-5.png" },
        { href: "#", image: "/images/brand-8.png" },
        { href: "#", image: "/images/brand-7.png" },
        { href: "#", image: "/images/brand-5.png" },
        { href: "#", image: "/images/brand-8.png" },
        { href: "#", image: "/images/brand-2.png" },
      ]}
    />
    <Content6Section image="/images/img-20.png" />
    <FaqSection
      title="Got Questions? Look Here"
      text="Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis a libero tempus, blandit and cursus varius and magnis
                sapien"
      items={[
        {
          question: "Can I see OLMO in action before purchasing?",
          answer: `Etiam amet mauris suscipit in odio integer congue metus
                  vitae arcu mollis blandit ultrice ligula egestas and magna
                  suscipit lectus magna suscipit luctus blandit vitae`,
        },
        {
          question: "What are the requirements for using OLMO?",
          answer: `An enim nullam tempor sapien gravida a donec ipsum enim an porta justo integer at velna vitae auctor integer congue undo magna at pretium purus pretium`,
        },
        {
          question: "Can I use OLMO on different devices?",
          answer: `An enim nullam tempor sapien gravida a donec ipsum enim an porta justo integer at velna vitae auctor integer congue undo magna at pretium purus pretium`,
        },
        {
          question: "Can I use OLMO on different devices?",
          answer: `<ul class="simple-list">
              <li>
                  Fringilla risus, luctus mauris orci auctor purus ligula euismod pretium purus pretium rutrum tempor sapien
              </li>
              <li>
                  Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium a purus
              </li>
            </ul>`,
        },
      ]}
    />
    <Cta11Section
      title="Ready to Join OLMO?"
      text="Donec vel sapien augue integer urna vel turpis cursus porta, mauris augue luctus dolor velna auctor congue tempus"
      image="/images/img-25.png"
    />
    <Demo10blog1 />
    <hr className="divider" />
    <Demo10newsletter2 />
    <hr className="divider" />
  </Layout>
)

export default HomePage
