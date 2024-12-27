import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";

export const useAuthRedirect = () => {
  const navigate = useNavigate();
  const { isLogin } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (isLogin) {
      navigate("/panel");
    }
  }, [isLogin, navigate]);
};

export const usePanelRedirect = () => {
  const navigate = useNavigate();
  const { isLogin } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!isLogin) {
      navigate("/auth/login");
    }
  }, [isLogin, navigate]);
};
