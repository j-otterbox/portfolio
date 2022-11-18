const ContactForm = () => {
  return (
    <form
      id="fs-frm"
      name="simple-contact-form"
      acceptCharset="utf-8"
      action="https://formspree.io/f/xlevaekp"
      method="post"
    >
      <fieldset id="fs-frm-inputs">
        <div className="form-row">
          <div className="col-md-6 mb-4">
            <label htmlFor="full-name">Name</label>
            <input
              type="text"
              name="_name"
              id="full-name"
              className="form-control"
              required
            />
          </div>
          <div className="col-md-6 mb-4">
            <label htmlFor="email-address">Email Address</label>
            <input
              type="email"
              name="_replyto"
              id="email-address"
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="email-subject">Subject</label>
          <input
            name="_subject"
            id="email-subject"
            className="form-control"
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="message">Message</label>
          <textarea
            rows="5"
            name="_message"
            id="message"
            className="form-control"
            required
          />
        </div>
      </fieldset>
      <button type="submit" className="cta-btn cta-btn--hero form-btn mt-4">
        Let's Talk
      </button>
    </form>
  );
};

export default ContactForm;
