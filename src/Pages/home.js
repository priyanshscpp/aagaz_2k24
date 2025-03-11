import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "../App.css";

import back from "../res/firstbgaagaz.png";
import adhyaay_logo from "../res/Logo.png";
import adhyaay_logo_whitered from "../res/onlyaagaz.png";

const home = () => {
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
    backgroundColor: "",
    backgroundImage:
      "url('https://dhruvil-lakhtaria.github.io/incident-2022/assets/img/xl.svg'), url('https://dhruvil-lakhtaria.github.io/incident-2022/assets/img/sm.svg')",
  };
  return (
    
    <section>
      <center>
      {/* <div class="loader">
	<div class="loader-inner">
		<div class="loader-line-wrap">
			<div class="loader-line"></div>
		</div>
		<div class="loader-line-wrap">
			<div class="loader-line"></div>
		</div>
		<div class="loader-line-wrap">
			<div class="loader-line"></div>
		</div>
		<div class="loader-line-wrap">
			<div class="loader-line"></div>
		</div>
		<div class="loader-line-wrap">
			<div class="loader-line"></div>
		</div>
	</div>
</div> */}
        <div
          style={homeStyle}
          className="flex flex-col items-center justify-center"
        >
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
        <div style={aboutStyle}>
          <div className="aboutStyleGrid">
            <div className="aboutStyleGridText">
              <h1>About</h1>
              <br></br>
              <p>
              AAGAZ'24, HBTU Kanpur's annual sports fest, promises a spectacular celebration of sportsmanship, competition, and innovation. Led by Secretary Faiz Khan and Namrata Singh 3rd-year B.Tech students, the event builds upon the success of AAGAZ'23. This mega Inter-College sports fest, initiated by the Sports Sub-Council, consolidates various sports events under one grand umbrella, representing a significant evolution.

              AAGAZ'24 provides a platform for athletes and a unique opportunity for brands to align with innovation and youth. With a focus on promoting sportsmanship and healthy competition, it's set to become a highlight on the university calendar.

             Under the leadership of Faiz and Namrata, the organizing team ensures a seamless experience. Additionally Sahil Shakoor, the technical head and creator of the event's website, adds an innovative layer, ensuring a smooth online experience for participants and sponsors. The fest's success is further attributed to the meticulous management and preplanning led by Haza Rehman.

             Together Faiz, Haza, Sahil and Namrata  blend sportsmanship, management and technology creating an exciting platform for athletes and a unique advertising opportunity. Get ready for AAGAZ'24 – where sports meet innovation!
                <br></br>
                <br />
                AAGAZ'24 will be a new & better version of AAGAZ'23 which was a
                successful event. This will be an invaluable opportunity for
                brands to advertise themselves in front of the innovative lads.
              </p>
            </div>
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
      {/* <Footer /> */}
    </section>
  );
};

export default home;
