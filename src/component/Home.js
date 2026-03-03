import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";
import logo from "../component/img/logonew.png";
// import logo1 from "./logo/image_logo.png";
import logo2 from "./logo/logo1.svg";
import logo3 from "./logo/logo2.svg";
import logo4 from "./logo/logo3.svg";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skills = [
    { icon: "html5", color: "text-danger", label: "HTML" },
    { icon: "css3-alt", color: "text-primary", label: "CSS" },
    { icon: "js", color: "text-warning", label: "JavaScript" },
    { icon: "react", color: "text-info", label: "React.js" },
  ];

  const projects = [
    { title: "Weather App", desc: "Live weather data using OpenWeather API and React." },
    { title: "Portfolio Website", desc: "Personal portfolio built with React, Bootstrap and animations." },
    { title: "Task Manager", desc: "To-Do App using React Hooks and LocalStorage." },
  ];

  const education = [
    { degree: "B.Sc in Computer Science", school: "XYZ University", year: "2020 - 2023" },
    { degree: "High School", school: "ABC School", year: "2018 - 2020" },
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "2+", label: "Years Experience" },
    { number: "10+", label: "Technologies Learned" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  const testimonials = [
    { name: "Ajay Kumar", text: "Rahul is a talented React developer. Delivered my project on time!" },
    { name: "Priya Sharma", text: "Very creative UI designs and smooth animations." },
  ];

 

  const logos = [
  // { src: logo1, alt: "Logo 1" },
  { src: logo2, alt: "Logo 2" },
  { src: logo3, alt: "Logo 3" },
  { src: logo4, alt: "Logo 4" },
];
  return (
    <>
      {/* Navbar */}
     {/* Navbar */}
<nav
  className="navbar navbar-dark bg-dark shadow-sm fixed-top"
  style={{ background: "linear-gradient(294deg, #1f1c2c, #124d25ff)" }}
>
  <div className="container d-flex justify-content-between align-items-center">
    {/* Brand */}
    <a className="navbar-brand fw-bold d-flex align-items-center" href="#home">
      <img
        src={logo}
        alt="Rahul Logo"
        style={{ height: "40px" }}
        className="d-inline-block align-text-top"
      />
    </a>

    {/* Offcanvas toggle icon (hamburger) */}
    <button
      className="btn btn-dark d-lg-none"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar"
    >
      <i className="fas fa-bars fs-2 text-white"></i>
    </button>

    {/* Horizontal links for large screen */}
    <div className="d-none d-lg-block">
      <ul className="navbar-nav d-flex flex-row gap-4">
        <li className="nav-item">
          <a className="nav-link text-white" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#testimonials">Testimonials</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#contact">Contact</a>
        </li>
      </ul>
    </div>

  <div
  className="offcanvas offcanvas-end text-bg-dark custom-offcanvas-width"
  tabIndex="-1"
  id="offcanvasNavbar"
  aria-labelledby="offcanvasNavbarLabel"
>
  <div className="offcanvas-header">
    <img
        src={logo}
        alt="Rahul Logo"
        style={{ height: "30px" }}
        className="d-inline-block align-text-top"
      />
    <button
      type="button"
      className="btn-close btn-close-white"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    ></button>
  </div>
  <div className="offcanvas-body p-2">
    <ul className="navbar-nav flex-column gap-2">
      <li className="nav-item">
        <a className="nav-link text-white d-flex align-items-center" href="#home">
          <i className="fas fa-home me-2"></i> Home1
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white d-flex align-items-center" href="#about" >
          <i className="fas fa-user me-2"></i> About
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white d-flex align-items-center" href="#skills">
          <i className="fas fa-code me-2"></i> Skills
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white d-flex align-items-center" href="#services" >
          <i className="fas fa-cogs me-2"></i> Services
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white d-flex align-items-center" href="#projects" >
          <i className="fas fa-project-diagram me-2"></i> Projects
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white d-flex align-items-center" href="#testimonials">
          <i className="fas fa-comments me-2"></i> Testimonials
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white d-flex align-items-center" href="#contact" >
          <i className="fas fa-envelope me-2"></i> Contact
        </a>
      </li>
    </ul>
  </div>
</div>

  </div>
</nav>



      {/* Hero Section */}
      <section
        id="home"
        className="vh-100 d-flex flex-column justify-content-center align-items-center text-white"
     style={{ background: "linear-gradient(278deg, rgb(0 12 1), rgb(25 6 6))" }}  

  

      >
        <div className="text-center px-3" data-aos="fade-up">
          <h1 className="display-4 fw-bold mb-3 color">Hi, I'm Rahul</h1>
          <h3 className="welcome-text mb-3">
            <span className="typewriter text-warning">Welcome to my Portfolio!</span>
          </h3>
          <p className="lead mb-4 text-wrap text-color">Frontend Developer | React.js Expert | Creative Designer</p>
          <a href="#contact" className="btn  mt-3 px-5 py-2 shadow-lg bg-color">Hire Me</a>
        <a href="../Rahul_Resume.pdf"  className="btn btn-outline-warning mt-3 px-3 py-2 shadow-lg ms-3" download>   <i className="fas fa-download me-2"></i> Resume</a>
    
   
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 background-color" style={{backgroundClip:"#a1989982"}}>
        <div className="container" data-aos="fade-right">
          <h2 className="text-center mb-4">About Me</h2>
          <p className="text-center mx-auto w-100 w-md-75 px-3 text-wrap">
            I am a creative and detail-oriented React.js developer focused on responsive design, animations, and user-friendly UI. 
            Always ready to take on challenges and explore new technologies to craft innovative solutions.
          </p>
        </div>
      </section>


      {/* Skills Section */}
  <section id="skills" className="py-5 bg-white shadow-lg background-color">
  <div className="container" data-aos="zoom-in">
    <h2 className="text-center mb-5">My Skills</h2>
    <div className="row g-4 justify-content-center">
      {[
        { icon: "html5", color: "text-danger", label: "HTML" },
        { icon: "css3-alt", color: "text-primary", label: "CSS" },
         { icon: "bootstrap", color: "text-primary", label: "Bootstrap" }, // Bootstrap added
        { icon: "js", color: "text-warning", label: "JavaScript" },
        { icon: "react", color: "text-info", label: "React.js/react native" },
        { icon: "node", color: "text-success", label: "Node.js" }, // Node.js added
     
      ].map((skill, index) => (
        <div className="col-6 col-sm-6 col-md-3 col-lg-2 text-center" key={index}>
          <div className="p-4 border rounded shadow-sm bg-light h-100 hover-scale transition">
            <i className={`fab fa-${skill.icon} fa-3x ${skill.color}`}></i>
            <p className="mt-3 fw-semibold">{skill.label}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
 <section id="services" className="py-5 bg-light background-color">
  <div className="container" data-aos="fade-up">
    <h2 className="text-center mb-5">What I Do</h2>
    <div className="row g-4 justify-content-center">

      {/* Logo Design */}
      <div className="col-12 col-md-4 text-center">
        <div className="p-4 rounded shadow-lg bg-white h-100 hover-scale transition">
          <i className="fas fa-pencil-ruler fa-3x text-warning mb-3"></i>
          <h5 className="fw-bold mb-2">Logo Design</h5>
          <p>Create unique and creative logos that represent your brand identity.</p>
          {/* Button opens logo gallery modal */}
          <button
            className="btn btn-outline-primary mt-3"
            data-bs-toggle="modal"
            data-bs-target="#logoGalleryModal"
          >
            View Logos
          </button>
        </div>
      </div>

      {/* Website Development */}
      <div className="col-12 col-md-4 text-center">
        <div className="p-4 rounded shadow-lg bg-white h-100 hover-scale transition">
          <i className="fas fa-laptop-code fa-3x text-success mb-3"></i>
          <h5 className="fw-bold mb-2">Website Development</h5>
          <p>Build responsive, fast, and visually appealing websites using modern technologies.</p>
          <a  href="https://wa.me/916268781072" target="_blank"  rel="noopener noreferrer"  className="btn btn-outline-primary mt-3"><i className="fab fa-whatsapp"></i>Click to chat</a>
           <a href="tel:+916268781072"  className="btn btn-outline-primary mt-3 ms-3">Contact Me</a>
        </div>
      </div>

      {/* App Development */}
      <div className="col-12 col-md-4 text-center">
        <div className="p-4 rounded shadow-lg bg-white h-100 hover-scale transition">
          <i className="fas fa-mobile-alt fa-3x text-danger mb-3"></i>
          <h5 className="fw-bold mb-2">App Development</h5>
          <p>Develop user-friendly mobile applications for Android and iOS platforms.</p>
     <a  href="https://wa.me/916268781072" target="_blank"  rel="noopener noreferrer"  className="btn btn-outline-primary mt-3"><i className="fab fa-whatsapp"></i>Click to chat</a>
           <a href="tel:+916268781072"  className="btn btn-outline-primary mt-3 ms-3">Contact Me</a>
        </div>
      </div>

    </div>
  </div>

  {/* Logo Gallery Modal */}
  <div
      className="modal fade"
      id="logoGalleryModal"
      tabIndex="-1"
      aria-labelledby="logoGalleryLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="logoGalleryLabel">
              My Logos
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row g-3 justify-content-center">
              {logos.map((logo, i) => (
                <div className="col-6 col-md-3 text-center" key={i}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="img-fluid rounded shadow-sm hover-scale cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
 </section>


      {/* Projects Section */}
      <section id="projects" className="py-5 bg-light shadow-lg rounded background-color">
        <div className="container" data-aos="fade-up">
          <h2 className="text-center mb-5">Projects</h2>
          <div className="row g-4">
            {projects.map((project, index) => (
              <div className="col-12 col-md-4" key={index}>
                <div className="card h-100 shadow-sm border-0 hover-shadow transition">
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      {/* <section id="education" className="py-5 bg-white">
        <div className="container" data-aos="fade-left">
          <h2 className="text-center mb-5">Education</h2>
          <div className="row g-4 justify-content-center">
            {education.map((edu, i) => (
              <div className="col-12 col-md-6" key={i}>
                <div className="p-4 border rounded shadow-sm hover-scale transition">
                  <h5 className="fw-bold">{edu.degree}</h5>
                  <p className="mb-1">{edu.school}</p>
                  <small className="text-muted">{edu.year}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
     


      {/* Fun Facts / Stats Section */}
      <section className="py-5 bg-light">
        <div className="container" data-aos="zoom-in">
          <h2 className="text-center mb-5">Fun Facts</h2>
          <div className="row text-center g-4 justify-content-center">
            {stats.map((stat, i) => (
              <div className="col-6 col-md-3" key={i}>
                <div className="p-4 bg-white border rounded shadow-sm hover-scale transition">
                  <h3 className="fw-bold text-primary">{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-5 bg-white background-color">
        <div className="container" data-aos="fade-up">
          <h2 className="text-center mb-5">Testimonials</h2>
          <div className="row g-4 justify-content-center">
            {testimonials.map((testi, i) => (
              <div className="col-12 col-md-6" key={i}>
                <div className="p-4 border rounded shadow-sm bg-light hover-scale transition">
                  <p className="fst-italic">"{testi.text}"</p>
                  <h6 className="mt-3 fw-bold text-end">- {testi.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
{/* Contact Section */}
<section id="contact" className="py-5 bg-light background-color">
  <div className="container" data-aos="fade-up">
    <h2 className="text-center mb-5">Contact Me</h2>

    <div className="row justify-content-center">
      {/* Contact Info */}
      <div className="col-12 col-md-5 mb-4">
        <div className="p-4 rounded shadow-lg bg-white h-100">
          <h5 className="fw-bold mb-4">Get in Touch</h5>
          <p className="mb-3"><i className="fas fa-map-marker-alt me-2 text-primary"></i>Bhopal, India</p>
         <p className="mb-3">
  <i className="fas fa-envelope me-2 text-primary"></i>
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=mrrahulvishwakarma100@gmail.com"
    target="_blank"
    rel="noopener noreferrer" className="text-decoration-none"> mrrahulvishwakarma100@gmail.com</a>
</p>

    <p className="mb-3">
  <i className="fas fa-phone-alt me-2 text-primary"></i>
  <a href="tel:+916268781072" className="text-decoration-none">
    +91 6268781072
  </a>
</p>
<p>        <a href="https://wa.me/916268781072" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-success fs-5 me-3">
         <i className="fab fa-whatsapp"></i> Click to chat</a></p>

          <div className="mt-4">
        
           
            <a href="#" className="me-3 text-dark fs-5"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="me-3 text-dark fs-5"><i className="fab fa-facebook-f"></i></a>
      

          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="col-12 col-md-6">
        <div className="p-4 rounded shadow-lg bg-white h-100">
          <form className="row g-3">
            <div className="col-12">
              <input
                type="text"
                placeholder="Your Name"
                className="form-control form-control-lg shadow-sm"
              />
            </div>
            <div className="col-12">
              <input
                type="email"
                placeholder="Your Email"
                className="form-control form-control-lg shadow-sm"
              />
            </div>
            <div className="col-12">
              <textarea
                rows="2"
                placeholder="Your Message"
                className="form-control form-control-lg shadow-sm"
              ></textarea>
            </div>
            <div className="col-12 text-center">
              <button className="btn btn-outline-primary  px-3 shadow-lg hover-scale transition">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">&copy; {new Date().getFullYear()} RV | All rights reserved</p>
      </footer>
    </>
  );
};

export default Home;
