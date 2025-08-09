import React from 'react';
import Image from 'next/image';

const TeamSection = () => {
  return (
    <section className="team-con travelteam-con position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="team_content text-center" data-aos="fade-up">
              <h6>Team Members</h6>
              <h2>Team of Insurance Experts</h2>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 mx-auto">
            <div className="team-box">
              <figure className="team-image">
                <Image 
                  src="/assets/images/team-image1.jpg" 
                  alt="team member" 
                  width={400}
                  height={400}
                  className="img-fluid"
                />
              </figure>
              <div className="content">
                <h4>Marvin Joner</h4>
                <span className="text-size-14">Sr. Manager</span>
                <ul className="list-unstyled mb-0">
                  <li className="icons">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-facebook-f social-networks"></i>
                    </a>
                  </li>
                  <li className="icons">
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-x-twitter social-networks"></i>
                    </a>
                  </li>
                  <li className="icons">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin-in social-networks"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>   
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 mx-auto">
            <div className="team-box">
              <figure className="team-image">
                <Image 
                  src="/assets/images/team-image2.jpg" 
                  alt="team member" 
                  width={400}
                  height={400}
                  className="img-fluid"
                />
              </figure>
              <div className="content">
                <h4>Patricia Woodrum</h4>
                <span className="text-size-14">Accountant Assistant</span>
                <ul className="list-unstyled mb-0">
                  <li className="icons">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-facebook-f social-networks"></i>
                    </a>
                  </li>
                  <li className="icons">
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-x-twitter social-networks"></i>
                    </a>
                  </li>
                  <li className="icons">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin-in social-networks"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>   
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 mx-auto">
            <div className="team-box">
              <figure className="team-image">
                <Image 
                  src="/assets/images/team-image3.jpg" 
                  alt="team member" 
                  width={400}
                  height={400}
                  className="img-fluid"
                />
              </figure>
              <div className="content">
                <h4>Hannaz Stone</h4>
                <span className="text-size-14">Jr. Employee</span>
                <ul className="list-unstyled mb-0">
                  <li className="icons">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-facebook-f social-networks"></i>
                    </a>
                  </li>
                  <li className="icons">
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-x-twitter social-networks"></i>
                    </a>
                  </li>
                  <li className="icons">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin-in social-networks"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>   
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;