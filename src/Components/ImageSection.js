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
          Hi, I am<span> Rudrakshi </span>
        </h4>
        <p className="about-text">
          I'm a Software Developer and a passionate programmer who loves solving
          challenges that shape industries. I have working experience with
          Backend technologies in building REST APIs. I have an immense interest
          in web development and am eager to contribute to open source. I love
          to work with people who are passionate about building solutions.
          <br />
          <br />
          Outside my professional life, I love to write blogs about Linux and
          share my technical knowledge. I also love to do painting and
          sketching.{" "}
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
