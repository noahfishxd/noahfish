import React from "react";
import "../CSS/Portfolio.css";
import "../CSS/Background.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  return (
    <>
      <section className="portfolio">
        <div className="bg"></div>
        <a href="/" style={{ textDecoration: "none" }}>
          <section className="wrapper">
            <div className="top">noahfish.dev</div>
            <div className="bottom" aria-hidden="true">
              noahfish.dev
            </div>
          </section>
        </a>
        <section className="design-section">
          <div className="timeline">
            <div className="timeline-empty"></div>

            <div className="timeline-middle">
              <div className="timeline-circle"></div>
            </div>
            <div className="timeline-component timeline-content">
              <h3>Completion of CS50</h3>
              <p>
                My journey into computer science began when I decided to take a
                year off from college after realizing that economics was not as
                fulfilling as I had anticipated. During this period of
                exploration and self-discovery, I enrolled in Harvard's CS50
                course, which I successfully completed in 2022. This experience
                marked the beginning of my passion for the field.
              </p>
              <a
                className="portfolio-links"
                href="https://i.imgur.com/HnBpPqS.png"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faCertificate} /> Certificate
              </a>
            </div>
            <div className="timeline-component timeline-content">
              <h3>Senator Stock Parser</h3>
              <p>
                A Python program I developed parses the HTML of the Senate
                financial disclosure website to gather data for research on
                Senate trading activity.
              </p>
              <a
                className="portfolio-links"
                href="https://github.com/noahfishxd/Senator-Stock-Parser"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faGithub} /> Github
              </a>
            </div>
            <div className="timeline-middle">
              <div className="timeline-circle"></div>
            </div>
            <div className="timeline-empty"></div>

            <div className="timeline-empty"></div>

            <div className="timeline-middle">
              <div className="timeline-circle"></div>
            </div>
            <div className="timeline-component timeline-content">
              <h3>Adblock and VPN Guide</h3>
              <p>
                A website I created aims to educate many who are misinformed
                about methods to circumvent the intrusive anti-adblocking
                JavaScript that YouTube has implemented into their platform.
              </p>
              <a
                className="portfolio-links"
                href="https://adblock4youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faLink} /> Website
              </a>
            </div>
            <div className="timeline-component timeline-content">
              <h3>More Coming Soon...</h3>
            </div>
            <div className="timeline-middle">
              <div className="timeline-circle"></div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Portfolio;
