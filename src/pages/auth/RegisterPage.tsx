import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { register } from "@/features/auth/authSlice";
import { RootState, AppDispatch } from "@/store";
import { useNavigate } from "react-router";

const RegisterPage: React.FC = () => {
  const [form, setForm] = useState({ username: "", password: "", email: "" });
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const { error } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (form.password === confirmPassword) {
      dispatch(register({ ...form })).then(() => {
        navigate("/auth/login");
      });
    } else {
      alert("رمزعبور و تکرار آن باید یکسان باشند");
    }
  };

  return (
    <Container maxWidth='sm'>
      <Box mt={5}>
        <Typography
          variant='h4'
          component='h1'
          gutterBottom
          sx={{ textAlign: "center" }}
        >
          ثبت نام
        </Typography>
        <TextField
          label='نام کاربری'
          variant='outlined'
          fullWidth
          margin='normal'
          value={form.username}
          onChange={(e) => setForm((v) => ({ ...v, username: e.target.value }))}
          required
        />
        <TextField
          label='ایمیل'
          type='email'
          variant='outlined'
          fullWidth
          margin='normal'
          value={form.email}
          onChange={(e) => setForm((v) => ({ ...v, email: e.target.value }))}
          required
        />
        <TextField
          label='رمزعبور'
          type='password'
          variant='outlined'
          fullWidth
          margin='normal'
          value={form.password}
          onChange={(e) => setForm((v) => ({ ...v, password: e.target.value }))}
          required
        />
        <TextField
          label='تکرار رمزعبور'
          type='password'
          variant='outlined'
          fullWidth
          margin='normal'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <Box mt={2}>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            onClick={handleSubmit}
          >
            ثبت نام
          </Button>
          {error && <Typography color='error'>{error}</Typography>}
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterPage;
