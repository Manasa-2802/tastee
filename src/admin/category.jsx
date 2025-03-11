import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Container, Row, Col, Form, Button, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div className="bg-dark text-white p-3 d-flex flex-column" style={{ width: "250px" }}>
        <h4 className="text-warning">Taste<span className="text-white">Quest</span></h4>
        
        <Nav className="flex-column mt-4">
          <Nav.Link href="/admin/dashboard" className="text-white">Dashboard</Nav.Link>
          <NavDropdown title="Category" className="text-white">
            <NavDropdown.Item href="/admin/category">Add Menu</NavDropdown.Item>
            
            <NavDropdown.Item href="/admin/managecat">Manage Menu</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/admin/userlist" className="text-white">User List</Nav.Link>
            <Nav.Link href="/admin/comments" className="text-white">Comments</Nav.Link>
            {/* <NavDropdown.Item href="#">Sub Category</NavDropdown.Item>
            <NavDropdown.Item href="#">Posts</NavDropdown.Item>
            <NavDropdown.Item href="#">Pages</NavDropdown.Item>
            <NavDropdown.Item href="#">Comments</NavDropdown.Item> */}
         
        </Nav>

        <div className="mt-auto small border-top pt-3">
          <p>For Help?</p>
          <small>Email:<br />tastequest@gmail.com</small>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 d-flex flex-column">
        {/* Topbar */}
        <Navbar bg="light" expand="lg" className="shadow-sm px-4 d-flex justify-content-between">
          <Navbar.Brand>Admin / Category / Add Category</Navbar.Brand>
          <FaUserCircle className="text-dark fs-3" />
        </Navbar>

        {/* Form Section */}
        <Container className="mt-4">
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="p-4 border rounded bg-white shadow">
                <h2 className="mb-4">Add Category</h2>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" placeholder="Enter category name" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Category Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter category description" />
                  </Form.Group>

                  <Button variant="warning" type="submit" className="w-100">
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
