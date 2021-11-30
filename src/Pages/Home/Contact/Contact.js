import React, { useRef } from 'react';
import { Button, Col, Row, Container } from "react-bootstrap";
import emailjs from 'emailjs-com';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'my_portfolio', form.current, 'user_PpinHhUjmq8afuhtSTjPc')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.form.reset();
  };

  return (
    <div className="bg-navy">
    <Container id="contact">
      <h1 className="fw-bold py-5 text-info">Contact Me</h1>
      <Row xs={1} md={2} lg={2} className="w-100">
          <Col md="5" lg="5" className="bg-gray text-start g-2">
            <h1 className="fw-bold text-info">Arjun <span className="text-warning">Roy</span></h1>
            <h4 className="fw-bold text-info my-4"><i className="fas fa-at"></i> arjunroy.arjun2@gmail.com</h4>
            <h4 className="fw-bold text-info"><i className="fas fa-phone-square-alt"></i> +8801739455599</h4>
            <h4 className="fw-bold text-info mt-4"><i className="fab fa-twitter"></i> arjun_roy4</h4>
            <div className="d-flex justify-content-center mt-5">
              <div className="fs-2">
              <a href="https://github.com/codewitharjun" >
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/arjun-roy2/" >
              <i className="fab fa-linkedin"></i>
              </a>
              </div>
            </div>
          </Col>
          <Col md="7" lg="7">
              <Row className="package-container">
                  <div>
                      <form ref={form} onSubmit={sendEmail}>            
                          <input type="text" name="name" style={{width: "90%"}} placeholder ="Enter Your Name" />
                          <br/>
                          <br/>
                          <input type="number" name="number" style={{width: "90%"}} placeholder="Enter Your Phone Number" required />
                          <br/>
                          <br/>
                          <input type="email" name="email" style={{width: "90%"}} placeholder="Enter Your Email" required/>
                          <br/>
                          <br/>
                          <input type="text" name="subject" style={{width: "90%"}} placeholder="Subject" required/>
                          <br/>
                          <br/>
                          <textarea type="text" name="message" style={{width: "90%"}} placeholder= "Enter your Message" />
                          <br/>
                          <br/>
                          {/* <input type="text" name="date" disabled placeholder={date} value={date} /> */}
                          <Button type="submit" variant="warning">Message Mee</Button>
                          <br/>
                          <br/>
                          <br/>
                      </form>
                  </div>
              </Row>
          </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Contact;
