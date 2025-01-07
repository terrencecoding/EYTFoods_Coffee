import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <h1>Enjoy Your Taste</h1>
        <p>
          Our coffee beans are sourced from Vietnam and South America. It's
          roasted inhouse with a lot of care to ensure high quality of coffee.
          We hope to satisfy every customer's taste as it is our goal of this
          brand.
        </p>
        {/* <a href="#tours" className="scroll-link btn btn-white">
          Explore Our Products
        </a> */}
        <Link className="link btn btn-white" to="/shop">
          Our Products
        </Link>
      </div>
    </div>
  );
};

export default Banner;
