import Demo20brands2 from '../components/olmo/demo20/Demo20brands2'
import Demo20content1 from '../components/olmo/demo20/Demo20content1'
import Demo20content10 from '../components/olmo/demo20/Demo20content10'
import Demo20content2 from '../components/olmo/demo20/Demo20content2'
import Demo20content3 from '../components/olmo/demo20/Demo20content3'
import Demo20content6 from '../components/olmo/demo20/Demo20content6'
import Demo20content7 from '../components/olmo/demo20/Demo20content7'
import Demo20cta3 from '../components/olmo/demo20/Demo20cta3'
import Demo20faqs2 from '../components/olmo/demo20/Demo20faqs2'
import Demo20features2 from '../components/olmo/demo20/Demo20features2'
import Demo20features4 from '../components/olmo/demo20/Demo20features4'
import Demo20features8 from '../components/olmo/demo20/Demo20features8'
import Demo20hero20 from '../components/olmo/demo20/Demo20hero20'
import Demo20reviews4 from '../components/olmo/demo20/Demo20reviews4'
import Demo20statistic4 from '../components/olmo/demo20/Demo20statistic4'
import Layout from '../layout/Layout'
const Demo20 = () => {
  return (
    <Layout btnCustomHover="btn-tra-white violet-red-hover" navHoverColor="nav-violet-red-hover" navLight>
      <Demo20hero20 />
      <Demo20features2 />
      <Demo20content3 />
      <Demo20content10 />
      <Demo20features4 />
      <Demo20content6 />
      <Demo20features8 />
      <Demo20content2 />
      <Demo20content1 />
      <hr className="divider" />
      <Demo20statistic4 />
      <hr className="divider" />
      <Demo20reviews4 />
      <Demo20brands2 /> <hr className="divider" />
      <Demo20content7 />
      <Demo20faqs2 />
      <Demo20cta3 />
    </Layout>
  )
}

export default Demo20
