import React from 'react' 
import resume from '../assets/Brittni-Rohrer-Resume.pdf'
import "../styles/footer.css"

export function Footer() {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <p>
                    <i className="fa-regular fa-envelope footer-icon"></i>
                    brittnirohrer@gmail.com
                </p>
                <div className='vr'></div>
                <a
                    className='footer-resume-link'
                    href={resume}
                    target="blank">
                    View Resume
                </a>
            </div>
            <div className='footer-social-links'>
                <a
                    href=""
                    arget="blank">
                        <i className="fa-brands fa-github footer-link"></i>
                </a>
                <a
                    href=""
                    target="blank">
                        <i className="fa-brands fa-linkedin footer-link"></i>
                </a>
            </div>
            <div className='copyright-footer'>
                <p>Brittni Rohrer 2025</p>
            </div>
        </div>
    )
}