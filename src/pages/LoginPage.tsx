import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const LoginPage = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    // Handle login logic here
    console.log(form);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant='h5' gutterBottom>
        ورود به سامانه جمع‌آوری اخبار
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
      >
        ورود
      </Button>
    </div>
  );
};

export default LoginPage;
