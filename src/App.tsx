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
import LoginPage from "./pages/auth/LoginPage";
import NewsPage from "./pages/Panel/News";
import axiosInstance from "./config/axiosInterceptor"; // Import the axios instance
import RegisterPage from "./pages/auth/RegisterPage";
import UsersPage from "./pages/Panel/Users";
import SingleNewsPage from "./pages/Panel/News/SingleNewsPage";

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
        <Route index element={<Navigate to='/auth/login' />} />
        <Route
          path='/auth/login'
          element={
            <AuthLayout>
              <LoginPage />
            </AuthLayout>
          }
        />
        <Route
          path='/auth/register'
          element={
            <AuthLayout>
              <RegisterPage />
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
          path='/panel/users'
          element={
            <DefaultLayout>
              <UsersPage />
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
        <Route
          path='/panel/news/:id'
          element={
            <DefaultLayout>
              <SingleNewsPage />
            </DefaultLayout>
          }
        />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
