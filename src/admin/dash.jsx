import React, { useState } from 'react';
import { ChevronDown, Globe, FileText, Layout, HelpCircle } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: '250px' }}>
        {/* Logo */}
        <div className="d-flex align-items-center mb-4">
          <Globe className="text-warning" style={{ width: '24px', height: '24px' }} />
          <span className="ms-2 fs-4 fw-bold">TasteQuest</span>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="nav flex-column">
            {/* Dashboard */}
            <li className="nav-item">
              <a href="#" className="nav-link text-white bg-info rounded">
                <Layout style={{ width: '18px', height: '18px' }} />
                <span className="ms-3">Dashboard</span>
              </a>
            </li>

            {/* Category */}
            <li className="nav-item">
              <button
                className="nav-link text-white bg-dark w-100 text-start"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                aria-expanded={isCategoryOpen ? 'true' : 'false'}
              >
                <div className="d-flex align-items-center">
                  <FileText style={{ width: '18px', height: '18px' }} />
                  <span className="ms-3">Category</span>
                </div>
                <ChevronDown style={{ width: '14px', height: '14px' }} />
              </button>
              {isCategoryOpen && (
                <div className="ps-4">
                  <a href="#" className="d-block text-white-50 mb-2">
                    Hotel
                  </a>
                  <a href="#" className="d-block text-white-50 mb-2">
                    Menu
                  </a>
                  <a href="#" className="d-block text-white-50 mb-2">
                    Users
                  </a>
                  <a href="#" className="d-block text-white-50 mb-2">
                    Comments
                  </a>
                </div>
              )}
            </li>
          </ul>

          {/* Help Section */}
          <div className="mt-5 border-top pt-4">
            <div className="d-flex align-items-center text-white-50">
              <HelpCircle style={{ width: '18px', height: '18px' }} />
              <span className="ms-2">For Help?</span>
            </div>
            <div className="ms-4 mt-2">
              Email: <br />
              tastequest@gmail.com
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-fill d-flex flex-column">
        {/* Header */}
        <header className="bg-gradient p-4 text-white" style={{ background: 'linear-gradient(to right, #6a4c93, #452c66)' }}>
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <span>Dashboard</span> / <span className="text-light">TasteQuest</span> / <span className="text-light">Admin</span> / <span className="text-muted">Dashboard</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-fill bg-light p-4">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {/* Categories Listed */}
            <div className="col">
              <div className="card shadow-sm border-left border-info">
                <div className="card-body">
                  <h5 className="card-title text-info">CATEGORIES LISTED</h5>
                  <p className="card-text fs-1 fw-bold">5</p>
                </div>
                <div className="card-footer bg-info text-center rounded-circle">
                  <FileText style={{ width: '32px', height: '32px' }} className="text-white" />
                </div>
              </div>
            </div>

            {/* Listed Sub-Categories */}
            <div className="col">
              <div className="card shadow-sm border-left border-success">
                <div className="card-body">
                  <h5 className="card-title text-success">LISTED SUB-CATEGORIES</h5>
                  <p className="card-text fs-1 fw-bold">7</p>
                </div>
                <div className="card-footer bg-success text-center rounded-circle">
                  <Layout style={{ width: '32px', height: '32px' }} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gradient p-3 text-white" style={{ background: 'linear-gradient(to right, #6a4c93, #452c66)' }}>
          <div className="text-center text-sm">
            ©2025 Developed by Manasa S
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App; 



