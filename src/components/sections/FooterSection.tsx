import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FooterSection = () => {
  return (
    <section className="footer-con position-relative">
      <div className="container position-relative">
        <div className="middle_portion">
          <div className="row">
            <div className="col-xl-10 col-12 mx-auto">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                  <div className="logo-content">
                    <Link href="/" className="footer-logo">
                      <figure className="mb-0">
                        <Image 
                          src="/assets/images/footer-logo.png" 
                          alt="logo" 
                          width={200}
                          height={60}
                        />
                      </figure>
                    </Link>
                    <p className="text-size-14 mb-0">
                      Duis aute irure dolor in reprehenderit in voluptate velit cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                  <div className="links">
                    <h4 className="heading">Useful Links</h4>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <i className="fa-solid fa-circle"></i>
                        <Link href="/" className="text-decoration-none">Home</Link>
                      </li>
                      <li>
                        <i className="fa-solid fa-circle"></i>
                        <Link href="/about" className="text-decoration-none">About</Link>
                      </li>
                      <li>
                        <i className="fa-solid fa-circle"></i>
                        <Link href="/service" className="text-decoration-none">Services</Link>
                      </li>
                      <li>
                        <i className="fa-solid fa-circle"></i>
                        <Link href="/pricing" className="text-decoration-none">Pricing</Link>
                      </li>
                      <li>
                        <i className="fa-solid fa-circle"></i>
                        <Link href="/blog" className="text-decoration-none">Blog</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                  <div className="contact">
                    <h4 className="heading">Contact Info</h4>
                    <ul className="list-unstyled mb-0">
                      <li className="text">
                        <i className="fa-solid fa-phone"></i>
                        <a href="tel:+61383766284" className="text-decoration-none">+61 3 8376 6284</a>
                      </li>
                      <li className="text">
                        <i className="fa-solid fa-envelope"></i>
                        <a href="mailto:info@finanzocom" className="text-decoration-none">Info@finanzocom</a>
                      </li>
                      <li className="text">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="address mb-0">21 King Street Melbourne, 3000, Australia</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                  <div className="icon">
                    <h4 className="heading">Social Networks</h4>
                    <ul className="list-unstyled mb-0 social-icons">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                          <i className="fa-brands fa-facebook-f social-networks"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                          <i className="fa-brands fa-x-twitter social-networks"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                          <i className="fa-brands fa-linkedin-in social-networks"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="mb-0">Copyright 2024, insurerity.com All Rights Reserved.</p>
      </div>
    </section>
  );
};

export default FooterSection;