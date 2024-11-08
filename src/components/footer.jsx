import React from "react";
import { FaWhatsapp, FaYoutube, FaInstagram } from "react-icons/fa";
import "../styles/footer.css"; 

const Footer = () => {

  const handleClick = () => {
      const header = document.querySelector('.navbar');
      if (header) {
          header.scrollIntoView({ behavior: 'smooth' });
      } else {
          console.error("Element with ID 'navbar' not found.");
      }
  };


  return (
    <footer>
      <div className="footerContent">
        <div>
            <img className="logo" src="https://github.com/LucasJoseArantes/LandingPage-DMVoz/blob/main/src/assets/images/logos/whiteFooter.png?raw=true" alt="Logo DMVoz" onClick={handleClick}/>
            <hr /> 
            <p>Copyright © 2000 - 2024 DMVoz Produções. Todos os direitos reservados</p>
        </div>
    
        <div className="socialIcons">
          <a href="https://wa.me/+553498125957" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} />
          </a>
          <a href="https://www.youtube.com/@amaral5446" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={30} />
          </a>
          <a href="https://www.instagram.com/denysdmvoz/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
