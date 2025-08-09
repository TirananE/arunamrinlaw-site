"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import './NavBar.css';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // Offset for better accuracy

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <Link href="/" className="navbar-brand">
            <figure className="logo mb-0">
              <img src="/assets/images/logo.png" alt="image" className="img-fluid" />
            </figure>
          </Link>
          <button 
            className="navbar-toggler collapsed" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent"
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</Link>
              </li>
              <li className="nav-item">
                <Link href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About Us</Link>
              </li>
              <li className="nav-item">
                <Link href="#services" className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}>Services</Link>
              </li>
              <li className="nav-item">
                <Link href="#pricing" className={`nav-link ${activeSection === 'pricing' ? 'active' : ''}`}>Pricing</Link>
              </li>
              <li className="nav-item">
                <Link href="#faq" className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`}>FAQ</Link>
              </li>
              <li className="nav-item">
                <Link href="#testimonials" className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`}>Testimonials</Link>
              </li>
              <li className="nav-item">
                <Link href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact Us</Link>
              </li>
            </ul>
            <div className="">
              <Link href="#contact" className="contact_us text-decoration-none">
                Contact Us<i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
