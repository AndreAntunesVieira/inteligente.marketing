import Blogs from "../components/Blogs";
import CustomersReviews from "../components/CustomersReviews";
import FaqSection from "../components/sections/FaqSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import Demo4brands2 from "../components/olmo/demo4/Demo4brands2";
import Demo4content1 from "../components/olmo/demo4/Demo4content1";
import Demo4content10 from "../components/olmo/demo4/Demo4content10";
import Demo4content2 from "../components/olmo/demo4/Demo4content2";
import Demo4content3 from "../components/olmo/demo4/Demo4content3";
import Demo4content6 from "../components/olmo/demo4/Demo4content6";
import Demo4content7 from "../components/olmo/demo4/Demo4content7";
import Demo4cta10 from "../components/olmo/demo4/Demo4cta10";
import Demo4features3 from "../components/olmo/demo4/Demo4features3";
import Demo4hero4 from "../components/olmo/demo4/Demo4hero4";
import Demo4newsletter2 from "../components/olmo/demo4/Demo4newsletter2";
import Demo4projects2 from "../components/olmo/demo4/Demo4projects2";
import Demo4statistic2 from "../components/olmo/demo4/Demo4statistic2";
import Layout from "../layout/Layout";

const Demo4 = () => {
  return (
    <Layout navLight navHoverColor="nav-pink-hover">
      <Demo4hero4 />
      <FeaturesSection />
      <hr className="divider" />
      <Demo4statistic2 />
      <hr className="divider" />
      <Demo4content3 />
      <Demo4features3 />
      <Demo4content2 />
      <Demo4content6 />
      <Demo4projects2 />
      <Demo4content10 />
      <hr className="divider" />
      <Demo4content1 />
      <CustomersReviews />
      <Demo4brands2 />
      <hr className="divider" />
      <Demo4content7 />
      <FaqSection />
      <Demo4cta10 />
      <Blogs />
      <hr className="divider" />
      <Demo4newsletter2 />
      <hr className="divider" />
    </Layout>
  );
};

export default Demo4;
