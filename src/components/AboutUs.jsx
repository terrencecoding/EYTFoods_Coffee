const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <div className="about-us-text">
          <h4>About Us</h4>
          <h1>The traditional coffee shop</h1>
          <p>
            The traditional coffee shop is a charming and cozy space that has
            been a staple of many communities for generations. In addition to
            serving coffee and other hot beverages, traditional coffee shops
            often offer a variety of baked goods, sandwiches, and light snacks.
            They also provide a welcoming environment for people to socialize,
            catch up with friends, or simply unwind with a good book or laptop.
            Despite the rise of modern coffee chains, the traditional coffee
            shop continues to hold a special place in the hearts of many people
            as a beloved gathering spot.
          </p>
          <button className="about-us-button">Discover more</button>
        </div>
        <div className="about-us-images">
          <div className="image-large">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9zXO8ZgxTtkM_j2Y-RnDaoPkv4SFH95rokQ&s" // Replace with your actual image URL
              alt="Coffee Shop"
            />
          </div>
          {/* <div className="image-small">
              <img
                src="https://d2r7fdk6d5yz1t.cloudfront.net/latte-art-class-indianapolis/recJs1otrhMnaa98S_w1200.webp" // Replace with your actual image URL
                alt="Latte Art"
              />
            </div> */}
          {/* <div className="experience-badge">
              <h2>2+</h2>
              <p>Years Experience</p>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
