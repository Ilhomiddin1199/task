import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logout, selectAuth } from "../features/authSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Tooltip from "@mui/material/Tooltip";
// import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useLoginUserMutation } from "../services/authApi";
import { toast } from "react-toastify";
import { Avatar, Box, Button, Container, createTheme, CssBaseline, Link, ThemeProvider, Typography } from "@mui/material";
function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();
export const Dashboard = () => {
  // const { name } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    toast.success("User Logout Successfuly")
    navigate("/auth")
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Welcome User
            </Typography>
            {/* <Typography component="p">Name:{name}</Typography> */}

            <Button
              onClick={() => handleLogout()}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Logout
            </Button>
          </Box>

          <Copyright sx={{ ml: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
};
