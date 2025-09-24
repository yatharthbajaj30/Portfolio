import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


import avatar from "../../Assets/avatar.svg";
import { FaGamepad, FaPenFancy, FaPlaneDeparture } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view" style={{
      background: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
      border: "none",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      color: "#2d2d2d"
    }}>
      <Card.Body>
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
          <img src={avatar} alt="avatar" style={{ width: 120, borderRadius: "50%", marginBottom: 16, boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }} />
          <h2 style={{ fontWeight: 700, color: "#7b2ff2", marginBottom: 8, letterSpacing: 1 }}>Yatharth Bajaj</h2>
          <h5 style={{ color: "#f357a8", marginBottom: 16, fontWeight: 500 }}>Software Developer @ Samsung Electronics</h5>
          <p style={{ textAlign: "center", fontSize: 16, marginBottom: 12 }}>
            <span style={{ color: "#7b2ff2", fontWeight: 600 }}>Sonipat, India</span> | B-Tech, Computer Engineering<br />
            Delhi Technological University
          </p>
          <div style={{ margin: "18px 0" }}>
            <span style={{ fontSize: 18, fontWeight: 500, color: "#7b2ff2" }}>Things I Love:</span>
            <ul style={{ listStyle: "none", padding: 0, marginTop: 10 }}>
              <li className="about-activity" style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                <FaGamepad style={{ marginRight: 8, color: "#f357a8" }} /> Playing Games
              </li>
              <li className="about-activity" style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                <FaPenFancy style={{ marginRight: 8, color: "#7b2ff2" }} /> Writing Tech Blogs
              </li>
              <li className="about-activity" style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                <FaPlaneDeparture style={{ marginRight: 8, color: "#8ec5fc" }} /> Travelling
              </li>
            </ul>
          </div>
          <p style={{ color: "#f357a8", fontWeight: 600, fontSize: 18, marginTop: 18, fontStyle: "italic" }}>
            <span className="animated-quote">"Strive to build things that make a difference!"</span>
          </p>
          <footer className="blockquote-footer" style={{ marginTop: 10, color: "#7b2ff2" }}>Yatharth</footer>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
