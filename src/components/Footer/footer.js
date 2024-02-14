import React from 'react'
import './footer.css'
import linkedIn from '../../images/linkedIn.png';

const Footer =() =>{
    return (
        <footer className='footer'>
             <div className='links'>
                    <a href="https://www.linkedin.com/in/amuthavalli-palani/" target="_blank" rel="noopener noreferrer"> 
                    <img src={linkedIn} alt="" className='link'/></a>       
                    </div>
            2024 Amuthavalli Palani
        </footer>
    )
}
export default Footer