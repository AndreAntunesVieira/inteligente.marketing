import CustomersReviews from '../components/CustomersReviews'
import FaqSection from '../components/sections/FaqSection'
import FeaturesSection from '../components/sections/FeaturesSection'
import Demo1content2a from '../components/olmo/demo1/Demo1content2a'
import Demo5brands2 from '../components/olmo/demo5/Demo5brands2'
import Demo5content10 from '../components/olmo/demo5/Demo5content10'
import Demo5content2 from '../components/olmo/demo5/Demo5content2'
import Demo5content6 from '../components/olmo/demo5/Demo5content6'
import Demo5cta11 from '../components/olmo/demo5/Demo5cta11'
import Demo5features4 from '../components/olmo/demo5/Demo5features4'
import Demo5hero1 from '../components/olmo/demo5/Demo5hero1'
import Demo5statistic2 from '../components/olmo/demo5/Demo5statistic2'
import Layout from '../layout/Layout'

const Demo5 = () => {
  return (
    <Layout navHoverColor="nav-violet-red-hover">
      <Demo5hero1 />
      <Demo5statistic2 />
      <hr className="divider" />
      <FeaturesSection />
      <Demo5content2 />
      <Demo5content6 />
      <Demo5content10 />
      <Demo5features4 />
      <CustomersReviews />
      <Demo1content2a />
      <hr className="divider" />
      <Demo5brands2 />
      <hr className="divider" />
      <FaqSection />
      <Demo5cta11 />
    </Layout>
  )
}

export default Demo5
