import Counter from "../Counter";

const StatisticSection2 = ({title, items=[]}) => {
  return (
    <section id="statistic-2" className="wide-100 statistic-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6">
            <div className="txt-block right-column wow fadeInLeft">
              <h3 className="h3-xs">
                {title}
              </h3>
            </div>
          </div>


          <div className="col-sm-5 col-md-4 col-lg-3 offset-sm-1 offset-md-2 offset-lg-1">
            <div className="statistic-block wow fadeInUp">
              {items[0]}
            </div>
          </div>
          {/* STATISTIC BLOCK #2 */}
          <div className="col-sm-5 col-md-4 col-lg-2">
            <div className="statistic-block wow fadeInUp">
              {items[1]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticSection2;
