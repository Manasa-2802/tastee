import React from 'react';
import { Button, Card, Col, Row, Table, Nav, Navbar,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CategoryManager = () => {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col md={2} className="bg-dark text-white p-3">
          <h5 className="text-primary">GLOBAL<span className="text-info">GLIMPSE</span></h5>
          <Nav className="flex-column">
            <Nav.Link href="#" className="text-white p-2">Dashboard</Nav.Link>
            <Nav.Link href="#" className="text-white p-2">Category</Nav.Link>
            <Nav.Link href="#" className="text-white p-2">Posts</Nav.Link>
            <Nav.Link href="#" className="text-white p-2">Pages</Nav.Link>
            <Nav.Link href="#" className="text-white p-2">Comments</Nav.Link>
          </Nav>
          <div className="mt-4 p-3 bg-secondary rounded">
            <h6>For Help?</h6>
            <p>Email: GlobalGlimpse@gmail.com</p>
          </div>
        </Col>
        <Col md={10} className="bg-light p-3">
          <Navbar bg="light" className="justify-content-between">
            <Navbar.Brand>Dashboard</Navbar.Brand>
            <Button variant="outline-primary" className="p-2">Menu</Button>
          </Navbar>
          <Card className="mt-3">
            <Card.Body>
              <Button variant="success" className="mb-3">Add +</Button>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Posting Date</th>
                    <th>Last update Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Bollywood</td>
                    <td>Bollywood News</td>
                    <td>2018-06-06 15:58:09</td>
                    <td>2018-07-01 00:11:07</td>
                    <td>
                      <Button variant="outline-primary">Edit</Button>{' '}
                      <Button variant="outline-danger">Delete</Button>
                    </td>
                  </tr>
                  {/* More rows would go here */}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryManager;