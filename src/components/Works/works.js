import React,{ useState } from 'react'
import './works.css'
import csueb from '../../images/csueb.png';
import elixir  from '../../images/elixir.jpg';
import cognizant from '../../images/cognizant.png';


const Works = () =>{
  
 
    const [selectedJob, setSelectedJob] = useState(null);

    const jobs = [
      {
            src: csueb,
            title: "CSUEB",
            designation: "Teaching Assistant",
            responsibilities: "As a Teaching Assistant for the Artificial Intelligence course at California State University East Bay from Aug 2024 to Dec 2024, I assisted in teaching, grading, and publishing materials for the 'AI and Intro to NLP & Deep Learning' course. I also integrated TensorFlow into the curriculum, providing students with hands-on experience in machine learning models.",
      },
      {
        src: csueb,
        title: "CSUEB",
        designation: "ASI Student Assistant",
        responsibilities: "As an ASI Student Assistant at California State University East Bay from June 2024 to December 2024, I developed a PostgreSQL database to manage scholarship applications and designed promotional materials using Figma. Additionally, I implemented a cloud-based filing system with custom Python scripts, streamlining data access for student associations.",
      },
      {
        src: csueb,
        title: "CSUEB",
        designation: "Teaching Assistant",
        responsibilities: "As a Teaching Assistant for the Website Development course at California State University East Bay from January 2024 to May 2024, I assisted in teaching front-end frameworks (React, Angular), responsive design, and full-stack development. I also led lab sessions on reusable web components and guided the integration of APIs, SQL databases, and client-server architecture.",
      }, 
        {
            src: elixir,
            title: "Elixir",
            designation: "Software Developer",
            responsibilities: "As a Software Engineer at the Elixir Educational Group in Chennai, India, I led significant initiatives between 2018 and 2021. My role involved spearheading the design and development of user-friendly UI features using Django/React, thereby elevating the responsiveness and accessibility of the web application. I showcased meticulous attention to detail through the revitalization of mock designs and wireframes for landing pages.My dedication to achieving excellence was acknowledged with the prestigious Achievement Award in the 'Go that Extra Mile' category.",
          }, 
      {
      src: cognizant, // Assuming you have these images imported correctly
      title: "Cognizant",
      designation: "Programmer Analyst",
      responsibilities: "As a Programmer Analyst at Cognizant Technology Solutions in Chennai, India, during the period from 2016 to 2017, I played a pivotal role in the Medicare and Medicaid Healthcare project. My key achievements include Module Design, Testing and Collaboration, Performance Enhancement.During the Cognizant Technology Solutions Training Program in 2016, I emerged as the Topper of the Batch among 60 trainees, showcasing my dedication to excellence and quick grasp of new concepts.",
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