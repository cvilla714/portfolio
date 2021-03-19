import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [SuccessMessage, setSuccessMessage] = useState("");

  const { register, handleSubmit, errors } = useForm();

  const serviceID = "service_di6bqzs";
  const templateID = "template_jkssitf";
  const userID = "user_Q8mEyJ8twBkZBWtvxm1eV";

  const onSubmit = (data, reset) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    reset.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Form sent succesfully!I'll contact you as soon as possible.");
      })
      .catch((err) => console.log(`Somethig went wrong ${err}`));
  };

  return (
    <div id="contact" className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>Please Fill out the form and describe your project needs and I'll contact you as soon as possible.</p>
        <span className="success-message">{SuccessMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <div className="text-center">
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  ref={register({
                    required: "Please enter your name",
                    maxLength: {
                      value: 20,
                      message: "Please enter a name with fewe than 20 characters",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">{errors.name && errors.name.message}</span>
              {/* PHONE INPUT */}
              <div className="text-center">
                <input
                  id="phone"
                  type="phone"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  ref={register({
                    required: "Please enter your phone number",
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">{errors.phone && errors.phone.message}</span>
              {/* EMAIL INPUT */}
              <div className="text-center">
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  ref={register({
                    required: "Please enter your email address",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid Email",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">{errors.email && errors.email.message}</span>
              {/* SUBJECT INPUT */}
              <div className="text-center">
                <input
                  id="subject"
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  ref={register({
                    required: "OOPS, you forgot to inclue the subject",
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">{errors.subject && errors.subject.message}</span>
            </div>
            <div className="col-md-6 col xs 12">
              {/* DESCRIPTION INPUT */}
              <div className="text-center">
                <textarea
                  id="description"
                  type="text"
                  className="form-control"
                  placeholder="Please describe your project"
                  name="description"
                  ref={register({
                    required: "Please describe shortly your projects needs...",
                  })}
                ></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">{errors.description && errors.description.message}</span>
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
