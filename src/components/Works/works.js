import React,{ useState } from 'react'
import './works.css'
import elixir  from '../../images/elixir.jpg';
import cognizant from '../../images/cognizant.png';
import annauniv  from '../../images/anna-univ.jpg';

const Works = () =>{
  
 
    const [selectedJob, setSelectedJob] = useState(null);

    const jobs = [
        {
            src: elixir,
            title: "Elixir",
            designation: "Software Developer",
            responsibilities: "As a Software Engineer at the Elixir Educational Group in Chennai, India, I led significant initiatives between 2018 and 2021. My role involved spearheading the design and development of user-friendly UI features using React, thereby elevating the responsiveness and accessibility of the web application. I showcased meticulous attention to detail through the revitalization of mock designs and wireframes for landing pages.My dedication to achieving excellence was acknowledged with the prestigious Achievement Award in the 'Go that Extra Mile' category.",
          }, 
      {
      src: cognizant, // Assuming you have these images imported correctly
      title: "Cognizant",
      designation: "Programmer Analyst",
      responsibilities: "As a Programmer Analyst at Cognizant Technology Solutions in Chennai, India, during the period from 2016 to 2017, I played a pivotal role in the Medicare and Medicaid Healthcare project. My key achievements include Module Design, Testing and Collaboration, Performance Enhancement.During the Cognizant Technology Solutions Training Program in 2016, I emerged as the Topper of the Batch among 60 trainees, showcasing my dedication to excellence and quick grasp of new concepts.",
    },
   
    {
        src: annauniv,
        title: "Anna University",
        designation: "Student Council Member",
        responsibilities: "As a dedicated member of the Student Council at RMD Engineering College, Anna University, I actively contributed to the academic environment by mentoring and assisting my peers and junior students in their coursework.  I worked diligently to bridge the gap between students and teachers and also took on the responsibility of organizing a successful symposium, creating an opportunity for students to engage in intellectual discussions, share knowledge, and expand their understanding of various subjects",
      }
    
  ];

  const handleImageClick = (job) => {
    setSelectedJob(job);
  };

  const closeModal = () => {
    setSelectedJob(null);
  };
    return(
       <section id='works'>
            <h2 className='worktitle'>Professional <span className='part'>Journey</span></h2>
            <span className='workDesc'>I am passionate about crafting innovative solutions and staying at the forefront of technological advancements and eager to contribute my skills and knowledge to further excel in the role of a Software Engineer. With 3+  years of dedicated experience as a Software Engineer, I bring a wealth of expertise and a proven track record of success in the dynamic field of software development.
            </span>

            <div className="job-images">
               {jobs.map((job) => (
                  <div key={job.title} className="job-image-desc" onClick={() => handleImageClick(job)}>
                       <img src={job.src} alt={job.title} className='job-image'/>
                        <h3>{job.title}</h3>
                 </div>
                ))}
                {selectedJob && (
                      <div className="job-modal">
                          <div className="job-modal-content">
                               <h3><em><strong>{selectedJob.designation}</strong></em></h3>
                               <p>{selectedJob.responsibilities}</p>
                               <button className="closebtn"onClick={closeModal}>Close</button>
                         </div>
                      </div>
                )}
         </div>

        </section>
    );
} 
export default Works

/*
<div className='workBars'>
                <div className='workBar'>
                    <img src={elixir} alt="" className="workBarImg"/>
                    <div className="workBarText">
                        <h2>Elxir Educational Group</h2>
                        <p> JLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    </div>
                    <div className='workBar'>
                    <img src={cognizant} alt="" className="workBarImg"/>
                    <div className="workBarText">
                        <h2>Cognizant Technology Solutions</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    </div>
            </div>

            */