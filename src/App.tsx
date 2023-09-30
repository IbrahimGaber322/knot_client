import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./actions/user";
import SignUp from "./pages/SignUp";
import { getLinkSectionsByUser } from "./actions/linksections";
import { getProductsByUser } from "./actions/products";
function App() {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const token = useSelector((state: any) => state.token?.token);
  useEffect(() => {
    if (token) {
      dispatch(getUser());
      dispatch(getLinkSectionsByUser());
      dispatch(getProductsByUser()); 
    }
  }, [token, dispatch]);
  
  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route
          path="/signup"
          element={user ? <Navigate to={"/"} /> : <SignUp />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
