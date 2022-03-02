import './App.css';
import Picture from './assets/jbr.png';
import Map from './assets/mapa.png';
import Blue from './assets/bluedream.png';
import Thermes from './assets/thermes.jpg';
import Pacific from './assets/pacific-hydro.jpg';
import Acera from './assets/acera.jpg';
import NPower from './assets/natural-power.png';
import Bistro from './assets/bistro.jpg';


function App() {
  return (
    <>
    <div className="container">
      <div className="lateral">
      <div className="left">
        <img src={Picture} alt="jorg" />
        <h2>Jörg B. Reske</h2>
        <h3 className="full">Full Stack Developer</h3>
        <h3 className="pro">Project Coordination</h3>
        <h3 className="inn">Innhouse Logistics</h3>
      </div>
      <div className="zweite">
        <div className="menu"> 
          <br></br>
          <h3>Languages</h3>
          <br></br>
          <br></br>
          <p>English - fluent</p>
          <br></br>
          <p>German - native</p>
          <br></br>
          <p>Portugues - fluent</p>
          <br></br>
          <p>Spanish - basic</p>
          <br></br>
          <br></br>
          <h3>Soft-Skills</h3>
          <br></br>
          <br></br>
          <p>Team-Work</p>
          <br></br>
          <p>Patience</p>
          <br></br>
          <p>Time-Management</p>
          <br></br>
          <p>Ambition</p>
          <br></br>
          <p>Love creating</p>
          <br></br>
          <p>Love challenges</p>
        </div>
      </div>
        <div className="map">
          <img src={Map} alt="mapa" />
          <div className="jorg">
          <img src={Picture} alt="jorg" />
          </div>
        
        </div>
      </div>
      <div className="center">
        <h3>Thats me</h3>
        <p>I'm 54 years old, have a degree in administration and logistics, 
          have very good skills in web-design and created over 50 web-pages. 
          Working as a consultant has increased my experience in developing business 
          strategies to increase productivity and balance between company areas and there teams.
          <br></br><br></br>  
          Over the years I have created a constantly growing knowledge of computer-science, 
          mounted and started servers, and created networks, this brought me to today's new 
          achievements.
          <br></br><br></br> 
          Today, I'm becoming a full stack programmer in java script, increasing my 
          knowledge, developing and upgrading my soft-skills, all this is bringing me up to 
          speed for the new challenge. I also speak several languages... (it comes handy). 
          <br></br><br></br> 
          I believe that the foundation to a great job is your private life where you have the 
          possibility of balancing your job out, having fun and enjoying all the work.Well, 
          so here I go, new challenge in the direction of managing, coordinating, programming.
          <br></br><br></br> 
          I'm finishing my study's (Java Script, React, Html, Css) at Cubos Academy in June, 
          and anxious for new challenges.

          </p>

      </div>
    </div>
    <div className="mitte">
    <div className="projects">
      <br></br>
      <h3>Projects</h3>
      <p>Acera: Company Logo creation, Styled documents, home-page and Flyers.
      <br></br><br></br>
      Management, Coordination of teams inside the company and also tired party
      teams.<br></br><br></br>
      Development of wind parks all over Brazil, structuring and linking internet
      connections as connecting energy sub-stations to the net.
      <br></br><br></br>
      TKS: Management, IT departament coordinaton, organizing instalations all over Brazil and other
      countries. (Argentina, Chile, USA, Australia e Germany.
      <br></br><br></br>
      Logistic consulting for Garoto, Fate, TTI and the Camber of Comerce Brazil-
      Germany.</p>
    </div>
      <div className="education">
        <br></br>
        <h3>Education</h3>
        <p>Diplom in administration / Germany
          <br></br><br></br>
          International Administration (tecnical curse Brazil 2 years)
          <br></br><br></br>
          Logistics, warhousing and picking
          <br></br><br></br>
          DPA Web-design UI/UX (Curse for 2 years)
          Assambling and building of servers, desktops and networks.
          <br></br><br></br>
          Java Script full stack programming (still 5 month)</p>
      </div>
    </div>
    <div className="box">
    <h3>Some Clients</h3>
    <img src={Acera} alt="acera" />
    <img src={Blue} alt="blue-dream" />
    <img src={Thermes} alt="thermes" />
    <img src={Pacific} alt="pacific-hydro" />
    <img src={NPower} alt="natural-power" />
    <img src={Bistro} alt="bistro" />
    </div>
    <div className="boden-box">
      <div className="Contact">
        
        <h4>Phone: +55 (84) 99968-5830 - email: jorg.reske@gmail.com</h4>
      </div>
      <div className="recht">
        <p>Web-Design, Creation and Art by Jörg B. Reske - All rights are reseved - </p>
        </div>
      
    </div>
    </>
  );
}

export default App;
