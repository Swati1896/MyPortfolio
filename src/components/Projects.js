import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section id="projects" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/assets/img1.png" className="card-img-top" alt="Portfolio" />
              <div className="card-body">
                <h5 className="card-title">Portfolio Website</h5>
                <p className="card-text">A personal portfolio website built with React.</p>
                <Link to="#" className="btn btn-secondary mt-3">View</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/assets/img2.png" className="card-img-top" alt="Weather App" />
              <div className="card-body">
                <h5 className="card-title">Restaurant Website</h5>
                <p className="card-text">A concise restaurant website using React</p>
                <Link to="https://github.com/Swati1896/RestaurantWebsite" target="_blank" className="btn btn-secondary mt-3">View</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/assets/img3.jpg" className="card-img-top" alt="Portfolio" />
              <div className="card-body">
                <h5 className="card-title">Weather Application</h5>
                <p className="card-text">A weather app. that fetches data from weather API</p>
                <Link to="https://github.com/Swati1896/WeatherApp" target="_blank" className="btn btn-secondary mt-3">View</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/assets/img4.png" className="card-img-top" alt="Portfolio" />
              <div className="card-body">
                <h5 className="card-title">BMI Calculator</h5>
                <p className="card-text">A app. that calculates a user's BMI based on their height and weight, providing an 
                  indication of their body weight status (underweight, normal weight, overweight, or obese)</p>
                  <Link to="https://github.com/Swati1896/BMICalculator" target="_blank" className="btn btn-secondary mt-3">View</Link>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/assets/img5.jpg" className="card-img-top" alt="Portfolio" />
              <div className="card-body">
                <h5 className="card-title">Calculator Application</h5>
                <p className="card-text">A mobile app. that allows users to perform basic and/or advanced mathematical calculations</p>
                <Link to="https://github.com/Swati1896/CalculatorApp" target="_blank" className="btn btn-secondary mt-3">View</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/assets/img6.jpg" className="card-img-top" alt="Portfolio" />
              <div className="card-body">
                <h5 className="card-title">Travel Website</h5>
                <p className="card-text">A website which allows users to book travel packages, hotels, taxis and other adventure services online</p>
                <Link to="https://github.com/Swati1896/TravelWebsite" target="_blank" className="btn btn-secondary mt-3">View</Link>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
