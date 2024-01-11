// import React from "react";
// import "./App.css";

// const projects = [
//   {
//     title: "Hotel Booking Website",
//     link: "https://nimble-begonia-6f2449.netlify.app/",
//   },
//   { title: "Recipe Website", link: "https://forkeykfaiiiii.netlify.app/" },
//   { title: "Workout Map Website", link: "https://map0workout.netlify.app/" },
//   {
//     title: "Tours and Travels Website",
//     link: "https://astounding-fairy-9d5af9.netlify.app/",
//   },
//   { title: "E-commerce Website", link: "https://shopidhar.netlify.app/" },
// ];

// function Portfolio() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Your Name - Portfolio</h1>
//         <p>Welcome to my portfolio. Check out my projects below:</p>
//         <div className="Projects">
//           {projects.map((project, index) => (
//             <div key={index} className="Project">
//               <h2>{project.title}</h2>
//               <a href={project.link} target="_blank" rel="noopener noreferrer">
//                 Visit Project
//               </a>
//             </div>
//           ))}
//         </div>
//       </header>
//     </div>
//   );
// }

// export default Portfolio;

// import React, { useState } from "react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import "./App.css";

// const projects = [
//   {
//     title: "Hotel Booking Website",
//     link: "https://nimble-begonia-6f2449.netlify.app/",
//   },
//   { title: "Recipe Website", link: "https://forkeykfaiiiii.netlify.app/" },
//   { title: "Workout Map Website", link: "https://map0workout.netlify.app/" },
//   {
//     title: "Tours and Travels Website",
//     link: "https://astounding-fairy-9d5af9.netlify.app/",
//   },
//   { title: "E-commerce Website", link: "https://shopidhar.netlify.app/" },
// ];

// function App() {
//   const [showSidebar, setShowSidebar] = useState(false);

//   const toggleSidebar = () => {
//     setShowSidebar(!showSidebar);
//   };

//   return (
//     <div className={`App ${showSidebar ? "sidebar-open" : ""}`}>
//       <header className="App-header">
//         <h1>Your Name - Portfolio</h1>
//         <button className="SidebarToggle" onClick={toggleSidebar}>
//           {showSidebar ? "Close Sidebar" : "Open Sidebar"}
//         </button>
//         <p>Welcome to my portfolio. Check out my projects below:</p>
//         <div className="Projects">
//           {projects.map((project, index) => (
//             <div key={index} className="Project">
//               <h2>{project.title}</h2>
//               <a href={project.link} target="_blank" rel="noopener noreferrer">
//                 Visit Project
//               </a>
//             </div>
//           ))}
//         </div>
//       </header>

//       <div className={`Sidebar ${showSidebar ? "open" : ""}`}>
//         <button className="CloseButton" onClick={toggleSidebar}>
//           &times;
//         </button>
//         <div className="SidebarContent">
//           <a
//             href="https://github.com/ChiragKumar601"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaGithub /> GitHub
//           </a>
//           <a
//             href="https://www.linkedin.com/in/chirag-kumar-97530721a/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaLinkedin /> LinkedIn
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import "./App.css";

const projects = [
  {
    title: "Hotel Booking Website",
    link: "https://nimble-begonia-6f2449.netlify.app/",
  },
  { title: "Recipe Website", link: "https://forkeykfaiiiii.netlify.app/" },
  { title: "Workout Map Website", link: "https://map0workout.netlify.app/" },
  {
    title: "Tours and Travels Website",
    link: "https://astounding-fairy-9d5af9.netlify.app/",
  },
  { title: "E-commerce Website", link: "https://shopidhar.netlify.app/" },
];

function Portfolio() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={`App ${showSidebar ? "sidebar-open" : ""}`}>
      <header className="App-header">
        <div className="SidebarToggle" onClick={toggleSidebar}>
          {showSidebar ? <FaTimes /> : <FaBars />}
        </div>
        <div className="Projects">
          {projects.map((project, index) => (
            <div key={index} className="Project">
              <h2>{project.title}</h2>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Visit Project
              </a>
            </div>
          ))}
        </div>
      </header>

      <div className={`Sidebar ${showSidebar ? "open" : ""}`}>
        <div className="CloseButton" onClick={toggleSidebar}>
          {showSidebar ? <FaTimes /> : <FaBars />}
        </div>
        <div className="SidebarContent">
          <a
            href="https://github.com/ChiragKumar601"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/chirag-kumar-97530721a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
