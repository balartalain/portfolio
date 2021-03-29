import React from 'react';

const ContactMe = () => {
    return (        
        <div id="contact-me" className="contact-section">
            <h1>Contact me</h1>      
            <div className="subtitle" style={{fontWeight: 300}}>Please fill out the form and describe your proyect needs and I'll contact you as soon as posible</div>   
            <section className="mb-4">
                <div className="row">

                    <div className="col-md-12 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                            <div className="row">

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" className="input-text" placeholder="Name"/>  
                                        <span class="focus-border"></span>                                      
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" className="input-text" placeholder="Email"/>   
                                        <span class="focus-border"></span>                                     
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" id="subject" name="subject" className="input-text" placeholder="Subject" />
                                        <span class="focus-border"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-md-12">

                                    <div className="md-form mb-0">
                                        <textarea type="text" id="message" name="message" rows="2" className="input-text md-textarea" placeholder="Please describe shortly your project."></textarea>                                           
                                        <span class="focus-border"></span>                                     
                                    </div>

                                </div>
                            </div>

                        </form>

                        <div className="text-center text-md-right">
                            <a className="btn-contact" href="#">CONTACT ME</a>
                        </div>
                        <div className="status"></div>
                    </div>

                </div>

            </section>    
        </div>
    );
}
export default ContactMe