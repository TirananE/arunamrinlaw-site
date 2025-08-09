import React from 'react';
import Image from 'next/image';

const TestimonialSection = () => {
  return (
    <section className="hometestimonial-con traveltestimonial-con position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="testimonial_content text-center" data-aos="fade-up">
              <h6>Testimonials</h6>
              <h2>What Our Clients are Saying</h2>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-12">
            <div className="owl-carousel owl-theme">
              <div className="item">
                <div className="testimonial-box float-left w-100">
                  <ul className="list-unstyled">
                    {[...Array(5)].map((_, i) => (
                      <li key={i}><i className="fa-solid fa-star"></i></li>
                    ))}
                  </ul>
                  <p className="text text-size-16">
                    Repudiandae sint et molestiae non recusandae Itaque earum 
                    rerum hic tenetur a sapiente delectus, ut aut reiciendis volupta
                    maiores alias consequatur aut perferendis.
                  </p>
                  <div className="info position-relative float-left w-100">
                    <figure className="user-img mb-0">
                      <Image 
                        src="/assets/images/testimonial2-personimage1.jpg" 
                        alt="testimonial" 
                        width={80}
                        height={80}
                        className="img-fluid"
                      />
                    </figure>
                    <div className="designation-outer">
                      <span className="name">Alina Parker</span>
                      <span className="mb-0 position">CEO, Global Tech</span>
                    </div>
                    <figure className="quote-img position-absolute mb-0">
                      <Image 
                        src="/assets/images/testimonial2-quoteimg.png" 
                        alt="quote" 
                        width={40}
                        height={40}
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-box float-left w-100">
                  <ul className="list-unstyled">
                    {[...Array(5)].map((_, i) => (
                      <li key={i}><i className="fa-solid fa-star"></i></li>
                    ))}
                  </ul>
                  <p className="text text-size-16">
                    Quisquam est, qui dolorem ipsum quia dolor sit amet, consecte
                    adipisci velit, sed quia non numquam eius modi tempora incidunt 
                    labore dolore magnam aliquam.
                  </p>
                  <div className="info position-relative float-left w-100">
                    <figure className="user-img mb-0">
                      <Image 
                        src="/assets/images/testimonial2-personimage2.jpg" 
                        alt="testimonial" 
                        width={80}
                        height={80}
                        className="img-fluid"
                      />
                    </figure>
                    <div className="designation-outer">
                      <span className="name">Kevin Andrew</span>
                      <span className="mb-0 position">Company Manager</span>
                    </div>
                    <figure className="quote-img position-absolute mb-0">
                      <Image 
                        src="/assets/images/testimonial2-quoteimg.png" 
                        alt="quote" 
                        width={40}
                        height={40}
                        className="img-fluid"
                      />
                    </figure>
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

export default TestimonialSection;