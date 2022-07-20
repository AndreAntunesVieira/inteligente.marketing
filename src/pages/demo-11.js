import FaqSection from "../components/sections/FaqSection";
import Demo11brands2 from "../components/olmo/demo11/Demo11brands2";
import Demo11content3 from "../components/olmo/demo11/Demo11content3";
import Demo11content5 from "../components/olmo/demo11/Demo11content5";
import Demo11content7 from "../components/olmo/demo11/Demo11content7";
import Demo11content9 from "../components/olmo/demo11/Demo11content9";
import Demo11cta9 from "../components/olmo/demo11/Demo11cta9";
import Demo11features4 from "../components/olmo/demo11/Demo11features4";
import Demo11features8 from "../components/olmo/demo11/Demo11features8";
import Demo11hero11 from "../components/olmo/demo11/Demo11hero11";
import Demo11reviews1 from "../components/olmo/demo11/Demo11reviews1";
import Demo11statistic2 from "../components/olmo/demo11/Demo11statistic2";
import Layout from "../layout/Layout";

const Demo11 = () => {
  return (
    <Layout
      btnCustomHover="btn-pink tra-grey-hover"
      navHoverColor="nav-pink-hover"
    >
      <Demo11hero11 />
      <Demo11content3 />
      <Demo11content9 />
      <Demo11features4 />
      <Demo11content5 />
      <Demo11features8 />
      <Demo11reviews1 />
      <Demo11brands2 />
      <hr className="divider" />
      <Demo11content7 />
      <hr className="divider" />
      <Demo11statistic2 />
      <hr className="divider" />
      <FaqSection />
      <Demo11cta9 />
    </Layout>
  );
};

export default Demo11;
