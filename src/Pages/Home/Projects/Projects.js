import React from "react";
import { Container, Row } from 'react-bootstrap';
import Laptop from "../../../images/Laptop.png"
import Hospital from "../../../images/Hospital.png"
import Travel from "../../../images/Travel.png"



const Projects = () => {
  return (
    <div id="projects" className="bg-yellow pt-5">
        <Container>
          <h1 className="fw-bold py-5 text-info">This is my Project</h1>
          {/* <Row xs={1} md={2} lg={2}>
              <div>
                <img  className="img-fluid" src={Laptop} alt=""/>
              </div>
              <div>
                <h2>Laptop Gallery</h2>
              </div>
          </Row> */}
          <a className="text-decoration-none text-info" href='https://laptop-gallery-aroy.web.app/'>
            <Row xs={1} md={2} lg={2} className="mb-5">
              <div>
                <img  className="img-fluid" src={Laptop} alt=""/>
              </div>
              <div className="text-start p-3 text-secondary">
                <h2 className="text-success fw-bold">Laptop Gallery</h2>
                <p>● JWT token, is a fully secure API for users, admin and moderators with firebase.</p>
                <p>● I use ‘Stripe’ for Online payment processing. You can pay online for any service.</p>
                <p>● Admin can Add and Remove any Admin and Service.</p>
                <p>Technologies: React, React Bootstrap, React Hooks, React Router Dom, Firebase, Heroku, GitHub.</p>
              </div>
            </Row>
          </a>
          <a className="text-decoration-none text-info" href='https://greenworld-general-hopital.web.app/'>
            <Row xs={1} md={2} lg={2} className="g-4">
              <div>
                <img  className="img-fluid" src={Hospital} alt=""/>
              </div>
              <div  className="text-start p-3 text-body">
                <h2  className="text-success fw-bold">Greenworld General Hospital</h2>
                <p>● Registration and login system added with firebase.</p>
                <p>● You can log in using your Google account.</p>
                <p>● Admin can Add or Remove service and doctor and block or disable any user.</p>
                <p>Technologies: React, React Bootstrap, React Hooks, React Router Dom, Firebase, Heroku, GitHub.</p>
                <p>Technologies: React, React Bootstrap, React Hooks, React Router Dom, Firebase, Heroku, GitHub.</p>
              </div>
            </Row>
          </a>
          <a className="text-decoration-none" href='https://travelbd-4cce4.web.app/'>
            <Row xs={1} md={2} lg={2} className="mt-5 pb-4">
              <div>
                  <img  className="img-fluid" src={Travel} alt=""/>
                </div>
                <div  className="text-start p-3 text-secondary">
                  <h2  className="text-success fw-bold">TravelBD</h2>
                  <p>● I use firebase for Authentication and also use the private route.</p>
                  <p>● It’s a Client base site.</p>
                  <p>● You can Add or Remove service and Admin.</p>
                  <p>Technologies: React, React Bootstrap, React Hooks, React Router Dom, Firebase, Heroku, GitHub.</p>
                </div>
            </Row>
          </a>
        </Container>
    </div>
  );
}

export default Projects;
