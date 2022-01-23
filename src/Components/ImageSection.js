import React from "react";
import about from "../img/about.jpg";

const ImageSection = () => {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am<span> Rudrakshi Soni</span>
        </h4>
        <p className="about-text">
          I'm a competitive programmer and an enthusiastic Web Developer who
          loves to solve real-life problems. I have an immense interest in
          software development and am eager to contribute to open source.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>College Name</p>
            <p>Nationality</p>
            <p>Languages</p>
          </div>
          <div className="right-section">
            <p>: Rudrakshi Soni</p>
            <p>: JSS Academy of Technical Education, Noida</p>
            <p>: India</p>
            <p>: English, Hindi</p>
          </div>
        </div>
        {/* <button className="btn">Download Cv</button> */}
      </div>
    </div>
  );
};

export default ImageSection;
