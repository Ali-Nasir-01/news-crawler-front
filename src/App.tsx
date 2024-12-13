import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import DefaultLayout from './layouts/DefaultLayout';
import HomePage from './pages/Panel';
import LoginPage from './pages/LoginPage';
import NewsPage from "./pages/Panel/News";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthLayout><LoginPage /></AuthLayout>} />
        <Route path="/panel" element={<DefaultLayout><HomePage /></DefaultLayout>} />
        <Route path="/panel/news" element={<DefaultLayout><NewsPage /></DefaultLayout>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;