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
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${back})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "20px",
  };

  const aboutStyle = {
    padding: "50px 10%",
    color: "#fff",
    backgroundImage:
      "linear-gradient(to right, rgba(106, 17, 203, 0.8), rgba(37, 117, 252, 0.8)), url('https://dhruvil-lakhtaria.github.io/incident-2022/assets/img/xl.svg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section>
      <center>
        {/* Hero Section */}
        <div style={homeStyle} className="animate-fade-in">
          <Image
            src={adhyaay_logo}
            rounded
            className="mainPageAdhyaayLogo"
            style={{
              width: "200px",
              marginBottom: "20px",
              boxShadow: "0px 4px 15px rgba(255, 0, 0, 0.5)",
            }}
          />
          <Button
            variant="danger"
            size="lg"
            style={{
              fontWeight: "600",
              borderRadius: "10px",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            <a
              style={{
                textDecoration: "none",
                fontWeight: "600",
                color: "white",
                display: "block",
                padding: "10px",
              }}
              href="https://forms.fillout.com/t/7eJkvXYn6jus"
              target="_blank"
              rel="noopener noreferrer"
            >
              🚀 Register Now
            </a>
          </Button>
        </div>

        {/* About Section */}
        <div style={aboutStyle}>
          <div className="aboutStyleGrid">
            <div className="aboutStyleGridText">
              <h1 style={{ color: "#ffcc00" }}>
                ⚡ AAGAZ'25 – The Ultimate Celebration of Sports & Innovation
              </h1>
              <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
                AAGAZ'25, HBTU Kanpur's annual sports fest, is set to be **bigger and
                better than ever!** 🎉 Led by{" "}
                <span style={{ color: "#ff5733", fontWeight: "bold" }}>
                  Akhilesh Yadav and Awantika
                </span>, this grand event continues the legacy of AAGAZ'24.
              </p>
              <h2 style={{ color: "#ffcc00" }}>🔥 Why AAGAZ'25?</h2>
              <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
                <li>🏆 Thrilling inter-college sports competitions</li>
                <li>🎭 Cultural extravaganza</li>
                <li>💡 Tech & Innovation Integration</li>
              </ul>
            </div>
            <div className="aboutStyleGridPic">
              <Image
                src={adhyaay_logo_whitered}
                rounded
                style={{
                  height: "200px",
                  width: "230px",
                  boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.3)",
                }}
              />
            </div>
          </div>
        </div>
      </center>
    </section>
  );
};

export default Home;
