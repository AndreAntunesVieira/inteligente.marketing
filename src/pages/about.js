import About2 from '../components/about/About2'
import Aboutbrands2 from '../components/about/Aboutbrands2'
import Aboutcontent3 from '../components/about/Aboutcontent3'
import Aboutcontent5 from '../components/about/Aboutcontent5'
import Aboutcta5 from '../components/about/Aboutcta5'
import Aboutfeatures4 from '../components/about/Aboutfeatures4'
import Aboutfeatures8 from '../components/about/Aboutfeatures8'
import Aboutreviews1 from '../components/about/Aboutreviews1'
import Aboutstatistic4 from '../components/about/Aboutstatistic4'
import Aboutteam1 from '../components/about/Aboutteam1'
import Layout from '../layout/Layout'

const about = () => {
  return (
    <Layout btnCustomHover="btn btn-skyblue tra-grey-hover last-link" singlePage>
      <About2 />
      <Aboutfeatures4 />
      <hr className="divider" />
      <Aboutstatistic4 />
      <hr className="divider" />
      <Aboutcontent3 />
      <Aboutfeatures8 />
      <Aboutcontent5 />
      <Aboutteam1 />
      <Aboutreviews1 />
      <hr className="divider" />
      <Aboutbrands2 />
      <Aboutcta5 />
    </Layout>
  )
}

export default about
