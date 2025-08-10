import React from 'react';

const FaqSection = () => {
  return (
    <section className="faq-con position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="faq_wrapper position-relative" data-aos="zoom-in">
              <figure className="faq-image mb-0">
                <img src="/assets/images/faq-image.jpg" alt="image" className="img-fluid" />
              </figure>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="faq_content" data-aos="fade-up">
              <h6>Faq&apos;s</h6>
              <h2>Frequently Asked Questions</h2>
              <p className="text text-size-16">Duisruam est qui dolorem ipsum quia dolor sit amer adipisci velit, sed nuia non numuam.</p>
              <div className="accordian-section-inner position-relative">
                <div className="accordian-inner">
                  <div id="faq_accordion">
                    <div className="accordion-card">
                      <div className="card-header" id="faqheadingOne">
                        <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#faqcollapseOne" aria-expanded="false" aria-controls="faqcollapseOne">
                          <h5 className="mb-0">Q: Can I customize my insurance plan?</h5>
                        </a>
                      </div>
                      <div id="faqcollapseOne" className="collapse" aria-labelledby="faqheadingOne" data-parent="#faq_accordion">
                        <div className="card-body">
                          <p className="text-size-16 text-left mb-0">Our experienced insurance agents can help you assess your family&apos;s
                            needs and recommend the appropriate coverage options based on factors such as your family size
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Add more FAQ items here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
