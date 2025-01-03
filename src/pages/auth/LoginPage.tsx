import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/features/auth/authSlice";
import { RootState, AppDispatch } from "@/store";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login({ username: form.username, password: form.password })).then(
      () => {
        navigate("/panel");
      }
    );
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant='h5' gutterBottom>
        سامانه جمع‌آوری اخبار
      </Typography>
      <TextField
        label='نام کاربری'
        variant='outlined'
        margin='normal'
        fullWidth
        value={form.username}
        dir='ltr'
        onChange={(e) => setForm((v) => ({ ...v, username: e.target.value }))}
      />
      <TextField
        label='رمزعبور'
        type='password'
        variant='outlined'
        margin='normal'
        fullWidth
        dir='ltr'
        value={form.password}
        onChange={(e) => setForm((v) => ({ ...v, password: e.target.value }))}
      />
      <Button
        variant='contained'
        color='primary'
        sx={{ mt: 2 }}
        size='large'
        fullWidth
        onClick={handleLogin}
        disabled={loading}
      >
        ورود
      </Button>
      <Typography variant='body2' sx={{ mt: 2 }}>
        حساب کاربری ندارید؟{" "}
        <Button
          color='primary'
          onClick={() => navigate("/auth/register")}
          sx={{ textTransform: "none" }}
        >
          ثبت‌نام
        </Button>
      </Typography>
      {error && <Typography color='error'>{error}</Typography>}
    </div>
  );
};

export default LoginPage;
