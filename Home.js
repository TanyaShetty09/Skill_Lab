import React from 'react';
import { Navbar, Nav, Carousel, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      {/* Header */}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#destination">Destination</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Content */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="carousel-image-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="carousel-image-2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src="card-image-1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src="card-image-2.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src="card-image-3.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 bg-light">
        &copy; 2023 Travel Website. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;