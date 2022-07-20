import Link from 'next/dist/client/link'

const FaqSection = ({ title, text, items = [] }) => {
  const chunkSize = Math.ceil(items.length / 2)
  const questionHolders = [items.slice(0, chunkSize), items.slice(chunkSize, items.length)]

  return (
    <section id="faqs-2" className="wide-60 faqs-section division">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-80">
              <h2 className="h2-md">{title}</h2>
              <p className="p-xl">{text}</p>
            </div>
          </div>
        </div>

        <div className="faqs-2-questions">
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col">
              <div className="questions-holder pr-15">
                {questionHolders[0].map(item => (
                  <div className="question wow fadeInUp">
                    {/* Question */}
                    <h5 className="h5-md">{item.question}</h5>
                    {/* Answer */}
                    <p className="p-lg" dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </div>
                ))}
              </div>
            </div>

            <div className="col">
              <div className="questions-holder pl-15">
                {questionHolders[1].map(item => (
                  <div className="question wow fadeInUp">
                    {/* Question */}
                    <h5 className="h5-md">{item.question}</h5>
                    {/* Answer */}
                    <p className="p-lg" dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="more-questions">
              <h5 className="h5-sm">
                Restou alguma dúvida?{' '}
                <Link href="/Users/andre/projects/inteligente.marketing.site/src/pages/contatos">
                  <a>Deixe sua pergunta aqui</a>
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
