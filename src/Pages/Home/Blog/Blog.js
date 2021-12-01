import React from "react";
import { Button, Container, Row } from 'react-bootstrap';
import blogImg1 from "../../../images/blog1.7ecbb78c.svg"
import blogImg2 from "../../../images/blog3.6291ee7c.svg"
import blogImg3 from "../../../images/blog4.60aa6cec.svg"
import blogImg4 from "../../../images/blog5.2599a6b1.svg"


const contents = [
  {
    heading: "Importance of perfect UI UX design",
    Image: blogImg1
  },
  {
    heading: "how to machine learning works?",
    Image: blogImg2
  },
  {
    heading: "The future of blockchain technology ai and digital privacy",
    Image: blogImg3
  },
  {
    heading: "Is technology hurting personal relationships?",
    Image: blogImg4
  }
]



const Blog = () => {
  return (
    <div id="projects" className="bg-yellow py-5">
        <Container>
          <h1 className="fw-bold py-5 text-info">Recent Blogs</h1>

            <Row xs={1} md={2} lg={2} className="">
              {contents.map(content => 
              <a className="text-decoration-none text-info mb-5" href='#.'>
                  <div>
                    <img  className="img-fluid" src={content.Image} alt=""/>
                  </div>
                  <div className="text-start p-3 text-secondary">
                    <h3 className="fw-bold">{content.heading}</h3>
                  </div>
              </a>)}
            </Row>
              <a href="#." class="btn btn-primary btn-lg active" role="button" aria-pressed="true">See More</a>
        </Container>
    </div>
  );
}

export default Blog;
