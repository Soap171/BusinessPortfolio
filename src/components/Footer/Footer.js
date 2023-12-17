import React from "react";
import "./Footer.css";

function Footer() {
  const footerStyle = {
    backgroundColor: "#030303",
    color: "white",
  };
  return (
    <footer style={footerStyle} className="text-center py-4 ">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: info@TravelPulse.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="col-md-4">
            <h5 className="mb-3">Follow Us</h5>
            <p>
              <a href="#" className="text-light linkS ">
                Facebook
              </a>
            </p>
            <p>
              <a href="#" className="text-light linkS">
                Twitter
              </a>
            </p>
            <p>
              <a href="#" className="text-light linkS">
                Instagram
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>We make travel easy for you!</p>
          </div>
        </div>
        <hr className="my-2" />
        <p>&copy; 2023 TravelPulse</p>
      </div>
    </footer>
  );
}

export default Footer;
