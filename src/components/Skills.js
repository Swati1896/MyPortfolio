import React from 'react';

const Skills = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">My Skills</h2>
      <div className="progress-bar-container mt-4">
       
        <div className="mb-3">
          <label>HTML</label>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
              95%
            </div>
          </div>
        </div>

        
        <div className="mb-3">
          <label>CSS</label>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
              90%
            </div>
          </div>
        </div>

       
        <div className="mb-3">
          <label>JavaScript</label>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
              80%
            </div>
          </div>
        </div>


        
        <div className="mb-3">
          <label>React Js</label>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              75%
            </div>
          </div>
        </div>

       
        <div className="mb-3">
          <label>Node js</label>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '10%' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
              10%
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label>MongoDB</label>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
              40%
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label>Next Js</label>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '10%' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
              10%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
