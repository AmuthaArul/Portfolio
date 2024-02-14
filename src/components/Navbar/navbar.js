import React,{useState} from 'react'
import './navbar.css'
import logo from '../../images/logo.png'
import contact from '../../images/contact.png'
import menu from '../../images/menu.png'
import {Link} from 'react-scroll';

const Navbar = () =>{
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            
            <img src={logo} alt="Logo" className='logo'/>
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-70} duration={500} className="desktopMenuListItem">Portfolio</Link>  
                           
            </div>
            <button className="desktopMenuBtn" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:'smooth'})}}>
                <img src={contact} alt="Contact" className="desktopMenuImg"/> Contact Me
            </button> 

            <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':"none"}}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={40} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>  
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={40} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>                 
            </div>
        </nav>

    )
}

export default Navbar