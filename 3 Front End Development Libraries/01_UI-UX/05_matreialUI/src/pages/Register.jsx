import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState({
    error: false,
    message: "Please enter your email address"
  })

  const validateEmail = (email) => {
    const rex = /^[A-Z0-9._%*-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    return rex.test(email)
  }

  const handleSubmit = (e) => { 
    e.preventDefault()
    if(validateEmail(email)) {
      console.log("Email correctly submitted")
      setError({
        error: false,
        message: "",
      })
    } else {
      setError({
        error: true,
        message: "Please insert a valid email"
      })
    }
  }

  return (
    <div>
      <Typography variant="h4" component="h1" mb={2}>Register</Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          id="email"
          label="Email"
          type="email"
          required
          variant="outlined"
          fullWidth
          error={error.error}
          helperText={error.message}
          // helperText="Please enter your email address"
          // error={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" variant="outlined" sx={{mt: 2}}>Register</Button>
      </Box>
    </div>
  );
};

export default Register;

