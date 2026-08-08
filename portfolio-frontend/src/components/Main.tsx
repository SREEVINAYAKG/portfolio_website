import {useEffect} from 'react';
import {TypeAnimation} from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImg from '../assets/main1-img.svg';
export default function Main() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: false, 
    });
  }, []);
  return (

    <div id="about" className="main">
        <div className="main-content">
            <div className="main-content-left" data-aos="fade-right">
                <p className="main-greeting">Hi, I'm</p>
                <h1 className="main-name">G Sree Vinayak</h1>
                <h2 className="main-title">
                    <TypeAnimation
                        sequence={[
                            'Full Stack',
                            1000,
                            'Machine Learning',
                            1000,
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{color:'#60a5fa'}}
                    />
                    <span style={{ color: '#ffffff' }}> Developer</span>
                </h2>
                <p className="main-description">
                      I'm a developer with a strong focus on combining modern frontend interfaces 
                        with robust <span className="highlight">backend systems</span>. I also have a deep interest in 
                        <span className="highlight"> Machine Learning</span> and  strong foundation in <span className="highlight">Data Structures and Algorithms</span> with 450+ problems solved on LeetCode.I'm 
                        currently looking for new opportunities to build impactful software.
                </p>
            </div>
            <div className="main-content-right" data-aos="fade-left">
                <img src={profileImg} alt="Profile" className="main-profile-image" />
            </div>
       </div>
    </div>
  )
}