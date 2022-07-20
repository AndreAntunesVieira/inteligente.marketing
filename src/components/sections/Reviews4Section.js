import Slider from 'react-slick'
import ReviewRating from '../atoms/ReviewRating'

const defaultSettings = {
  dots: true,
  infinite: true,
  arrows: false,
  autoPlay: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const Reviews4Section = ({ title = '', text = '', settings = {}, items = [] }) => (
  <section id="reviews-4" className="rel pt-100 reviews-section division">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          <div className="section-title title-01 mb-60">
            <h2 className="h2-md">{title}</h2>
            <p className="p-xl">{text}</p>
          </div>
        </div>
      </div>
    </div>

    <div className="reviews-4-holder">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Slider
              {...{ ...defaultSettings, ...settings }}
              className="owl-carousel owl-theme reviews-4-wrapper slickmargin"
            >
              {items.map(item => (
                <div className="review-4">
                  <div className="review-4-txt">
                    <p className="p-lg">{item.text}</p>
                    <div className="author-data clearfix">
                      <div className="review-avatar">
                        <img src={item.image} alt="review-avatar" />
                      </div>

                      <div className="review-author">
                        <h6 className="h6-xl">{item.name}</h6>
                        <p className="p-md">{item.identifiers}</p>
                        <ReviewRating rating={item.rating} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Reviews4Section
