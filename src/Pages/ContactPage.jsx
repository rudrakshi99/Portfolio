import React from "react";
import ContactItem from "../Components/ContactItem";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Tittle from "../Components/Title";

const ContactPage = () => {
  return (
    <div>
      <div className="title">
        <Tittle title={"Contact Me"} span={"Contact Me"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            title="google maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14006.061350681375!2d77.32962873794108!3d28.644284500203792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfad07ac6ca3d%3A0x4797942eb250fd96!2sVaishali%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1629455083725!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem
            icon={email}
            text1={"sonirudrakshi99@gmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"Vaishali, Ghaziabad"}
            text2={"India"}
            title={"Address"}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
