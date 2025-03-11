

// export default App;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, Nav, Navbar, NavDropdown } from "react-bootstrap";


const Sidebar = () => {
  return (
    <aside className="d-flex flex-column p-3 bg-dark text-white vh-100">
      <div className="logo text-center border-bottom pb-2">
        <h1>TASTEQUEST</h1>
      </div>
      <nav className="nav flex-column mt-3">
       

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
      </nav>
      <div className="help-section mt-auto p-3 bg-light rounded text-dark">
        <h5>For Help?</h5>
        <p>Email: TasteQuest@gmail.com</p>
      </div>
    </aside>
  );
};

const TopBar = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-white border-bottom">
      <button className="btn">
        <i className="fas fa-bars"></i>
      </button>
      <nav className="breadcrumb m-0">
        <a href="javascript:void(0)" className="text-primary">Taste Quest</a> / <a href="javascript:void(0)">Admin</a> / Dashboard
      </nav>
      <i className="fas fa-user-circle"></i>
    </header>
  );
};

const StatCard = ({ title, number, icon }) => {
  return (
    <div className="card p-2 d-flex flex-row justify-content-between align-items-center shadow-sm">
      <div>
        <h6 className="text-secondary">{title}</h6>
        <h2 className="text-primary fw-bold">{number}</h2>
      </div>
      <i className={`${icon} text-primary fs-1 bg-light p-2 rounded-circle`}></i>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="container-fluid vh-100 d-flex flex-column">
      <TopBar />
      <div className="row flex-grow-1">
        <div className="col-md-3 d-none d-md-block">
          <Sidebar />
        </div>
        <div className="col-md-9 p-4">
          <div className="row g-4 row-cols-1 row-cols-md-3">
            <div className="col">
              <StatCard title="CATEGORIES LISTED" number={5} icon="fas fa-list" />
            </div>
            <div className="col">
              <StatCard title="LISTED MENU" number={7} icon="fas fa-layer-group" />
            </div>
            <div className="col">
              <StatCard title="LIVE USERS" number={5} icon="fas fa-file-alt" />
            </div>
            <div className="col">
              <StatCard title="COMMENTS" number={1} icon="fas fa-trash-alt" />
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center p-3 bg-white border-top">
        <p>2025 © developed by Manasa S</p>
      </footer>
    </div>
  );
};

export default Dashboard;

