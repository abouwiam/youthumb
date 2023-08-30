import React from 'react';

const ContactUs = () => {
  return (
    <div className="widget ContactForm" id="ContactForm22">
      <div className="contact-form-widget">
        <h2 className="ribbon"><strong className="ribbon-content">Shoot Me an Email</strong></h2>
        <div className="form">
          <form name="contact-form">
            <div className="contactf-name">Your name:<input className="contact-form-name" id="ContactForm1_contact-form-name" name="Name" size="30" type="text" value="Name" onblur='if (this.value == "") {this.value = "Name";}' onfocus='if (this.value == "Name") {this.value = "";}' /></div>
            <div className="contactf-email">E-mail address *:<input className="contact-form-email" id="ContactForm1_contact-form-email" name="E-mail address" size="30" type="text" value="E-mail address" onblur='if (this.value == "") {this.value = "E-mail address";}' onfocus='if (this.value == "E-mail address") {this.value = "";}' /></div>
            <div style={{ clear: 'both' }}></div>
            <div className="contactf-message">Message *:<textarea className="contact-form-email-message" cols="25" id="ContactForm1_contact-form-email-message" name="Type your message here..." rows="5" value="" placeholder="Type your message here..." value="Type your message here..." onblur='if (this.value == "") {this.value = "Type your message here...";}' onfocus='if (this.value == "Type your message here...") {this.value = "";}' ></textarea><input className="contact-form-button contact-form-button-submit" id="ContactForm1_contact-form-submit" type="button" value="SEND MESSAGE" /><div className="contact-form-error-message" id="ContactForm1_contact-form-error-message"></div><div className="contact-form-success-message" id="ContactForm1_contact-form-success-message"></div></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
