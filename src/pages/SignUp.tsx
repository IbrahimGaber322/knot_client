import React, { useState } from "react";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../actions/user";

import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton,
  FormControl,
  FormHelperText,
  Paper,
} from "@mui/material";
import LinkM from "@mui/material/Link";
import { Link } from "react-router-dom";

import PhotoCamera from "@mui/icons-material/PhotoCamera";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <LinkM component={Link} color="inherit" to="/about">
        Ibrahim Gaber
      </LinkM>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  image: "",
  fullName: "",
};
const initialErrorState = {
  firstName: false,
  lastName: false,
  email: false,
  password: false,
  confirmPassword: false,
};
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(initialErrorState);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      formData.firstName.length === 0 ||
      formData.lastName.length === 0 ||
      !formData.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) ||
      !formData.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i) ||
      formData.confirmPassword !== formData.password
    ) {
      setError({
        firstName: formData.firstName.length === 0,
        lastName: formData.lastName.length === 0,
        email: !formData.email.match(
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
        ),
        password: !formData.password.match(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i
        ),
        confirmPassword: formData.confirmPassword !== formData.password,
      });
    } else {
      dispatch(
        signUp({
          fullName: formData.fullName,
          password: formData.password,
          image: formData.image,
          username: formData.firstName + formData.lastName.substring(0, 2),
          primaryEmail: formData.email,
          type:'INDIVIDUAL'
        })
      );
    }
  };
  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      if (!file) {
        reject(new Error("No file selected."));
        return;
      }
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const addImage = async (e: any) => {
    const file = e.target.files[0];
    const base64: any = await convertBase64(file);
    setFormData({ ...formData, image: base64 });
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      fullName: `${formData.firstName} ${formData.lastName}`,
    });
    setError({ ...error, [e.target.name]: false });
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      component="form"
      noValidate
      onSubmit={handleSubmit}
    >
      <Paper
        elevation={10}
        sx={{
          maxWidth: "sm",
          borderRadius: 4,
          p: 3,
          "@media only screen and (max-width: 600px)": { m: 1 },
        }}
      >
        <Grid container>
          <Grid display="flex" justifyContent="center" item xs={12}>
            <Box position={"relative"}>
              <IconButton
                sx={{ position: "absolute", bottom: 0, right: -20, zIndex: 1 }}
                component="label"
              >
                <PhotoCamera />
                <input
                  hidden
                  onChange={(e) => addImage(e)}
                  accept="image/*"
                  multiple
                  type="file"
                />
              </IconButton>
              <Avatar
                src={formData?.image}
                sx={{ width: "100px", height: "100px", fontSize: 50 }}
              >
                {formData.fullName.charAt(0)}
              </Avatar>
            </Box>
          </Grid>
          <Grid pt={2} item xs={12}>
            <Typography textAlign="center" variant="h4">
              Sign Up
            </Typography>
          </Grid>
          <Grid item xs={12} container>
            <Grid
              sx={{ "@media only screen and (min-width: 600px)": { pr: 1 } }}
              pt={2}
              xs={12}
              sm={6}
              item
            >
              <TextField
                name="firstName"
                variant="outlined"
                label="First Name"
                helperText={
                  error.firstName ? "Please enter your first name." : false
                }
                value={formData.firstName}
                required
                inputProps={{ maxLength: 20 }}
                error={error.firstName}
                autoFocus
                fullWidth
                onChange={handleChange}
              />
            </Grid>
            <Grid
              pt={2}
              sx={{ "@media only screen and (min-width: 600px)": { pl: 1 } }}
              xs={12}
              sm={6}
              item
            >
              <TextField
                name="lastName"
                value={formData.lastName}
                variant="outlined"
                inputProps={{ maxLength: 20 }}
                label="Last Name"
                helperText={
                  error.lastName ? "Please enter your last name." : false
                }
                error={error.lastName}
                required
                fullWidth
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <TextField
            name="name"
            value={`${formData.firstName} ${formData.lastName}`}
            sx={{ display: "none" }}
          />
          <Grid pt={2} item xs={12}>
            <TextField
              type="email"
              name="email"
              value={formData.email}
              required
              error={error.email}
              variant="outlined"
              label="Email Address"
              helperText={
                error.email ? "Please enter your email correctly." : false
              }
              fullWidth
              onChange={handleChange}
            />
          </Grid>

          <Grid pt={2} item xs={12}>
            <FormControl
              error={error.password}
              required
              fullWidth
              variant="outlined"
            >
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                name="password"
                value={formData.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              <FormHelperText>
                {error.password
                  ? "Password must be at least 8 chars long and contain a number."
                  : false}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid pt={2} item xs={12}>
            <FormControl
              error={error.confirmPassword}
              required
              fullWidth
              variant="outlined"
            >
              <InputLabel>Confirm Password</InputLabel>
              <OutlinedInput
                type="password"
                onChange={handleChange}
                value={formData.confirmPassword}
                name="confirmPassword"
                label="Confirm Password"
              />
              <FormHelperText>
                {error.confirmPassword ? "Passwords don't match." : false}
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid pt={2} item xs={12}>
            <Button
              className="button-submit"
              variant="contained"
              type="submit"
              fullWidth
            >
              <Typography fontWeight={600}>Sign Up</Typography>
            </Button>
          </Grid>

          <Grid pt={2} display="flex" justifyContent="end" item xs={12}>
            <Typography
              fontSize={13}
              color="primary"
              component={Link}
              to="/signin"
            >
              Already have an account? Sign in
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Copyright sx={{ mt: 5 }} />
    </Box>
  );
};

export default SignUp;
