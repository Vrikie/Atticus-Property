import React, { useState } from "react";

import Nav from "../comps/Nav/Nav.js";
import Header from "../comps/Header/Header.js";
import Footer from "../comps/Footer/Footer.js";

function Contact() {
  const pageHeader = "Contact";
  const underlined = useState(true);

  return (
    <>
      <Nav />
      <div className="Viewport">
        <Header pageHeader={pageHeader} underlined={underlined} />
        <div className="Mainpage">
          <div className="Contact">
            <div className="Map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d12676.68899848768!2d18.47006961759064!3d-33.9255958124249!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sza!4v1678199451187!5m2!1sen!2sza"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                title="atticus-gmap"
              />
            </div>
            <div className="Form">
              <form>
                <label>
                  <span>Your Name (required)</span>
                  <input id="name" type="text" name="name" />
                </label>
                <label>
                  <span>Your Email (required)</span>
                  <input id="email" type="text" name="email" />
                </label>
                <label>
                  <span>Subject</span>
                  <input id="subject" type="text" name="subject" />
                </label>
                <label>
                  <span>Your Message</span>
                  <textarea id="feedback" name="feedback"></textarea>
                  <input id="button" type="button" value="SEND" />
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
