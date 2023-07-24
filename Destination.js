import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const destinations = [
  {
    name: 'Destination 1',
    imageSrc: 'destination1.jpg',
    description: 'Explore the beauty of Destination 1 with its stunning landscapes and rich culture.',
    price: '$500',
  },
  {
    name: 'Destination 2',
    imageSrc: 'destination2.jpg',
    description: 'Embark on an adventure to Destination 2 and experience thrilling activities.',
    price: '$700',
  },
  // Add more destinations as needed
];

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Travel World</h1>
        <nav>
          {/* Your navigation links go here */}
        </nav>
      </header>

      <main>
        <Container>
          <h2>Featured Destinations</h2>
          <Row>
            {destinations.map((destination, index) => (
              <Col md={4} key={index}>
                <Card>
                  <Card.Img variant="top" src={destination.imageSrc} alt={destination.name} />
                  <Card.Body>
                    <Card.Title>{destination.name}</Card.Title>
                    <Card.Text>{destination.description}</Card.Text>
                    <Button variant="primary">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </main>

      <footer>
        {/* Your footer content goes here */}
      </footer>
    </div>
  );
};

export default Destination;