import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center mb-4">Hi, I'm Swati Patil..!</h1>
      
      <div className="row">
       
        <div className="col-md-4">
  <img
    src="/assets/Passport photo.jpg"  
    alt="Photo"
    className="img-fluid rounded-circle mb-3"
    style={{ width: '200px', height: '250px', objectFit: 'cover' }}  
  />
</div>

       
        <div className="col-md-8">
        <p style={{ textAlign: 'justify' }} className="lead">
        Seasoned <strong>Frontend Developer</strong> with 4+ years experience of working in an Information Technology 
        and Services Industry. Proven expertise on creating visually appealing, responsive, and user-friendly web applications. 
        I specialize in using technologies like <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and
            <strong> React Js</strong> to build modern websites and applications.</p>

          <p style={{ textAlign: 'justify' }} className="lead">
            I enjoy transforming creative designs into interactive, seamless experiences. My goal is
            to always deliver high-quality code, follow best practices, and continuously learn new
            technologies to stay up-to-date with the ever-evolving web development landscape.
          </p>

          <p style={{ textAlign: 'justify' }} className="lead">
            Whether you're looking for someone to build your next website or web application, I'd love
            to collaborate and bring your ideas to life.
          </p>

          
          <a 
            href="assets/CV.pdf" download className="btn btn-secondary mt-3"
          >
            Download My CV
          </a><br/><br/>
        </div>
      </div>
    </div>
  );
};

export default Home;
