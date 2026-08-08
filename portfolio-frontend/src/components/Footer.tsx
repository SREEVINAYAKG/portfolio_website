import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="contact" className="footer-container">
      <div className="footer-links">

        <a href="https://github.com/SREEVINAYAKG" target="_blank" rel="noreferrer" className="footer-link">
          <FaGithub size={24} /> 
        </a>
        
        <a href="https://linkedin.com/in/g-sree-vinayak-a1a723292" target="_blank" rel="noreferrer" className="footer-link">
          <FaLinkedin size={24} />
        </a>
        
        <a href="mailto:srivinayakg2005@gmail.com.com" className="footer-link">
          <FaEnvelope size={24} />
        </a>

      </div>

      <div className="footer-credit">
        <p>Designed & Built by G Sree Vinayak</p>
      </div>
    </footer>
  )
}