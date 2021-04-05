import React, {useState, useEffect} from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {

    const [status, setStatus] = useState({msg:"", cls:"success"});    
    useEffect(() => {
       console.log(status);
    });
    const serviceID = 'gmail';
    const templateID = 'template_vi1vibk';
    const userID = 'user_e3zP40MCR4N6nh8znK0TQ';

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(serviceID, templateID, e.target, userID)
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              setStatus({
                  msg: "Message sent successfully",
                  cls: "success"
                });
          }, (error) => {
              console.log(error.text);
              setStatus({
                msg: "The message could not be sent",
                cls: "error"
              });
          });
    }

    return (        
        <div id="contact-me" className="contact-section">
            <h1>Contact me</h1>      
            <div className="subtitle" style={{fontWeight: 300}}>Please fill out the form and describe your proyect needs and I'll contact you as soon as posible</div>   
            <section className="mb-4">
                <div className="row">

                    <div className="col-md-12 mb-md-0 mb-5">
                        <form onSubmit={sendEmail} id="contact-form" name="contact-form" action="mail.php" method="POST">

                            <div className="row">

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" className="input-text" placeholder="Name"/>  
                                        <span className="focus-border"></span>                                      
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" className="input-text" placeholder="Email"/>   
                                        <span className="focus-border"></span>                                     
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" id="subject" name="subject" className="input-text" placeholder="Subject" />
                                        <span className="focus-border"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">

                                    <div className="md-form mb-0">
                                        <textarea type="text" id="message" name="message" rows="2" className="input-text md-textarea" placeholder="Please describe shortly your project."></textarea>                                           
                                        <span className="focus-border"></span>                                     
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h5 className={`status ${status.cls}`}>{status.msg}</h5>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-center text-md-right">
                                        <button className="btn-contact">CONTACT ME</button>
                                    </div>
                                </div>
                            </div>
                        </form>                        
                    </div>

                </div>

            </section>    
        </div>
    );
}
export default ContactMe