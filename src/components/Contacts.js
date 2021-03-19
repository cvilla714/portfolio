import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const serviceID = "service_di6bqzs";
  const templateID = "template_jkssitf";
  const userID = "user_Q8mEyJ8twBkZBWtvxm1eV";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>Please Fill out the form and describe your project needs and I'll contact you as soon as possible.</p>
      </div>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <div className="text-center">
                <input id="name" type="text" className="form-control" placeholder="Name" name="name" />
                <div className="line"></div>
              </div>
              {/* PHONE INPUT */}
              <div className="text-center">
                <input id="phone" type="phone" className="form-control" placeholder="Phone Number" name="phone" />
                <div className="line"></div>
              </div>
              {/* EMAIL INPUT */}
              <div className="text-center">
                <input id="email" type="email" className="form-control" placeholder="Email" name="email" />
                <div className="line"></div>
              </div>
              {/* SUBJECT INPUT */}
              <div className="text-center">
                <input id="subject" type="text" className="form-control" placeholder="Subject" name="subject" />
                <div className="line"></div>
              </div>
            </div>
            <div className="col-md-6 col xs 12">
              {/* DESCRIPTION INPUT */}
              <div className="text-center">
                <textarea id="description" type="text" className="form-control" placeholder="Please describe your project" name="subject"></textarea>
                <div className="line"></div>
              </div>
              <button className="btn-main-offer contact-btn" type="submit">
                Contact Me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
