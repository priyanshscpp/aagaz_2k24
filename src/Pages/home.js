import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "../App.css";

import back from "../res/firstbgaagaz.png";
import adhyaay_logo from "../res/Logo.png";
import adhyaay_logo_whitered from "../res/onlyaagaz.png";

const Home = () => {
  const homeStyle = {
    height: "100vh",
    backgroundImage: `url(${back})`,
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const aboutStyle = {
    height: "auto",
    width: "100%",
    backgroundImage:
      "url('https://dhruvil-lakhtaria.github.io/incident-2022/assets/img/xl.svg'), url('https://dhruvil-lakhtaria.github.io/incident-2022/assets/img/sm.svg')",
  };

  return (
    <section>
      <center>
        {/* Loader Component */}
        {/* Uncomment if needed */}
        {/* 
        <div className="loader">
          <div className="loader-inner">
            <div className="loader-line-wrap"><div className="loader-line"></div></div>
            <div className="loader-line-wrap"><div className="loader-line"></div></div>
            <div className="loader-line-wrap"><div className="loader-line"></div></div>
            <div className="loader-line-wrap"><div className="loader-line"></div></div>
            <div className="loader-line-wrap"><div className="loader-line"></div></div>
          </div>
        </div>
        */}
        
        <div style={homeStyle} className="flex flex-col items-center justify-center">
          <Image
            overflow="hidden"
            src={adhyaay_logo}
            rounded
            className="mainPageAdhyaayLogo"
          />
          <Button
            variant="danger"
            size="lg"
            style={{
              fontWeight: "600",
              borderRadius: "10px",
            }}
          >
            <a
              style={{
                textDecoration: "none",
                fontWeight: "600",
                color: "white",
                display: "block",
                padding: "5px",
              }}
              href="https://forms.fillout.com/t/7eJkvXYn6jus"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </a>
          </Button>
        </div>

        {/* About Section */}
        <div style={aboutStyle}>
          <div className="aboutStyleGrid">
            <div className="aboutStyleGridText">
              <h1>AAGAZ'25 – The Ultimate Celebration of Sports & Innovation</h1>
              <br />
              <p>
                AAGAZ'25, HBTU Kanpur's annual sports fest, promises an even grander celebration of
                sportsmanship, competition, and innovation. Led by{" "}
                <strong>Secretary Akhilesh Yadav and Awantika</strong>, 4th-year B.Tech students, the event builds upon the phenomenal success of
                AAGAZ'24.
              </p>

              <p>
                This mega inter-college sports fest, initiated by the <strong>Sports Sub-Council</strong>,
                brings together a diverse range of sporting events under one dynamic platform.
                <strong> AAGAZ'25 is not just a competition but a movement</strong>—fostering athletic
                excellence, teamwork, and groundbreaking ideas.
              </p>

              <p>
                Under the leadership of <strong>Akhilesh and Awantika</strong>, the organizing team ensures
                a seamless experience for athletes and participants. <strong>Mohammad Tauqeer and Sahil
                Sakoor</strong>, the technical heads and creators of the event's website, continue to add an
                innovative digital touch, enhancing the online experience for participants and sponsors. The
                fest's success is further attributed to the meticulous planning and management of
                <strong> Abhishek Mishra and Dev Chitousia</strong>.
              </p>

              <p>
                Together, <strong>Akhilesh, Tauqeer, Abhishek, Dev, Sahil, and Awantika</strong> blend
                sportsmanship, management, and technology to create an electrifying platform for athletes
                and a unique branding opportunity for sponsors.
              </p>

              <h2>Get ready for AAGAZ'25 – where sports meet innovation like never before!</h2>
              <br />

              <p>
                AAGAZ'25 is set to be a <strong>bigger and better</strong> version of its predecessor,
                AAGAZ'24, which was a resounding success. This event presents an invaluable opportunity for
                <strong> brands to showcase themselves</strong> to a vibrant, youthful audience driven by
                <strong> innovation and competition</strong>.
              </p>
            </div>

            {/* About Section Image */}
            <div className="aboutStyleGridPic">
              <Image
                overflow="hidden"
                src={adhyaay_logo_whitered}
                rounded
                style={{ height: "200px", width: "230px" }}
                className="adhyaayLogo"
              />
            </div>
          </div>
        </div>
      </center>
    </section>
  );
};

export default Home;
