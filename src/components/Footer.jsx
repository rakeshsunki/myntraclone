import React from "react";
import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footercontainer}>
        {/* About Section */}
        <div className={styles.footercolumn}>
          <h3>About Myntra</h3>
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Myntra Insider</a>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className={styles.footercolumn}>
          <h3>Customer Support</h3>
          <ul>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Track Order</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className={styles.footercolumn}>
          <h3>Follow Us</h3>
          <div className={styles.socialicons}>
            <a href="#">
              <FaFacebookSquare className="inline" />
            </a>
            <a href="#">
              <FaInstagram className="inline" />
            </a>
            <a href="#">
              <FaTwitter className="inline" />
            </a>
          </div>
        </div>

        {/* Payment Options */}
        <div className={styles.footercolumn}>
          <h3>Payment Options</h3>
          <div className={styles.paymenticons}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="Visa"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/57/MasterCard_Logo.svg"
              alt="MasterCard"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.footerbottom}>
        &copy; {new Date().getFullYear()} Myntra Clone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
