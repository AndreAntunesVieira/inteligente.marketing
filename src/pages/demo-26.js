import Demo26content1 from "../components/olmo/demo26/Demo26content1";
import Demo26content10 from "../components/olmo/demo26/Demo26content10";
import Demo26content2 from "../components/olmo/demo26/Demo26content2";
import Demo26content2a from "../components/olmo/demo26/Demo26content2a";
import Demo26content3 from "../components/olmo/demo26/Demo26content3";
import Demo26content4 from "../components/olmo/demo26/Demo26content4";
import Demo26content5 from "../components/olmo/demo26/Demo26content5";
import Demo26content6 from "../components/olmo/demo26/Demo26content6";
import Demo26content9 from "../components/olmo/demo26/Demo26content9";
import Demo26faqs2 from "../components/olmo/demo26/Demo26faqs2";
import Demo26features2 from "../components/olmo/demo26/Demo26features2";
import Demo26features8 from "../components/olmo/demo26/Demo26features8";
import Demo26hero1 from "../components/olmo/demo26/Demo26hero1";
import Demo26reviews1 from "../components/olmo/demo26/Demo26reviews1";
import Demo26statistic2 from "../components/olmo/demo26/Demo26statistic2";
import RtlLayout from "../layout/RtlLayout";
const Demo = () => {
  return (
    <RtlLayout
      navLight
      btnCustomHover="btn btn-tra-white orange-red-hover last-link"
      navHoverColor="nav-orange-red-hover"
    >
      <Demo26hero1 />
      <Demo26features2 />
      <hr className="divider" />
      <Demo26content2 />
      <Demo26content5 />
      <Demo26content3 />
      <Demo26content2a />
      <Demo26features8 />
      <Demo26content1 />
      <Demo26content10 />
      <Demo26reviews1 />
      <Demo26content6 />
      <Demo26content9 />
      <Demo26statistic2 />
      <hr className="divider" />
      <Demo26faqs2 />
      <Demo26content4 />
    </RtlLayout>
  );
};

export default Demo;
