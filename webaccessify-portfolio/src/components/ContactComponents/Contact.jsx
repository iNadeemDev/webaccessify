import React from 'react'
import './Contact.css'
import ContactFrom from './ContactForm'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Contact = () => {
  return (
 <>
 <section className="Contact">
 <div className="Contact-body">
        <div className="Contact-content">
            <h1>Contact Us</h1>
            <h3>Thank You for reaching out.</h3>
            <p> Need help? Our team is here to assist you with all your questions.</p>
        </div>
        <div className="Contact-container">
            <div className="contact-info">
                <div className="box">
                    <div className="icon">
                        <LocationOnIcon sx={{ fontSize: "3rem" }}/>
                    </div>
                    <div className="text">
                        <h3>Address</h3>
                        <p>Dpt of Computer Science,UET <br/>Lahore</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <LocalPhoneIcon sx={{ fontSize: "3rem"  }}/>
                    </div>
                    <div className="text">
                        <h3>Phone</h3>
                        <p>03180566415</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <EmailIcon sx={{ fontSize: "3rem"  }}/>
                    </div>
                    <div className="text">
                        <h3>Email</h3>
                        <p>mtooba.zafar@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="Form">
            <ContactFrom/>
            </div>    
        </div>
    </div>
    </section>
 
 </>
  )
}

export default Contact
