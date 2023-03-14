import React from "react";

function Subscribe() {
  return (
    <div className="Subform">
      <link
        href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
        rel="stylesheet"
        type="text/css"
      />
      <div id="mc_embed_signup">
        <form
          action="https://property.us16.list-manage.com/subscribe/post?u=595001d74790843bf5e258668&amp;id=14bb0dfbed"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <input
              type="email"
              value=""
              name="EMAIL"
              class="email"
              id="mce-EMAIL"
              placeholder="email address"
              required
            />
            <div className="Botmas" aria-hidden="true">
              <input
                type="text"
                name="b_595001d74790843bf5e258668_14bb0dfbed"
                tabindex="-1"
                value=""
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="button"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
