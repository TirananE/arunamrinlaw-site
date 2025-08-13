import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TypeSection = () => {
  return (
    <section id="type" className="type-con position-relative">
      <div className="container-fluid">
        <div className="row" data-aos="fade-up">
          <div className="col-lg-3 col-sm-6 col-12 p-0">
            <Link href="/portfolio">
              <div className="type-box box1 position-relative">
                <div className="number position-absolute">
                  <span className=" mb-0">01.</span>
                </div>
                <figure className="mb-0">
                  <Image 
                    src="/assets/images/type-image1.jpg" 
                    alt="type" 
                    width={400}
                    height={400}
                    className="img-fluid"
                  />
                </figure>
                <div className="content position-absolute">
                  <h3 className="">Comprehensive Coverage</h3>
                  <p className="text-size-16 ">Exercitationem ullam corporis</p>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-sm-6 col-12 p-0">
            <Link href="/portfolio">
              <div className="type-box box1 position-relative">
                <div className="number position-absolute">
                  <span className=" mb-0">02.</span>
                </div>
                <figure className="mb-0">
                  <Image 
                    src="/assets/images/type-image2.jpg" 
                    alt="type" 
                    width={400}
                    height={400}
                    className="img-fluid"
                  />
                </figure>
                <div className="content position-absolute">
                  <h3 className="">24/7 Assistance</h3>
                  <p className="text-size-16 ">Maximus elementum odio</p>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-sm-6 col-12 p-0">
            <Link href="/portfolio">
              <div className="type-box box2 position-relative">
                <div className="number position-absolute">
                  <span className=" mb-0">03.</span>
                </div>
                <figure className="mb-0">
                  <Image 
                    src="/assets/images/type-image3.jpg" 
                    alt="type" 
                    width={400}
                    height={400}
                    className="img-fluid"
                  />
                </figure>
                <div className="content position-absolute">
                  <h3 className="">Flexible Options</h3>
                  <p className="text-size-16 ">Amet tincidunt elit lorem</p>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-sm-6 col-12 p-0">
            <Link href="/portfolio">
              <div className="type-box position-relative">
                <div className="number position-absolute">
                  <span className=" mb-0">04.</span>
                </div>
                <figure className="mb-0">
                  <Image 
                    src="/assets/images/type-image4.jpg" 
                    alt="type" 
                    width={400}
                    height={400}
                    className="img-fluid"
                  />
                </figure>
                <div className="content position-absolute">
                  <h3 className="">Easy Claims Process</h3>
                  <p className="text-size-16 ">Reutrum velit sit tincidunt</p>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypeSection;