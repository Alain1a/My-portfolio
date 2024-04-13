import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, generatePath } from 'react-router-dom';
import Home from './components/home';
import Blog from './components/blog';
import Services from './components/services';
import AboutUs from './components/About Us';
import ContactUs from './components/Contact Us';
import facebook from '../src/images/facebook.png';
import twiter from '../src/images/twiter.png';
import instagram from '../src/images/instagram.jpeg';
import Logo from '../src/images/Logo.jpeg';



function App() {
  return (
    <>
      <Router>
        <nav style={{ backgroundColor: 'black', color: 'white', marginLeft: '%', width: '100%', height: '80px', background: generatePath, position: 'fixed' }} >
          <div style={{ fontSize: '70px', fontFamily: '200px', }}>JangleZoo</div>
          <ul style={{ justifyContent: 'space-between', display: 'flex', marginLeft: '30%', width: '700px', }}>



            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact us">Contact Us</Link>
            </li>
          </ul>



        </nav>
        <div className="display-flex">

        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={< Blog />} />
          <Route path="/service" element={< Services />} />
          <Route path="/about" element={< AboutUs />} />
          <Route path="/ContactUs" element={< ContactUs />} />
        </Routes>
        {/* <button type='button' className="w-40 bg-green-300 rounded-full fixed mt- ml-[70%]"> Whatsapp Us</button> */}
      </Router>

      <footer className=" flex ml- bg-green-300">

        <div >
          <div className=" mt-16 ">
            {/* <img src={Logo} alt='' style={{ width: '100px', borderRadius: '5%', height: '100px' }} /> */}
            <div style={{ fontSize: '70px', fontFamily: '200px', }}>JangleZoo</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', marginTop: '10%' }}>
              <img src={facebook} alt='' style={{ width: '30px', borderRadius: '5%', height: '30px' }} />
              <img src={twiter} alt='' style={{ width: '30px', borderRadius: '5%', height: '30px' }} />
              <img src={instagram} alt='' style={{ width: '30px', borderRadius: '5%', height: '30px' }} />
            </div>
          </div>
        </div>



        <div style={{ width: '1000px', display: 'flex', justifyContent: 'space-between', marginTop: '7%', marginLeft: '150px' }}>
          <div>
            <h1 className="font-bold">CONTACT US</h1>
            <div>


              <p>Address: 123 Main Street, City, Country</p>

              <p>Phone: +123-456-7890</p>

              <p>Email: info@example.com</p>

              <p>Hours: Monday to Friday, 9:00 AM - 5:00 PM</p>

              <p>Follow Us</p>

              {/* <p>Facebook: facebook.com/yourcompany</p>
      <p>Twitter: @yourcompany</p>
      <p>Instagram: @yourcompany</p>
      <p>LinkedIn: linkedin.com/company/yourcompany</p>
      <p>Get in Touch</p> */}


              <p>[Contact Form]</p>

              <p>We appreciate your interest in [Your Company Name]. Let's connect!</p></div>

          </div>
          <div>
            <h1 className="font-bold">ABOUT US</h1>
            <div>
              <p>Welcome to Our Story</p>
              <p>At [Your Company Name], we're more than just a business</p>
              <p>Who We Are</p>
              <p>We are a team of dedicated individuals brought together</p>
              <p>by a shared passion for [your industry or mission]</p>
              <p> Our journey began with a simple idea: to [briefly explain the inception or motivation behind your company]</p>
              <p>driven by our unwavering dedication to [core values or goals].</p>
              {/* <p>Our mission is clear: [concisely state your mission or purpose]</p>
      <p>Every decision we make, every product we create,</p>
      <p>and every interaction we have is guided by this singular focus.</p>
      <p>We believe that by [mission-related goal or outcome], we can [impact or benefit].</p> */}
            </div>

          </div>
          <div>
            <h1 className="font-bold">MEET US</h1>
            <div>
              <p>Visit Our Office</p>

              <p>Address: [Your office address]</p>
              <p>Phone: [Your contact number]</p>
              {/* <p>Email: [Your email address]</p>
      <p>Attend an Event</p> */}

            </div>
          </div>
        </div>

      </footer>
      <hr />
      <div style={{ marginLeft: '30%', display: 'flex' }}>  <h1 className="font-bold">Copyright</h1>
        © 2024 Your Company. All rights reserved.

      </div>
    </>

  );
}

export default App;
