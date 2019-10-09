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
              I love problem solving and I dedicate myself to figuring out how to make things better. 
            </p>
            <p>
              I am passionate about technology, especially <span className="highlight">React</span> and <span className="highlight">JavaScript</span>. I prefer front-end development, though I am experienced in back-end development. 
            </p>
            <p>
              I am also experienced with Node.js, Typescript, C#, Java, and HTML/CSS, and have exposure to many other languages and frameworks from spending much of my free time researching and studying in these and other areas. 
            </p>


            <p>
              This site is built in with <span className="highlight">React</span> from scratch and I had so much fun along the way.
            </p>
          </div>
        </div>
        <h1 style={{ color: colorPrimary }}>Experience</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
              <h3><b><i>Web Development Intern @ The Church of Jesus Christ of LDS</i></b></h3>
              
                  <p>Contributed to maintaining, developing and launching <a target="_blank" href="https://www.josephsmithpapers.org/"><b>Joseph Smith Paper website</b></a> using React, SASS and Handlebars.</p>
                  <p>Took ownership of fixing bugs such as Zoom In/Out feature.</p>
                  <p>Led in completing sprint tasks among the interns.</p>
                
              <br />
              <h3><b><i>Web Development Intern @ GWAZOO</i></b></h3>
            
                  <p>Developed e-commerce website using Larabel, PHP and MySQL.</p>
                  <p>Contributed to engineering an API that consumes excel files with built in validation and error handling.</p>
                  <p>Built custom Magento templates for previewing and editing products using Bootstrap.</p>
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
