import React from "react";
import { Button, Row } from 'react-bootstrap';
import bannerPic from "../../../images/select-removebg-preview.png"

const Banner = () => {
  return (
    <div id="home" className="bg-dark">
      <Row xs={1} md={2} lg={2} className="g-4">
        <div><img src={bannerPic} alt=""/></div>
        <div className="text-info d-flex align-items-center my-5 justify-content-center">
          <div>
            <h1>Hi I'm <span className="text-danger">Arjun Roy</span></h1>
            <h4>A Full Stack Web Developer experienced in MERN stack.</h4>
            <Button href='https://drive.google.com/uc?export=download&id=18Lp2w_sF_qkuUjVlOHLaOB5-7J7dy7kW' variant="warning" size="lg" className="mt-4">My Resume</Button>
          </div>
        </div>
      </Row>
    </div>
  );
}

export default Banner;

          // <a href='https://drive.google.com/uc?export=download&id=18Lp2w_sF_qkuUjVlOHLaOB5-7J7dy7kW'>