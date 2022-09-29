import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Auth } from "./pages/Auth";
import { Dashboard } from "./pages/Dashboard";
import { NotFound } from "./pages/NotFound";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from "./app/hooks";
import { setUser } from "./features/authSlice";
  
function App() {
  const dispatch=useAppDispatch();
  const user=JSON.parse((localStorage.getItem("user") || "{}"))
  useEffect(()=>{
    dispatch(setUser(user))
  },[])
  return (
    <>
      <ToastContainer />
      <Routes>
    
        <Route path="/" element={<Navigate to="/auth" replace />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
