import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/Panel";
import LoginPage from "./pages/LoginPage";
import NewsPage from "./pages/Panel/News";
import axiosInstance from "./config/axiosInterceptor"; // Import the axios instance

const App: React.FC = () => {
  React.useEffect(() => {
    axiosInstance
      .get("/health")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route index element={<Navigate to='/login' />} />
        <Route
          path='/login'
          element={
            <AuthLayout>
              <LoginPage />
            </AuthLayout>
          }
        />
        <Route
          path='/panel'
          element={
            <DefaultLayout>
              <HomePage />
            </DefaultLayout>
          }
        />
        <Route
          path='/panel/news'
          element={
            <DefaultLayout>
              <NewsPage />
            </DefaultLayout>
          }
        />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
