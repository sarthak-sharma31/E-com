import React from 'react'

export default function Footer() {
  return (
	<footer className="footer">
		<div className="footer-col">
			<h4>Get in touch</h4>
			<p>support@amrutam.global</p>
			<p>Amrutam Pharmaceuticals Pvt Ltd.,<br />
			chitragupt ganj, Nai Sadak, Lashkar,<br />
			Gwalior - 474001</p>
			<p>+91 9713171999</p>
			<div className="socialIcons">
				<i className="fab fa-facebook-f"></i>
				<i className="fab fa-instagram"></i>
				<i className="fab fa-youtube"></i>
				<i className="fab fa-twitter"></i>
				<i className="fab fa-linkedin-in"></i>
				<i className="fab fa-pinterest"></i>
			</div>
		</div>
		<div className="footer-col">
        <h4>Information</h4>
        <ul>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Terms and Conditions</a></li>
          <li><a href="/">Privacy Policy</a></li>
          <li><a href="/">Privacy Policy for Mobile Apps</a></li>
          <li><a href="/">Shipping, return and cancellation Policy</a></li>
          <li><a href="/">International Delivery</a></li>
          <li><a href="/">For Businesses, Hotels, and Resorts</a></li>
        </ul>
      </div>

      <div className="footer-col newsletter">
        <h4>Subscribe to our Newsletter and join <br />Amrutam Family today!</h4>
        <div className="newsletter-form">
          <input type="email" placeholder="Your Email Address" />
          <button>Subscribe</button>
        </div>
      </div>
    </footer>
  )
}
