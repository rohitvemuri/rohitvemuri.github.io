import { useState } from 'react';
import './App.css';

function App() {
  const [showToast, setShowToast] = useState(false);
  
  const onToastClick = () => {
    navigator.clipboard.writeText('rohitvemuri@gatech.edu');

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };
  return (
    <body>
      <div className="content">
        <header>
          <h1><a href="index.html">Rohit Vemuri</a></h1>
          <div>
            <ul className="links">
              <li><a href="https://github.com/rohitvemuri" target="_blank" rel="noreferrer">github</a></li>
              <li id="dot1">•</li>
              <li><a href="https://www.linkedin.com/in/rohit-vemuri/" target="_blank" rel="noreferrer">linkedin</a></li>
              <li id="dot2">•</li>
              <li><a href="./resources/VemuriRohit2023.pdf" target="_blank">resume</a></li>
              <li id="dot3">•</li>
              <li><a href="https://www.rohitvemuri.com/" target="_blank" rel="noreferrer">photography</a></li>
              <li id="dot4">•</li>
              <li><a href="#" onClick={onToastClick}>contact</a></li>
            </ul>
          </div>
        </header>
        <section>
          <p className="homepage-paragraph">Hi everyone! I’m Rohit, and I’m a recent graduate from Georgia Tech, where I majored in computer science. I'm an incoming full-stack engineer at <a href="https://www.verkada.com/" className="paragraph-link">Verkada</a>, a Series-D start-up in San Mateo, California on the Search and Computer Vision team. I interned at Verkada last summer building <a href="https://www.verkada.com/helix" target="_blank" className="paragraph-link" rel="noreferrer">Helix</a>, where I focused on front-end engineering.</p>
          <p className="homepage-paragraph">Previously, I worked at <a href="https://www.cc.gatech.edu/news/challenging-internship-provides-cs-major-new-perspective" className="paragraph-link" target="_blank" rel="noreferrer">Instagram</a>, engineering solutions to redress factors for low ad submission rates using machine learning and data science. The next semester, I interned at Amazon Web Services, and prior to these opportunities, I interned at Fidelity Investments.</p>
          <p className="homepage-paragraph">My interest in software engineering stems from my first internship at the <a href="https://reynolds-lab.net/" target="_blank" className="paragraph-link" rel="noreferrer">Reynolds Lab</a> at UT Southwestern, where I developed an interest in computational modeling, machine learning, and bioinformatics.</p>
          <p className="homepage-paragraph">At Tech, I started <a href="https://gtbioinformatics.github.io/" target="_blank" className="paragraph-link" rel="noreferrer">Bioinformatics @ GT</a>, a club aiming to promote interest in computational biology through faculty panels, lectures, and corporate speakers, and I help run <a href="https://sites.google.com/view/supercomputing-gt/home" target="_blank" className="paragraph-link" rel="noreferrer">Supercomputing @ GT</a> to foster a community around high-performance computing. I also help build corporate relationships, nurture entrepreneurship efforts, and assist our Office of Enrollment at the College of Computing.</p>
          <p className="homepage-paragraph">I love hiking, web-development, running, exploring the outdoors, <a href="https://www.rohitvemuri.com/" target="_blank" className="paragraph-link" rel="noreferrer">photography</a>, and spending time with my wonderful friends. Feel free to reach out at <a href="#" onClick={onToastClick} className="paragraph-link">rohitvemuri@gatech.edu</a> if you want to chat!</p>
        </section>
        {showToast && <div id="snackbar">Email copied to clipboard!</div>}
      </div>
    </body>
  );
}

export default App;
