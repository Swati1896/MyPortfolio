import React from 'react';
import './Journey.css'; 

const Journey = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">My Journey</h2>

      <div className="timeline">

       

        <div className="timeline-item">
          <div className="timeline-icon bg-warning"></div>
          <div className="timeline-content">
            <h5>Senior Software Developer</h5>
            <p><strong>Duration:</strong> 2021 - 2025</p>
            <p>
              After I switched to <strong>Infosys Ltd.</strong> And got a chance to work on several real-world projects and enhanced my skills in
               web development.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon bg-success"></div>
          <div className="timeline-content">
            <h5>UI Developer</h5>
            <p><strong>Duration:</strong> 2019 - 2021</p>
            <p>
              After my BE, I got selected to <strong>Microspectra Software Technology Pvt. Ltd.</strong> Here, 
              I worked on several real-world projects and enhanced my skills in web development.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon bg-info"></div>
          <div className="timeline-content">
            <h5>Master's Degree (ME)</h5>
            <p><strong>Duration:</strong> 2017 - 2019</p>
            <p>
              After my BE, I pursued a Master's in Engineering (ME) to specialize in Digital Electronics. 
              During this phase, I worked on several real-world projects and enhanced my technical skills.
            </p>
          </div>
        </div>

        
        <div className="timeline-item">
          <div className="timeline-icon bg-primary"></div>
          <div className="timeline-content">
            <h5>Bachelor's Degree (BE)</h5>
            <p><strong>Duration:</strong> 2013 - 2017</p>
            <p>
              I completed my Bachelor's in Engineering (BE) with a focus on Electronics & Telecommunication. 
              This phase laid the foundation for my technical career and helped me develop core skills.
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Journey;
