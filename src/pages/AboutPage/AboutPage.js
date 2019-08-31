import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              I like <span className="highlight">JavaScript</span> and
              Front End stuff.
            </p>
            
            <p>
              This site is built in with <span className="highlight">React</span> from scratch and I had so much fun along the way.
            </p>
            <p>
              React-Redux, JavaScript, NodeJs, Express, CSS, Flexbox are the main tricks up my sleeve.
            </p>
          </div>
        </div>
        <h1 style={{ color: colorPrimary }}>Experience</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
              <h3><b><i>Web Development Intern @ The Church of Jesus Christ of LDS</i></b></h3>
              
                  <p>Developed and maintained <a target="_blank" href="https://www.josephsmithpapers.org/"><b>Joseph Smith Paper website</b></a> for Church History team using ReactJS, Flexbox, Handlebars as frontend developer.</p>
                  <p>Fixed Zoom In/Out functionality for the images and maps in the site, directly contributing to launch site quickly.</p>
                  <p>Finished the most tasks which is one of the highest among interns.</p>
                
              <br />
              <h3><b><i>Web Development Intern @ GWAZOO</i></b></h3>
            
                  <p>Developed e-commerce website in startup environment.</p>
                  <p>Worked on functionality for uploading products to database via excel file with validating inputs, providing warning and error messages, preview of products, and editing interface.</p>
                  <p>Worked on creating custom template and functions for Magento based e-commerce platform. Mostly worked with MySQL, PHP, Laravel Bootstrap and Git.</p>
              <br />
              <h3><b><i>Technical Support Engineer @ SAMSUNG SDS</i></b></h3>
            
                  <p>Managed queue and service requests to provide the highest level of customer service within standard support guidelines taking ownership and coordinating resolution of service requests.</p>
                  <p>Facilitated resolution providing support procedure and mediated between support teams and customer.</p>
                  <p>Maintained knowledge of SAMSUNG business flows in line with Customer Service Hub business processes.</p>
              

          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
