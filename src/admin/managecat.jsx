import React, { useState } from 'react';
import { Button, Card, Col, Row, Table, Nav, Navbar, NavDropdown, Container, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CategoryManager = ({ onCategoriesChange }) => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'pizza',
      description: 'Peppy Panner Pizza',
      image: 'https://via.placeholder.com/50',
      price: '$260',
    },
    {
      id: 2,
      name: 'Chicken Biryan ',
      description: 'Deliious  Biryan with tender chicken pieces',
      image: 'https://via.placeholder.com/50',
      price: '$150',
    },
  ]);

  const [editMode, setEditMode] = useState(null); // Track which row is in edit mode

  const handleEdit = (id) => {
    setEditMode(id); // Enable edit mode for the clicked row
  };

  const handleSave = (id) => {
    setEditMode(null); // Disable edit mode after saving
    onCategoriesChange(categories); // Notify parent component of changes
  };

  const handleCancel = () => {
    setEditMode(null); // Cancel edit mode
  };

  const handleDelete = (id) => {
    const updatedCategories = categories.filter((category) => category.id !== id);
    setCategories(updatedCategories);
    onCategoriesChange(updatedCategories); // Notify parent component of changes
  };

  const handleInputChange = (id, field, value) => {
    const updatedCategories = categories.map((category) =>
      category.id === id ? { ...category, [field]: value } : category
    );
    setCategories(updatedCategories);
  };

  const handleImageUpload = (id, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedCategories = categories.map((category) =>
          category.id === id ? { ...category, image: reader.result } : category
        );
        setCategories(updatedCategories);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container fluid className="p-0">
      <Row style={{ height: '100vh' }}>
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
          </Nav>
          <div className="mt-auto small border-top pt-3">
            <p>For Help?</p>
            <small>Email:<br />tastequest@gmail.com</small>
          </div>
        </div>
        <Col md={10} className="bg-light p-3">
          <Navbar bg="light" className="justify-content-between">
            <Navbar.Brand>Dashboard</Navbar.Brand>
            <Button variant="outline-primary" className="p-2">Menu</Button>
          </Navbar>
          <Card className="mt-3">
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category, index) => (
                    <tr key={category.id}>
                      <td>{index + 1}</td>
                      <td>
                        {editMode === category.id ? (
                          <Form.Control
                            type="file"
                            onChange={(e) => handleImageUpload(category.id, e)}
                          />
                        ) : (
                          <img src={category.image} alt="Item" style={{ width: '50px', height: '50px' }} />
                        )}
                      </td>
                      <td>
                        {editMode === category.id ? (
                          <Form.Control
                            type="text"
                            defaultValue={category.name}
                            onChange={(e) => handleInputChange(category.id, 'name', e.target.value)}
                          />
                        ) : (
                          category.name
                        )}
                      </td>
                      <td>
                        {editMode === category.id ? (
                          <Form.Control
                            type="text"
                            defaultValue={category.description}
                            onChange={(e) => handleInputChange(category.id, 'description', e.target.value)}
                          />
                        ) : (
                          category.description
                        )}
                      </td>
                      <td>
                        {editMode === category.id ? (
                          <Form.Control
                            type="text"
                            defaultValue={category.price}
                            onChange={(e) => handleInputChange(category.id, 'price', e.target.value)}
                          />
                        ) : (
                          category.price
                        )}
                      </td>
                      <td>
                        {editMode === category.id ? (
                          <>
                            <Button variant="outline-primary" onClick={() => handleSave(category.id)}>Save</Button>{' '}
                            <Button variant="outline-danger" onClick={handleCancel}>Cancel</Button>
                          </>
                        ) : (
                          <>
                            <Button variant="outline-primary" onClick={() => handleEdit(category.id)}>Edit</Button>{' '}
                            <Button variant="outline-danger" onClick={() => handleDelete(category.id)}>Delete</Button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
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