// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import Register from './components/register';
import Login from './components/login';
import Menu from './components/menu';
import Review from './components/review';
import Pizza from './components/pizza';
import Menu1 from './components/menu1';
import Cart from './components/cart';
import FoodDeliveryApp from './components/landing';
import About from './components/about';
import PaymentMethod from './components/payment';
import Forgot from './components/forgotpass';
import Dashboard from './admin/dashboard';
import Dashboardd from './admin/dash';
import Category from './admin/category';
import CategoryManager from './admin/managecat';
import User from './admin/user';
import Burger from './components/burger';


// import Category from './admin/category';
// import ManageCat from './admin/managecat';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/landing" element={<FoodDeliveryApp />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/review" element={<Review />} />
            <Route path="/pizza" element={<Pizza />} />
            <Route path="/menu1" element={<Menu1 />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/payment" element={<PaymentMethod />} />
            <Route path="/forgotpass" element={<Forgot />} />
            <Route path="/admin/dashboard" element={<Dashboard/>} />
            <Route path="/admin/dash" element={<Dashboardd/>} />
            <Route path="/admin/category" element={<Category />} />
            <Route path="/admin/managecat" element={<CategoryManager />} />
            <Route path="/admin/userlist" element={<User />} />
            <Route path="/burger" element={<Burger />} />
      

            
            {/* <Route path="/admin/category" element={<Category />} /> */}
           {/* <Route path="/admin/managecat" element={<ManageCat />} /> */}
             
{/* <Route path="/managecat" element={<ManageCat />} />          */}
  </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;