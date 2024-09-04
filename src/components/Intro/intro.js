import React from 'react';
import './intro.css';
import bg from '../../images/photo.png'

const Intro = ()=>{
      return(
        <div>
            <section id="intro">
                <div className="introContent">
                   <span className="hello">Hello,</span>
                   <span className="introText">I'm<span className='introName'> Amuthavalli Palani</span> <br/></span>
                   <span className= "introSubText">Graduate Student</span>
                   <p className='introPara'> 
                   Eager to learn from the best and contribute my skills to your innovative team. <br/>
                   </p>
                </div>
                <img src={bg} alt ="Profile" className="bg"/>
             </section>   
        </div>
      )
}
export default Intro