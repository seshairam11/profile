import React, { useEffect, useRef, useState } from "react";
import "./assets/css/font-awesome.min.css";
import "./assets/css/etlinefont.css";
import "./assets/css/owl.carousel.css";
import "./assets/css/animate.css";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/css/style.css";
import { ReactTyped } from 'react-typed';
import Preloader from "./ComponentOP/PreLoader";
import { Link } from "react-router-dom";


function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [startInit, setStartInit] = useState(true);
  const [skillSets, setSkillSets] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [timelineData, setTimelineData] = useState([]);
  const [contactDetails, setContactDetails] = useState([]);
  const [statusItems, setStatusItems] = useState([]);
  const aboutScrollRef = useRef(null);
  const skillsScrollRef = useRef(null);
  const portfolioScrollRef = useRef(null);
  const resumeScrollRef = useRef(null);
  const profileScrollRef = useRef(null);
  const contentScrollRef = useRef(null);


  const initControl = () => {
    // Simulate an initialization process
    const skills = [
      { name: 'HTML5', percent: 95, title: "Creating accessible, semantic web content with HTML5." },
      { name: 'CSS3', percent: 85, title: "Designing responsive, modern UIs with sleek styling." },
      { name: 'Javascript', percent: 80, title: "Building dynamic web experiences with modern scripting." },
      { name: 'MongoDB', percent: 85, title: "Managing data with a flexible, scalable NoSQL model for modern apps." },
      { name: 'Express.js', percent: 90, title: "Building fast, flexible backend APIs with Node.js." },
      { name: 'React.JS', percent: 95, title: "Building dynamic, efficient UIs with component-based development." },
      { name: 'Node.js', percent: 70, title: "Powering scalable server-side apps with JavaScript and V8 engine." },
      { name: 'Socket.IO', percent: 90, title: "Enabling real-time two-way communication between clients and servers." },
      { name: 'React Native', percent: 60, title: "Create cross-platform mobile apps with JavaScript and React." },
      { name: 'GitHub', percent: 90, title: "Collaborative platform for version control and code sharing with Git." },
      { name: 'AWS', percent: 60, title: "Cloud platform for scalable app hosting and deployment." },
      { name: 'MySQL', percent: 60, title: "Open-source RDBMS for structured data storage and fast retrieval." },
    ];

    const portfolioItems = [
      { id: 1, image: 'assets/img/portfolio/1.jpg', title: 'Project Name', category: 'Category' },
      { id: 2, image: 'assets/img/portfolio/2.jpg', title: 'Project Name', category: 'Category' },
      { id: 3, image: 'assets/img/portfolio/3.jpg', title: 'Project Name', category: 'Category' },
      { id: 4, image: 'assets/img/portfolio/4.jpg', title: 'Project Name', category: 'Category' },
      { id: 5, image: 'assets/img/portfolio/5.jpg', title: 'Project Name', category: 'Category' },
      { id: 6, image: 'assets/img/portfolio/6.jpg', title: 'Project Name', category: 'Category' },
    ];
    const timelineDataLocal = [
      {
        type: 'header',
        icon: 'briefcase',
        title: 'Work Experience',
        text: 'A journey of professional growth through hands-on industry roles and impactful contributions.',
      },
      {
        type: 'job',
        date: 'Nov 2024 - Present',
        title: 'MMC Enterprises',
        role: 'MERN Stack Developer',
        text: 'Building full-stack web applications using MongoDB, Express.js, React, and Node.js.',
      },
      {
        type: 'job',
        date: 'May 2024 - Nov 2024',
        title: 'EVI Software Solutions Pvt Ltd',
        role: 'MERN Stack Developer',
        text: 'Building full-stack web applications using MongoDB, Express.js, React, and Node.js.',
      },
      {
        type: 'job',
        date: 'Dec 2023 - May 2024',
        title: 'Star Health and Allied Insurance',
        role: 'Claim Relaction Officer',
        text: 'Managing and resolving insurance claims while ensuring smooth communication between clients and providers.',
      },
      {
        type: 'header',
        icon: 'graduation-cap',
        title: 'Education',
        text: 'Academic background that laid the foundation for my technical and professional growth.',
      },
      {
        type: 'education',
        date: 'Jun 2020 - May 2023',
        title: 'Dr. Mgr Educational and Research Institute',
        role: 'Bachelor of Computer Applications',
        text: 'Bachelor of Computer Applications – Building strong foundations in programming, databases, and software development.',
      },
      {
        type: 'education',
        date: 'Jun 2018 - May 2020',
        title: 'PCKG Higher Secondary School',
        role: '12th Grade',
        text: 'Higher Secondary Education (12) – Completed with a focus on Computer Application',
      },
      {
        type: 'education',
        date: 'Jun 2017 - May 2018',
        title: 'PCKG Higher Secondary School',
        role: '10th Grade',
        text: 'Completed foundational education.',
      },
    ];

    const contactDetailsLocal = [
      { icon: "fa-map-marker", text: "Kodambakkam, Chennai" },
      { icon: "fa-mobile", text: "+91 70106 31022" },
      { icon: "fa-envelope-o", text: "4602seshasairam@gmail.com" },
      { icon: "fa-link", text: "www.websitename.com" },
    ];

    const statusItemsLocal = [
      { icon: "icon-briefcase", count: 358, label: "Projects Done" },
      { icon: "icon-alarmclock", count: "3,011", label: "Hours of Work" },
      { icon: "icon-trophy", count: 11, label: "Awards Won" },
      { icon: "icon-happy", count: 250, label: "Happy Clients" },
    ]

    setStatusItems(statusItemsLocal);
    setContactDetails(contactDetailsLocal);
    setTimelineData(timelineDataLocal);
    setPortfolio(portfolioItems);
    setSkillSets(skills);
    setStartInit(false);
    setShowLoader(false);
  }
  function fnOnClickButton() {
    const navbar = document.querySelector('#bs-example-navbar-collapse-1');
    if (navbar) {
      navbar.classList.toggle('in');
    }
  }
  const handleScroll = () => {
    const navbar = document.querySelector('#marker');
    if (window.scrollY > 130) {
      // console.log("Scroll position:", window.scrollY);
      if (navbar) {
        navbar.classList.add('navbar-shrink');
      }
    } else {
      // console.log("Scroll position: good");
      if (navbar) {
        navbar.classList.remove('navbar-shrink');
      }
    }
  };
  const scrollToRefSlowly = (ref) => {
    const targetY = ref.current.offsetTop;
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime = null;
    const duration = 1000; // Slower = higher value (ms)

    const easeInOutQuad = (t) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const animateScroll = (time) => {
      if (!startTime) startTime = time;
      const timeElapsed = time - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutQuad(progress);
      window.scrollTo(0, startY + distance * ease);
      if (progress < 1) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
    const navbar = document.querySelector('#bs-example-navbar-collapse-1');
    if (navbar) {
      navbar.classList.remove('in');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (startInit) {
      initControl();
    }
  }, [startInit]);

  return (
    <>
      {showLoader ?
        <Preloader />
        :
        <>
          <header>
            <nav id='marker' className="navbar navbar-default navbar-fixed-top">
              <div className="container">
                <div className="navbar-header page-scroll">
                  <button
                    type="button"
                    className="navbar-toggle"
                    onClick={fnOnClickButton}
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <Link onClick={() => scrollToRefSlowly(profileScrollRef)} className="navbar-brand page-scroll">Profile</Link>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                    <li className="hidden active">
                      <Link to="/"></Link>
                    </li>
                    <li><Link onClick={() => scrollToRefSlowly(aboutScrollRef)} className="page-scroll">About</Link></li>
                    <li><Link onClick={() => scrollToRefSlowly(skillsScrollRef)} className="page-scroll">Skills</Link></li>
                    <li><Link onClick={() => scrollToRefSlowly(portfolioScrollRef)} className="page-scroll">Portfolio</Link></li>
                    <li><Link onClick={() => scrollToRefSlowly(resumeScrollRef)} className="page-scroll">Resume</Link></li>
                    <li><Link onClick={() => scrollToRefSlowly(contentScrollRef)} className="page-scroll">Contact</Link></li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>

          <section ref={profileScrollRef}>
            <div className="welcome-area">
              <div className="overlay"></div>
              <div className="container">
                <div className="intro-text-area wow fadeInDown animated">
                  <div className="intro-text">Welcome to my site!</div>
                  <div className="type-text">
                    <ReactTyped
                      strings={[
                        'Hi, I am Seshairam',
                        'I am a MERN Stack Developer',
                        'I have 1 Yrs Experience',
                        'I am Very Hard Worker',
                      ]}
                      typeSpeed={40}
                      backSpeed={50}
                      loop
                    />
                  </div>
                  <Link onClick={() => scrollToRefSlowly(aboutScrollRef)} className="page-scroll btn btn-white">
                    More About Me
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section ref={aboutScrollRef} id="about" className="section-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h2 className="section-heading">About me</h2>
                  <h3 className="section-subheading text-muted">
                    I'm a MERN Stack developer skilled in MongoDB, Express.js, React, and Node.js, building full-stack web applications.
                  </h3>
                </div>

                <div
                  className="col-lg-5 col-md-5 col-sm-5 col-xs-12 text-center media wow zoomIn animated"
                  style={{ visibility: 'visible', animationName: 'zoomIn' }}
                >
                  <img
                    alt="Profile"
                    className="img-circle img-me"
                    src={require("./assets/img/sesha.jpg")}
                  />
                </div>

                <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 media">
                  <h3 className="name">Seshairam</h3>
                  <h4 className="font-thin">MERN Stack Developer</h4>
                  <p className="text-muted">
                    I am a passionate MERN Stack developer with a strong foundation in building dynamic
                    and responsive web applications using MongoDB, Express.js, React, and Node.js.
                    I enjoy turning complex problems into clean, efficient, and scalable solutions,
                    focusing on both frontend user experience and backend performance.
                    My goal is to build seamless applications that are both functional and intuitive.
                  </p>
                  <p className="text-muted">
                    With hands-on experience in RESTful APIs, modern JavaScript (ES6+), and responsive design principles,
                    I take pride in writing clean, maintainable code. I'm constantly learning and keeping up with the latest
                    technologies in the web development ecosystem,
                    and I thrive in collaborative environments where innovation and creativity drive success.
                  </p>
                  <Link
                    className="download-resume-btn btn btn-blue wow bounce animated"
                    role="button"
                    style={{ visibility: 'visible', animationName: 'bounce' }}
                  >
                    Download Resume
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section ref={skillsScrollRef} id="skills" className="skills section-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h2 className="section-heading">Skills</h2>
                  <h3 className="section-subheading text-muted">
                    Proficient in building responsive full-stack web applications using modern development tools and frameworks
                  </h3>
                </div>
              </div>

              <div className="row">
                {skillSets.map((skill, index) => (
                  <div className="col-md-4 col-sm-6 skillsArea" key={index}>
                    <div className="skills">
                      <span data-percent={skill.percent} className="chart skill-bg">
                        <span className="percent">{skill.percent}</span>
                        <canvas height="152" width="152"></canvas>
                        <canvas height="152" width="152"></canvas>
                      </span>
                      <h4>{skill.name}</h4>
                      <p>{skill.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="status" className="section-padding">
            <div className="overlay"></div>
            <div className="container">
              <div className="row text-center">
                {statusItems.map((item, index) => (
                  <div key={index} className="col-sm-3 col-xs-6 single-status">
                    <i className={`${item.icon} fa-3x`}></i>
                    <h2 className="counter">{item.count}</h2>
                    <p>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section ref={portfolioScrollRef} id="portfolio" className="section-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h2 className="section-heading">Portfolio</h2>
                  <h3 className="section-subheading text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </h3>
                </div>
              </div>

              <div className="row">
                {portfolio.map((item) => (
                  <div className="col-md-4 col-sm-6 portfolio-item" key={item.id}>
                    <a href={`#portfolio-${item.id}`} className="portfolio-link" data-toggle="modal">
                      <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                          <i className="fa fa-plus fa-3x"></i>
                        </div>
                      </div>
                      {/* <img src={item.image} className="img-responsive" alt={item.title} /> */}
                    </a>
                    <div className="portfolio-caption">
                      <h4>{item.title}</h4>
                      <p className="text-muted">{item.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div id="hire-me">
            <div className="container">
              <div className="row text-center">
                <div
                  className="col-md-9 wow fadeIn animated"
                  style={{ visibility: 'visible', animationName: 'fadeIn' }}
                >
                  <h2>I am currently available for Work</h2>
                </div>
                <div className="col-md-3">
                  <Link
                    className="page-scroll btn btn-white2 wow bounceIn animated"
                    onClick={() => scrollToRefSlowly(contentScrollRef)}
                    style={{ visibility: 'visible', animationName: 'bounceIn' }}
                  >
                    Hire Me
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <section ref={resumeScrollRef} id="resume" className="section-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h2 className="section-heading">Resume</h2>
                  <h3 className="section-subheading text-muted">
                    A snapshot of my education, experience, and technical expertise.
                  </h3>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <ul className="timeline">
                    {/* Experience Header */}

                    {timelineData.map((item, index) => {
                      const isInverted = index % 2 !== 0 ? 'timeline-inverted' : '';

                      if (item.type === 'header') {
                        return (
                          <li key={index} className={isInverted}>
                            <div className="timeline-image">
                              <span
                                className="ico wow bounceIn animated"
                                style={{ visibility: 'visible', animationName: 'bounceIn' }}
                              >
                                <i className={`fa fa-${item.icon}`}></i>
                              </span>
                            </div>
                            <div className="timeline-panel">
                              <div className="timeline-heading">
                                <h2 className="subheading">{item.title}</h2>
                              </div>
                              <div className="timeline-body">
                                <p className="text-muted">{item.text}</p>
                              </div>
                            </div>
                          </li>
                        );
                      }

                      return (
                        <li key={index} className={isInverted}>
                          <div className="timeline-image">
                            <h4>
                              {item.date.split(' - ')[0]}
                              <br />-<br />
                              {item.date.split(' - ')[1]}
                            </h4>
                          </div>
                          <div className="timeline-panel">
                            <div className="timeline-heading">
                              <h4>{item.title}</h4>
                              <h4 className="subheading">{item.role}</h4>
                            </div>
                            <div className="timeline-body">
                              <p className="text-muted">{item.text}</p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                    {/* End Education */}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section ref={contentScrollRef} id="contact" className="section-padding">
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h2 className="section-heading">Contact</h2>
                  <h3 className="section-subheading text-dark">
                    Looking to hire? I’m ready to contribute — let’s talk!
                  </h3>
                </div>
              </div>
              <div className="row">
                {/* Contact details */}
                <div className="col-md-5">
                  <div className="form-text">
                    <h4>Details</h4>
                    <p>
                      Interested in working together? Let’s connect!
                    </p>
                    {contactDetails.map((detail, index) => (
                      <p key={index}>
                        <i className={`fa ${detail.icon} fa-lg`}></i> {detail.text}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Contact form */}
                <form name="sentMessage" id="contactForm" noValidate className="col-md-7">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      id="name"
                      required
                      data-validation-required-message="Please enter your name."
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      id="email"
                      required
                      data-validation-required-message="Please enter your email address."
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Your Phone"
                      id="phone"
                      required
                      data-validation-required-message="Please enter your phone number."
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Your Message"
                      id="message"
                      required
                      data-validation-required-message="Please enter a message."
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button
                    type="submit"
                    className="btn btn-white wow bounceIn animated"
                    style={{ visibility: "visible", animationName: "bounceIn" }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>


        </>
      }

    </>
  );
}

export default App;
