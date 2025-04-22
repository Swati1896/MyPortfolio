import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'; 

const About = () => {
  return (
    <div className="container">
      <h2 className="text-center mb-4">About Me</h2>

      <div className="row">
       
        <div className="col-md-12">
          <p style={{ textAlign: 'justify' }} className="lead">
            A passionate Frontend Developer with a love for creating
            beautiful, responsive, and user-friendly websites and web applications. I specialize in building
            clean and maintainable code using modern web technologies. I enjoy transforming designs into
            interactive, visually appealing experiences that engage users.
          </p>

          <p style={{ textAlign: 'justify' }} className="lead">
          Overall, 4+ years of experience in IT Software Development and Services.
          Expertise in understanding and analysing requirements.
          Good collaboration with managers, testers and team members to strive together towards achieving goals.
          Ability to prioritize and work on multiple tasks in a fast-paced environment and ability to manage time effectively.
           I have a strong understanding of Frontend Technologies and I am always eager to learn new technologies. </p>
           
          
          

          <p className="hero--section-description"><span style={{fontWeight:'bold'}}>Name: </span> <span>Swati Suresh Patil</span></p>
                    <p className="hero--section-description"><span style={{fontWeight:'bold'}}>Education: </span> <span>BE(ENTC), ME(DE)</span></p>
										<p className="hero--section-description"><span style={{fontWeight:'bold'}}>Job Role: </span> <span>Frontend Developer</span></p>
										<p className="hero--section-description"><span style={{fontWeight:'bold'}}>Experience: </span> <span>4 Years 10 Months</span></p>
                    <p className="hero--section-description"><span style={{fontWeight:'bold'}}>Web Technologies: </span> <span>HTML, CSS, Javascript, React Js</span></p>
                    <p className="hero--section-description"><span style={{fontWeight:'bold'}}>IDE and Editors: </span> <span>Notepad++, Visual Studio Code</span></p>
                    <p className="hero--section-description"><span style={{fontWeight:'bold'}}>Version Control Tools: </span> <span>GIT, Bitbucket, Jenkins</span></p>
										<p className="hero--section-description"><span style={{fontWeight:'bold'}}>Language: </span> <span>English, Hindi, Marathi</span></p>
                    <p className="hero--section-description"><span style={{fontWeight:'bold'}}>Address: </span> <span>Pune, India</span></p>
                    <p className="hero--section-description"><span style={{fontWeight:'bold'}}>Hobbies: </span> <span>Traveling, Trekking</span></p>

         
         

          

          <Link to="/projects" className="btn btn-secondary mt-3">View My Projects</Link><br/><br/>
        </div>
      </div>
    </div>
  );
};

export default About;
