import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Row, Table, Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserManager = () => {
  // Sample data for registered users
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
      status: 'Active',
      profilePic: 'https://via.placeholder.com/50',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'User',
      status: 'Inactive',
      profilePic: 'https://via.placeholder.com/50',
    },
    // Add more users as needed
  ]);

  // Function to fetch users from an API (for demonstration, using static data)
  useEffect(() => {
    // Simulate fetching users from an API
    const fetchUsers = async () => {
      // In a real application, you would fetch data from an API here
      // For example: const response = await fetch('/api/users');
      // const data = await response.json();
      // setUsers(data);

      // For demonstration, using static data
      setUsers([
        {
          id: 1,
          name: 'John Doe',
          email: 'john.doe@example.com',
          role: 'Admin',
          status: 'Active',
          profilePic: 'https://via.placeholder.com/50',
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          role: 'User',
          status: 'Inactive',
          profilePic: 'https://via.placeholder.com/50',
        },
      ]);
    };

    fetchUsers();
  }, []);

  // Function to delete a user
  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    // In a real application, you would also send a request to the server to delete the user
    // For example: fetch(`/api/users/${id}`, { method: 'DELETE' });
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
            <Navbar.Brand>User List</Navbar.Brand>
            <Button variant="outline-primary" className="p-2">Menu</Button>
          </Navbar>
          <Card className="mt-3">
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Profile Pic</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user.id}>
                      <td>{index + 1}</td>
                      <td>
                        <img src={user.profilePic} alt="Profile" style={{ width: '50px', height: '50px' }} />
                      </td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>{user.status}</td>
                      <td>
                        <Button variant="outline-danger" onClick={() => handleDelete(user.id)}>
                          Delete
                        </Button>
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

export default UserManager;