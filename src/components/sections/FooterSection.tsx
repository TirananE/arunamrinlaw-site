'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FooterSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="contact" className="footer-con position-relative">
      <div className="container position-relative">
        <div className="middle_portion">
          <div className="row">
            <div className="col-xl-10 col-12 mx-auto">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
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
                      Professional legal services with expertise in various areas of law.
                    </p>
                    <div className="mt-3">
                      <button 
                        onClick={openModal}
                        className="btn btn-primary book-consultation-btn"
                        style={{
                          backgroundColor: '#8B7355',
                          border: 'none',
                          padding: '10px 20px',
                          borderRadius: '5px',
                          color: 'white',
                          fontWeight: 'bold',
                          cursor: 'pointer'
                        }}
                      >
                        BOOK A CONSULTATION
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="contact">
                    <h4 className="heading">Contact Info</h4>
                    <ul className="list-unstyled mb-0">
                      <li className="text">
                        <i className="fa-solid fa-phone"></i>
                        <a href="tel:+6625130130" className="text-decoration-none">Call: 02-513-0130-4</a>
                      </li>
                      <li className="text">
                        <i className="fa-solid fa-mobile-alt"></i>
                        <a href="tel:+66843784434" className="text-decoration-none">Mobile Phone: 084-378-4434</a>
                      </li>
                      <li className="text">
                        <i className="fa-solid fa-envelope"></i>
                        <a href="mailto:arunamrin.law@gmail.com" className="text-decoration-none">arunamrin.law@gmail.com</a>
                      </li>
                      <li className="text">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="address mb-0">109/12, SOI LAT PHRAO 23, LAT PHRAO, CHANKASEM, CHATUCHAK, BANGKOK 10900</p>
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
        <p className="mb-0">Copyright 2024, ARUNAMRIN LAW CO.,LTD. All Rights Reserved.</p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="modal fade show" 
          style={{ 
            display: 'block', 
            backgroundColor: 'rgba(0,0,0,0.5)',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1050
          }}
          onClick={closeModal}
        >
          <div 
            className="modal-dialog modal-dialog-centered modal-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header" style={{ backgroundColor: '#1a1f3e', color: 'white' }}>
                <h5 className="modal-title">Contact Us</h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={closeModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body p-0">
                <div className="row no-gutters">
                  <div className="col-md-5">
                    <Image
                      src="/assets/images/office_and_location/25680723-IMG_9380.jpg"
                      alt="Office Location"
                      width={400}
                      height={300}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="col-md-7 p-4" style={{ backgroundColor: '#1a1f3e', color: 'white' }}>
                    <h4 style={{ color: '#D4AF37', marginBottom: '20px' }}>Contact Us</h4>
                    <div className="contact-info">
                      <div className="mb-3">
                        <i className="fa-solid fa-location-dot me-2" style={{ color: '#D4AF37' }}></i>
                        <span>109/12, SOI LAT PHRAO 23, LAT PHRAO, CHANKASEM, CHATUCHAK, BANGKOK 10900</span>
                      </div>
                      <div className="mb-3">
                        <i className="fa-solid fa-phone me-2" style={{ color: '#D4AF37' }}></i>
                        <span>Call: 02-513-0130-4</span>
                      </div>
                      <div className="mb-3">
                        <i className="fa-solid fa-mobile-alt me-2" style={{ color: '#D4AF37' }}></i>
                        <span>Mobile Phone: 084-378-4434</span>
                      </div>
                      <div className="mb-3">
                        <i className="fa-solid fa-envelope me-2" style={{ color: '#D4AF37' }}></i>
                        <span>arunamrin.law@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FooterSection;