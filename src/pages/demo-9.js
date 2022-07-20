import FaqSection from "../components/sections/FaqSection";
import Demo9brands2 from "../components/olmo/demo9/Demo9brands2";
import Demo9content10a from "../components/olmo/demo9/Demo9content10a";
import Demo9content2 from "../components/olmo/demo9/Demo9content2";
import Demo9content3 from "../components/olmo/demo9/Demo9content3";
import Demo9content5 from "../components/olmo/demo9/Demo9content5";
import Demo9content6 from "../components/olmo/demo9/Demo9content6";
import Demo9content7 from "../components/olmo/demo9/Demo9content7";
import Demo9features4 from "../components/olmo/demo9/Demo9features4";
import Demo9features8 from "../components/olmo/demo9/Demo9features8";
import Demo9hero9 from "../components/olmo/demo9/Demo9hero9";
import Demo9pricing3 from "../components/olmo/demo9/Demo9pricing3";
import Demo9statistic4 from "../components/olmo/demo9/Demo9statistic4";
import Democontent10 from "../components/olmo/demo9/Democontent10";
import Democta4 from "../components/olmo/demo9/Democta4";
import Demoreviews1 from "../components/olmo/demo9/Demoreviews1";
import Layout from "../layout/Layout";

const Demo9 = () => {
  return (
    <Layout btnCustomHover="btn-skyblue tra-skyblue-hover">
      <Demo9hero9 />
      <Demo9features4 />
      <Demo9content5 />
      <Demo9content2 />
      <Demo9features8 />
      <Demo9content7 />
      <Demo9content3 />
      <Democontent10 />
      <Demoreviews1 />
      <Demo9brands2 />
      <Demo9content6 />
      <Demo9content10a />
      <hr className="divider" />
      <Demo9statistic4 />
      <hr className="divider" />
      <FaqSection />
      <Demo9pricing3 />
      <Democta4 />
    </Layout>
  );
};

export default Demo9;
