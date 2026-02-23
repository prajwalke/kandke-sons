import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin"; // Path to your login page component
import AdminDashboard from "./pages/AdminDashboard"; // Example dashboard page
// Example add product page

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<AdminLogin />} /> {/* Home route (login) */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
