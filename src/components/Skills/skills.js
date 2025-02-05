import React from 'react'
import './skills.css'


const Skills=( ) =>{
    return (
        <section id='skills'>
            <span className='skillTitle'>About <span className="partTitle">me</span></span>
            <span className='skillDesc'> I am a recent graduate student with experience working as a Software Engineer.
            My skill set encompasses various languages, including JavaScript, Python, HTML, CSS and SQL.
            I am well-versed in frameworks/libraries such as React, Angular, Bootstrap, Django, Flask, JQuery, and NumPy. 
            Additionally, technologies and tools, like Github, PostgreSQL, MySQL, MongoDB, Node.js, Figma, Balsamiq, VS Code, and Linux (OS). 
           
            </span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <div className='year'>2023 - 2024</div>
                    <div className="skillBarText">
                        <h2>Master of Science in Computer Science</h2>
                        <p> California State University, East Bay </p> <br/>  
                        <p><strong>GPA:</strong> 3.97/4.00<br/>
                        <strong> Coursework:</strong> Advanced Algorithms, Operating Systems, System Design, Cloud Computing, Machine Learning, DataBase Systems</p>
                    </div>
                    </div>
                    <div className='skillBar'>
                    <div className='year'>2012 - 2016</div>
                    <div className="skillBarText">
                        <h2>Bachelor of Engineering in Computer Science and Engineering</h2>
                        <p> Anna Univeristy </p>   <br/>
                        <p><strong>GPA:</strong> 3.67/4.00<br/>
                        <strong> Coursework:</strong> Data Structures and Algorithms, OOPs, Database Management Systems, Web Technology, Software Engineering, Artificial Intelligence

</p>
                    </div>
                    </div>
                    

            </div>
        </section>
    );
}

export default Skills