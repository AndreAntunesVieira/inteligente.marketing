import FaqSection from "../components/sections/FaqSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import Demo10blog1 from "../components/olmo/demo10/Demo10blog1";
import Brands2Section from "../components/sections/Brands2Section";
import Content3Section from "../components/olmo/demo10/Content3Section";
import ContentImageRightSection from "../components/sections/ContentImageRightSection";
import Content5Section from "../components/sections/Content5Section";
import Content6Section from "../components/olmo/demo10/Content6Section";
import HighlightCard3Section from "../components/olmo/demo10/Content4Section";
import Cta11Section from "../components/olmo/demo10/Cta11Section";
import Features4Section from "../components/sections/Features4Section";
import HeroWithVideoSection from "../components/sections/HeroWithVideoSection";
import Demo10newsletter2 from "../components/olmo/demo10/Demo10newsletter2";
import Reviews4Section from "../components/sections/Reviews4Section";
import StatisticSection2 from "../components/sections/StatisticSection2";
import Layout from "../layout/Layout";
const Demo10 = () => {
  return (
    <Layout
      btnCustomHover="btn-tra-black violet-red-hover"
      navHoverColor="nav-violet-red-hover"
    >
      <HeroWithVideoSection />
      <FeaturesSection />
      <Content5Section />
      <ContentImageRightSection />
      <HighlightCard3Section />
      <HighlightCard3Section />
      <Features4Section />
      <hr className="divider" />
      <StatisticSection2 />
      <hr className="divider" />
      <Reviews4Section />
      <Brands2Section />
      <Content6Section />
      <FaqSection />
      <Cta11Section />
      <Demo10blog1 />
      <hr className="divider" />
      <Demo10newsletter2 />
      <hr className="divider" />
    </Layout>
  );
};

export default Demo10;
