  const ContactPage = () => {
    return (
      <div className="container page-container">
        <h1 className="page-title">Contact Us</h1>
        <p>Have questions or want to learn more? Reach out to us!</p>
        {}
        <form className="contact-form">
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5"></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    );
  };

  export default ContactPage;
  