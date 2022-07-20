const Brands2Section = ({title, items=[]}) => {
  return (
    <div id="brands-2" className="wide-70 brands-section division">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="brands-title text-center">
              <p className="p-xl">
                {title}
              </p>
            </div>
          </div>
        </div>
        <div className="brands-2-wrapper">
          <div className="row justify-content-md-center row-cols-2 row-cols-sm-3 row-cols-md-5">
            {items.map(item => (
              <div className="col">
                <div className="brand-logo">
                  <a href={item.href}>
                    <img
                      className="img-fluid"
                      src={item.image}
                      alt="brand-logo"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands2Section;
