import { useNavigate } from "react-router-dom";

let navigate: ReturnType<typeof useNavigate>;

export const setNavigate = (nav: ReturnType<typeof useNavigate>) => {
  navigate = nav;
};

export const navigateToLogin = () => {
  if (navigate) {
    navigate("/login");
  }
};
