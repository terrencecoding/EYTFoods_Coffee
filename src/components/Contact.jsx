function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>Other ways to connect</h2>
        <p>
          We'd love to hear from you. Our friendly team is always here to chat.
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h4>Reach us on email</h4>
              <p>
                <a href="mailto:dungle.eyt@gmail.com">dungle.eyt@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <div>
              <h4>Phone</h4>
              <p>Mon-Fri from 8am to 5pm.</p>
              <p>
                <a href="tel:+17149753566">+1 (714) 975-3566</a>
              </p>
              <p>
                <a href="tel:+16577586105">+1 (657) 758-6105</a>
              </p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h4>Office</h4>
              <p>Come say hello at our office HQ.</p>
              <p>13811 West St, Garden Grove, CA 92843</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-right">
        <h2>
          Love to hear from you, Get in touch.{" "}
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </h2>
        <form>
          <input type="text" placeholder="Your Name" name="name" required />
          <input type="email" placeholder="Your Email" name="email" required />
          <input type="text" placeholder="Phone No." name="phone" />
          <textarea placeholder="Message" name="message" required></textarea>
          <button type="submit">Send message ↗</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
