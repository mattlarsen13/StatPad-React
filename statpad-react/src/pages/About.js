import { useState } from 'react';
import "../css/About.css"
 
const About = () => {
    const [submitStatus, setSubmitStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const object = {};
        formData.forEach((value, key) => object[key] = value);
        
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(object)
            });
            
            const data = await response.json();
            
            if (data.success) {
                setSubmitStatus('Contact form submission success!');
                e.target.reset();
            } else {
                setSubmitStatus('Something went wrong. Please try again.');
            }
        } catch (error) {
            setSubmitStatus('Error submitting form. Please try again.');
        }
    };
  
    return (
        <div className="about">
            <hr className="border-line" />
            <div className="about">
                <h2 className="active">About StatPad!</h2>
                <img className="about-img" src="images/abo.jpg" alt="About" />
                <p>StatPad was born from my lifelong passion for football and the desire to enhance the experience for fans and players alike. Growing up, I was captivated by the strategy and excitement of the game, which fueled my interest in analytics and performance metrics. I realized there was a gap in accessible tools for tracking and analyzing football statistics, so I set out to create a platform that empowers users to delve into the data behind the sport. With StatPad, my goal is to provide a comprehensive and user-friendly resource that elevates the understanding and enjoyment of football for everyone involved.</p>
            </div>
            <div className="contact-title">
                <h2>Contact Us!</h2>
            </div>
            <div className="contact">
                <div className="columns">
                    <form id="form" onSubmit={handleSubmit}>
                        <input type="hidden" name="access_key" value="5a1c74e2-7af8-4de5-961f-c8af03a8324c"/>
                        <input type="hidden" name="from_name" value="Email from StatPad" />
                        <input type="hidden" name="subject" value="Message for StatPad Creator"/>
              
                        <p id="section">
                            <label htmlFor="name">Name:</label>
                            <input id="name" type="text" placeholder="Full Name" name="name" required/>
                        </p>
                        <p id="section">
                            <label htmlFor="email">Email:</label>
                            <input id="email" type="email" placeholder="Email" name="email" required />
                        </p>
                        <p id="section">
                            <label htmlFor="message">Message:</label>
                            <input id="message" type="message" placeholder="Message" name="message" required />
                        </p>              
                        <p id="section">
                            <button type="submit">Submit Form</button>
                        </p>
                        {submitStatus && (
                            <p className="submit-status">{submitStatus}</p>
                        )}
                    </form> 

                    <div className="map">
                      <h2>View Our Headquarters!</h2>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6616.180728335224!2d-81.0306507244665!3d33.990212621003344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bad9aefb0ded%3A0x61752e2b7600784a!2s300%20Main%20St%2C%20Columbia%2C%20SC%2029201!5e0!3m2!1sen!2sus!4v1730216184417!5m2!1sen!2sus"  
                            style={{ border: 0 }} 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                <hr className="border-line" />
            </div>
        </div>
    );
};

export default About;

