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
import { motion, useInView } from "framer-motion";


const SkillCircle = ({ percent, name, title }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true }); // run once

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) setShouldAnimate(true);
  }, [isInView]);

  useEffect(() => {
    if (!shouldAnimate) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const radius = 72;
    const lineWidth = 10;
    let current = 0;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const startAngle = -0.5 * Math.PI;

    const draw = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = "#00c4ff";
      ctx.lineWidth = lineWidth;
      ctx.stroke();

      // Foreground arc
      const endAngle = startAngle + (2 * Math.PI * current) / 100;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.strokeStyle = "#0075ff";
      ctx.lineWidth = lineWidth;
      ctx.lineCap = "round";
      ctx.stroke();

      // Text
      ctx.fillStyle = "#333";
      ctx.font = "bold 20px 'Roboto', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`${Math.round(current)}%`, centerX, centerY);
    };

    const animate = () => {
      if (current < percent) {
        current += 1;
        draw();
        requestAnimationFrame(animate);
      } else {
        draw();
      }
    };

    animate();
  }, [shouldAnimate, percent]);

  return (
    <div className="skills" ref={containerRef}>
      <span className="chart skill-bg">
        <canvas ref={canvasRef} width="153" height="153"></canvas>
      </span>
      <h4>{name}</h4>
      <p>{title}</p>
    </div>
  );
};


function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [startInit, setStartInit] = useState(true);
  const [skillSets, setSkillSets] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [timelineData, setTimelineData] = useState([]);
  const [contactDetails, setContactDetails] = useState([]);
  const aboutScrollRef = useRef(null);
  const skillsScrollRef = useRef(null);
  const portfolioScrollRef = useRef(null);
  const resumeScrollRef = useRef(null);
  const profileScrollRef = useRef(null);
  const contentScrollRef = useRef(null);
  const scrollSpyRef = useRef([]);
  const ctlAttribute = useRef();


  const Elements = [
    <Profile />,
    <About />,
    <Skills />,
    <Portfolio />,
    <HireMe />,
    <Resume />,
    <Contact />,
  ]

  const hostname = "https://whoami-sesha.netlify.app/";


  const initControl = () => {
    // Simulate an initialization process
    const skills = [
      { name: 'HTML/CSS', percent: 95, title: "Accessible HTML content, responsive modern UIs." },
      { name: 'Javascript', percent: 80, title: "Building dynamic web experiences with modern scripting." },
      { name: 'MongoDB', percent: 85, title: "Managing data with a flexible, scalable NoSQL model for modern apps." },
      { name: 'Express.js', percent: 90, title: "Building fast, flexible backend APIs with Node.js." },
      { name: 'React.JS', percent: 95, title: "Building dynamic, efficient UIs with component-based development." },
      { name: 'Node.js', percent: 70, title: "Powering scalable server-side apps with JavaScript and V8 engine." },
      { name: 'Socket.IO', percent: 90, title: "Enabling real-time two-way communication between clients and servers." },
      { name: 'React Native', percent: 60, title: "Create cross-platform mobile apps with JavaScript and React." },
      { name: 'GitHub', percent: 90, title: "Collaborative platform for version control and code sharing with Git." },
    ];
    const initArray = [
      {
        /*Ctl:Your Name : 0*/
        arrayindex: 0,
        csstheme: {
          placeholder: "Your Name",
          classname: "form-control",
          id: "txt_name",
          inputtype: "text",
          length: 20,
          readonly: false,
          hinttext: "Enter The Recruiter Name",
        },
        inputvalue: "",
        tooltip: {
          place: "bottom",
          classname: "tooltip-react",
          isfocus: "",
          errorshow: "",
          isvalidation: false,
        },
        validate: {
          mandatory: true,
          datatype: "alpha",
        },
        error: {
          errorshow: false,
          errormsg: "The field is mandatory",
        },
      },
      {
        /*Ctl:Your Email : 1*/
        arrayindex: 1,
        csstheme: {
          placeholder: "Your Email",
          classname: "form-control",
          id: "txt_email",
          inputtype: "email",
          length: 50,
          readonly: false,
          hinttext: "Enter the Recruiter Email to Sent the Conformation Mail",
        },
        inputvalue: "",
        tooltip: {
          place: "bottom",
          classname: "tooltip-react",
          isfocus: "",
          errorshow: "",
          isvalidation: false,
        },
        validate: {
          mandatory: true,
          datatype: "email",
        },
        error: {
          errorshow: false,
          errormsg: "The field is mandatory",
        },
      },
      {
        /*Ctl:Your Phone : 2*/
        arrayindex: 2,
        csstheme: {
          placeholder: "Your Phone",
          classname: "form-control",
          id: "txt_phone",
          inputtype: "number",
          length: 10,
          readonly: false,
          hinttext: "Enter The Recruiter Phone no",
        },
        inputvalue: "",
        tooltip: {
          place: "bottom",
          classname: "tooltip-react",
          isfocus: "",
          errorshow: "",
          isvalidation: false,
        },
        validate: {
          mandatory: true,
          datatype: "phoneno",
        },
        error: {
          errorshow: false,
          errormsg: "The field is mandatory",
        },
      },
      {
        /*Ctl:Your Message : 2*/
        arrayindex: 2,
        csstheme: {
          placeholder: "Your Message",
          classname: "form-control",
          id: "txt_message",
          readonly: false,
          hinttext: "Enter The Recruiter Concern",
        },
        inputvalue: "",
        tooltip: {
          place: "bottom",
          classname: "tooltip-react",
          isfocus: "",
          errorshow: "",
          isvalidation: false,
        },
        validate: {
          mandatory: true,
          datatype: "default",
        },
        error: {
          errorshow: false,
          errormsg: "The field is mandatory",
        },
      },
      {
        /*Ctl:Send Message : 3*/
        arrayindex: 3,
        csstheme: {
          labletext: "Send Message",
          classname: "btn btn-white2 wow bounceIn animated",
          id: "btn_sendmassage",
        },
      },
    ]
    ctlAttribute.current = initArray

    const portfolioItems = [
      {
        id: 1, image: 'AutomobileLeasingSystem.jpg', title: 'Automobile Leasing System', category: 'Application',
        para: `The Automobile Leasing System is a digital platform that streamlines vehicle rental and leasing for both providers and renters. It features two apps: one for providers to manage listings and one for renters to search and book vehicles. The prototype uses mobile-based location tracking via React Native to simulate GPS, which will later be replaced by actual GPS devices. Key features include provider onboarding, secure payments, booking management, and ratings. This system offers a scalable, user-friendly, and secure solution that benefits both vehicle owners and customers with real-time tracking and easy access to rentals.`,
        buttons: [
          {
            className: "btn btn-black",
            icon: "fa fa-github",
            text: "View on GitHub",
            link: "https://github.com/seshairam11/automobile-leasing-system.git"
          },
          {
            className: "btn btn-white",
            icon: "fa fa-eye",
            text: "View on Portfolio",
            link: "https://www.behance.net/gallery/230887235/Automobile-Leasing-System-using-MERN-Stack"
          }
        ]
      },
      {
        id: 2, image: 'Backing ChatBot.jpg', title: 'Backing ChatBot', category: 'Application',
        para: `"Banking Chatbot using MERN Stack with React Native" is a cross-platform mobile app that offers instant banking support through an AI-powered chatbot. Built with MongoDB, Express.js, React Native, and Node.js, it ensures a scalable backend and smooth mobile experience. The chatbot uses TensorFlow.js (NLP) and Socket.io for real-time, intelligent responses to user queries. Users can access banking details and processes from multiple banks in one place, eliminating the need for multiple apps. Developed with Expo Go for rapid testing, the app combines full-stack JavaScript with machine learning to deliver smart, real-time financial assistance.`,
        buttons: [
          {
            className: "btn btn-black",
            icon: "fa fa-github",
            text: "View on GitHub",
            link: "https://github.com/seshairam11/banking-chatbot.git"
          },
          {
            className: "btn btn-blue",
            icon: "fa fa-android",
            text: "Android App",
            link: `${hostname}Application/BackingChatBot.apk`
          },
          {
            className: "btn btn-white",
            icon: "fa fa-eye",
            text: "View on Portfolio",
            link: "https://www.behance.net/gallery/230906757/Banking-Chatbot-using-MERN-Stack-with-React-Native"
          }
        ]
      },
      {
        id: 3, image: 'ecomus.png', title: 'ecomus', category: 'Website',
        para: `The Agricultural Instrument Rental System is a digital platform that connects small-scale farmers with affordable access to modern farming equipment. Equipment owners can list tools with availability and pricing, while farmers can browse and book them as needed. The system includes real-time tracking, GPS-based mapping, secure payments, and features like subscriptions, loyalty rewards, and ratings. By enabling shared use of costly machinery, it promotes sustainable farming, reduces financial strain, and boosts productivity—empowering rural communities through digital innovation in agriculture.`,
        buttons: [
          {
            className: "btn btn-black",
            icon: "fa fa-github",
            text: "View on GitHub",
            link: "https://github.com/seshairam11/agricultar-instumental-rent.git"
          },
          {
            className: "btn btn-blue",
            icon: "fa fa-play",
            text: "Live Demo",
            link: "https://agricultare-instument-rental.netlify.app/"
          },
          {
            className: "btn btn-white",
            icon: "fa fa-eye",
            text: "View on Portfolio",
            link: "https://www.behance.net/gallery/230969951/Agriculture-instrument-rental-with-MERN-Stack"
          }
        ]
      },
      {
        id: 4, image: 'MGR ChatBot.jpg', title: 'MGR ChatBot', category: 'Application',
        para: `The College Chatbot using MERN Stack with React Native is a mobile support system designed to help students and staff get instant answers to academic and administrative queries. It features three user roles—Student, Staff, and Admin. Students and staff can ask questions related to courses, exams, fees, etc., while Admins manage FAQs and model questions. The app uses Socket.io for real-time chat and TensorFlow.js (NLP) to process queries intelligently. Built with React Native, Expo Go, and VS Code, the system offers a scalable and smart solution for efficient college communication.`,
        buttons: [
          {
            className: "btn btn-black",
            icon: "fa fa-github",
            text: "View on GitHub",
            link: "https://github.com/seshairam11/collage-chatbot.git"
          },
          {
            className: "btn btn-blue",
            icon: "fa fa-android",
            text: "Android App",
            link: `${hostname}Application/CollageChatbot.apk`
          },
          {
            className: "btn btn-white",
            icon: "fa fa-eye",
            text: "View on Portfolio",
            link: "https://www.behance.net/gallery/230887235/Automobile-Leasing-System-using-MERN-Stack"
          }
        ]
      },
      {
        id: 5, image: 'OrderUP SKCW.png', title: 'OrderUP SKCW', category: 'Website',
        para: `OrderUp SKCW is a smart canteen ordering system for educational institutions, built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). It allows students to browse menus, place customized orders, and track them in real-time. Canteen staff can manage orders and inventory via an admin panel. A key feature is QR code-based login using student ID cards for quick and secure access. With Socket.io, users receive real-time updates, and unpaid orders are auto-cancelled after a timeout. The system enhances dining efficiency, reduces wait times, and supports digital payments—offering a modern, scalable solution for campus canteens.`,
        buttons: [
          {
            className: "btn btn-black",
            icon: "fa fa-github",
            text: "View on GitHub",
            link: "https://github.com/seshairam11/canteen-billing.git"
          },
          {
            className: "btn btn-blue",
            icon: "fa fa-play",
            text: "Live Demo",
            link: "https://canteen-billing.netlify.app/"
          },
          {
            className: "btn btn-white",
            icon: "fa fa-eye",
            text: "View on Portfolio",
            link: "https://www.behance.net/gallery/230885181/OrderUp-SKCW-A-Canteen-Ordering-using-the-MERN-Stack"
          }
        ]
      },
      {
        id: 6, image: 'heavy vehicle management.png', title: 'heavy vehicle management', category: 'Application',
        para: `The Heavy Vehicle Management System (HVMS) is a digital platform designed to streamline the tracking and management of heavy vehicles. It features modules for vehicle registration, driver management, trip scheduling, and real-time GPS-based tracking via mobile devices. With role-based access for admins and managers, the system enhances operational efficiency, reduces costs, and ensures better monitoring without the need for IoT hardware.`,
        buttons: [
          {
            className: "btn btn-black",
            icon: "fa fa-github",
            text: "View on GitHub",
            link: "https://github.com/seshairam11/heavy-vehicle-management.git"
          }
        ]
      },
      {
        id: 7, image: 'TrafficDetectionSystem.png', title: 'Traffic Detection System', category: 'Application',
        para: `The Traffic Light Detection System is a mobile-based application that detects nearby traffic lights using GPS and displays their current status with a countdown timer. Updated manually by field agents, the system helps drivers improve awareness, reduce congestion, and make safer decisions at intersections.`,
        buttons: [
          {
            className: "btn btn-black",
            icon: "fa fa-github",
            text: "View on GitHub",
            link: "https://github.com/seshairam11/traffic-detection-system.git"
          }
        ]
      },
      {
        id: 8, image: 'Smartfix.png', title: 'Traffic Detection System', category: 'Application',
        para: `SmartFix is an AI-powered mobile app that helps users diagnose and repair damaged items. Built with React Native and TensorFlow.js, it allows users to upload images, identifies issues using computer vision, and suggests fixes along with nearby stores for tools. SmartFix offers a quick, cost-effective, and eco-friendly solution for self-repair and maintenance.`,
        buttons: [
          {
            className: "btn btn-black",
            icon: "fa fa-github",
            text: "View on GitHub",
            link: "https://github.com/seshairam11/facial-tracking-on-driving.git"
          }
        ]
      },
      {
        id: 9, image: 'orderPls.png', title: 'Order Pls', category: 'Website',
        para: `OrderPls is a web-based platform designed to streamline hotel and restaurant operations by automating restaurant workflows and employee management. It features a restaurant portal for business registration, employee role assignment, and order monitoring, while the employee portal enables staff to manage tasks, process orders, and coordinate with the kitchen in real time. The system ensures efficient role-based access, seamless billing, and improved customer service through real-time updates and notifications, enhancing operational efficiency and optimizing restaurant management.`,
        buttons: [
          {
            className: "btn btn-black",
            icon: "fa fa-github",
            text: "View on GitHub",
            link: "https://github.com/seshairam11/orderpls.git"
          }
        ]
      },
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
      { icon: "fa-link", text: "https://whoami-sesha.netlify.app/" },
    ];


    const scrollSpy = [
      {
        id: "about",
        name: "About",
        ref: aboutScrollRef,
      },
      {
        id: "skills",
        name: "Skills",
        ref: skillsScrollRef,
      },
      {
        id: "portfolio",
        name: "Portfolio",
        ref: portfolioScrollRef,
      },
      {
        id: "resume",
        name: "Resume",
        ref: resumeScrollRef,
      },
      {
        id: "contact",
        name: "Contact",
        ref: contentScrollRef,
      },
    ]


    scrollSpyRef.current = scrollSpy;
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
    console.log("fired")
    const scrollPosition = window.scrollY;

    let lastActiveSectionId = null;

    // Find the last section in view
    for (let section of [{ id: "profile" }, ...scrollSpyRef.current]) {
      const element = document.getElementById(section.id);
      if (element && element.offsetTop <= scrollPosition) {
        lastActiveSectionId = section.id;
      }
    }

    // Now update class list for all sections
    for (let section of [{ id: "profile" }, ...scrollSpyRef.current]) {
      const navLink = document.getElementById(section.id + "-link");

      if (section.id === lastActiveSectionId) {
        navLink?.classList.add('scroll-spy');
      } else {
        navLink?.classList.remove('scroll-spy');
      }
    }

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
  function onPortfolioClose() {
    const portfolioDetails = document.querySelector('#hidden-portfolio-details');
    console.log("fired")
    if (portfolioDetails) {
      portfolioDetails.classList.remove('show', 'in');
      portfolioDetails.style.display = 'none';
    }
  }
  function onPortfolioOpen(index) {
    const project = portfolio[index];

    const modal = document.getElementById('hidden-portfolio-details');
    if (!modal) return;

    // Populate content manually
    document.getElementById('modal-category').textContent = project.category;
    document.getElementById('modal-title').textContent = project.title;
    const img = document.getElementById('modal-image');
    img.src = require(`./assets/img/portfolio/${project.image}`);
    img.alt = project.title;

    document.getElementById('modal-para').textContent = project.para;

    const btnContainer = document.getElementById('modal-buttons');
    btnContainer.innerHTML = '';
    project.buttons.forEach((btn) => {
      const a = document.createElement('a');
      a.href = btn.link || "#";
      a.target = "_blank";
      a.className = btn.className;
      a.style.marginRight = "10px";

      const icon = document.createElement('i');
      icon.className = btn.icon;
      icon.style.marginRight = "5px";

      a.appendChild(icon);
      a.appendChild(document.createTextNode(btn.text));
      btnContainer.appendChild(a);
    });

    // Show modal
    modal.classList.add('show', 'in');
    modal.style.display = 'block';
  }

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

  function Header() {
    return (
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
                <Link onClick={() => scrollToRefSlowly(profileScrollRef)} className="navbar-brand page-scroll ">Profile</Link>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li className="hidden active">
                    <Link to="/"></Link>
                  </li>
                  {scrollSpyRef.current.map((item, index) => {
                    console.log(item.id + "-link");
                    return (
                      <li key={index}>
                        <Link id={item.id + "-link"} onClick={() => scrollToRefSlowly(item.ref)} className={`page-scroll `}>{item.name}</Link>
                      </li>)
                  })}
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </>
    )
  }



  function Profile() {
    return (
      <>
        <section id="profile" ref={profileScrollRef}>
          <div className="welcome-area">
            <div className="overlay"></div>
            <div className="container">
              <div className="intro-text-area wow fadeInDown animated">
                <div className="intro-text">Welcome to my site!</div>
                <div className="type-text">
                  <ReactTyped
                    strings={[
                      'Hi, I am Seshairam',
                      'I am MERN Stack Developer',
                      'I have 1 Yr Experience',
                      'I am Very Hard Worker',
                    ]}
                    typeSpeed={30}
                    backSpeed={120}
                    loop
                  />
                </div>
                <Link onClick={() => scrollToRefSlowly(aboutScrollRef)} className="page-scroll btn btn-white2">
                  More About Me
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  function About() {
    return (
      <>
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
                <a
                  rel="noreferrer"
                  href={`${hostname}Application/seshaResume.pdf`}
                  target={"_blank"}
                  className="download-resume-btn btn btn-blue wow bounce animated"
                  role="button"
                  style={{ visibility: 'visible', animationName: 'bounce' }}
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  function Skills() {
    return (
      <>
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
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    scaleY: 1,
                    transition: { duration: 1 },
                  }}
                  viewport={{ once: true, amount: "0.5" }}
                  className="col-md-4 col-sm-6 skillsArea"
                  key={index}>
                  <SkillCircle percent={skill.percent} name={skill.name} title={skill.title} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </>
    )
  }


  function Portfolio() {
    return (
      <>
        <section ref={portfolioScrollRef} className="section-padding" id="portfolio" >
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="section-heading">Portfolio</h2>
                <h3 className="section-subheading text-muted">
                  A showcase of my projects and skills built with passion and precision.<br />
                  Explore how I turn ideas into impactful digital solutions.
                </h3>
              </div>
            </div>

            <div className="row">
              {portfolio.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    scaleY: 1,
                    transition: { duration: 1 },
                  }}
                  viewport={{ once: true, amount: "0.2" }}
                  className="col-md-4 col-sm-6 portfolio-item" key={item.id}>
                  <Link onClick={() => { onPortfolioOpen(index) }} className="portfolio-link" data-toggle="modal" >
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <i className="fa fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img src={require(`./assets/img/portfolio/${item.image}`)} style={{ width: "600px", height: "350px", overflow: "hidden" }} className="img-responsive" alt={item.title} />
                  </Link>
                  <div className="portfolio-caption">
                    <h4>{item.title}</h4>
                    <p className="text-muted">{item.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div
            id="hidden-portfolio-details"
            className="portfolio-modal modal fade"
            style={{ display: "none" }}
            tabIndex="-1"
          >
            <div className="modal-content">
              <div className="close-modal" onClick={onPortfolioClose}>
                <div className="lr">
                  <div className="rl"></div>
                </div>
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div style={{ display: "contents" }} className="col-lg-8">
                    <div className="modal-body">
                      <h2 id="modal-category"></h2>
                      <p id="modal-title" className="item-intro text-muted"></p>
                      <img
                        id="modal-image"
                        className="img-responsive img-centered"
                        style={{ width: "400px", height: "350px", overflow: "hidden" }}
                        alt=""
                      />
                      <p id="modal-para"></p>
                      <div id="modal-buttons"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </>
    )
  }

  function HireMe() {
    return (
      <>
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
      </>
    )
  }

  function Resume() {
    return (
      <>
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
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{
                              opacity: 1,
                              scaleY: 1,
                              transition: { duration: 1 },
                            }}
                            viewport={{ once: true, amount: "0.5" }}
                            className="timeline-image">
                            <span
                              className="ico wow bounceIn animated"
                              style={{ visibility: 'visible', animationName: 'bounceIn' }}
                            >
                              <i className={`fa fa-${item.icon}`}></i>
                            </span>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{
                              opacity: 1,
                              scaleY: 1,
                              transition: { duration: 1 },
                            }}
                            viewport={{ once: true, amount: "0.5" }}
                            className="timeline-panel">
                            <div className="timeline-heading">
                              <h2 className="subheading">{item.title}</h2>
                            </div>
                            <div className="timeline-body">
                              <p className="text-muted">{item.text}</p>
                            </div>
                          </motion.div>
                        </li>
                      );
                    }

                    return (
                      <li key={index} className={isInverted}>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{
                            opacity: 1,
                            scaleY: 1,
                            transition: { duration: 1 },
                          }}
                          viewport={{ once: true, amount: "0.5" }}
                          className="timeline-image">
                          <h4>
                            {item.date.split(' - ')[0]}
                            <br />-<br />
                            {item.date.split(' - ')[1]}
                          </h4>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{
                            opacity: 1,
                            scaleY: 1,
                            transition: { duration: 1 },
                          }}
                          viewport={{ once: true, amount: "0.5" }}
                          className="timeline-panel">
                          <div className="timeline-heading">
                            <h4>{item.title}</h4>
                            <h4 className="subheading">{item.role}</h4>
                          </div>
                          <div className="timeline-body">
                            <p className="text-muted">{item.text}</p>
                          </div>
                        </motion.div>
                      </li>
                    );
                  })}
                  {/* End Education */}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  function Contact() {
    return (
      <>
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
              <div className="col-md-5">
                <div className="form-text thank-you-text">
                  <h4>Thank you</h4>
                  <p >
                    I'm a passionate <strong>MERN Stack Developer</strong> with a strong focus on building clean,
                    scalable, and high-performance web applications. My work combines technical precision with
                    user-centered design, and I’m constantly learning to stay ahead in the fast-moving tech
                    landscape. Your time and interest in exploring my portfolio mean a lot, and I hope it gives
                    you a clear sense of my dedication, curiosity, and drive to create meaningful digital
                    experiences. I look forward to the opportunity to connect and contribute to innovative teams
                    or projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
  return (
    <>
      {showLoader ?
        <Preloader />
        :
        <>
          <Header />

          {Elements.map((Element, index) => {
            const Component = Element.type; // Use PascalCase
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  scaleY: 1,
                  transition: { duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <Component />
              </motion.div>
            );
          })}
        </>
      }

    </>
  );
}

export default App;
