import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CondidatesPage from "./pages/CondidatesPage";
import Home from "./pages/Home";
import JobsPage from "./pages/JobsPage";
import RegisterPage from "./pages/RegisterPage";
import SigninPage from "./pages/SigninPage";

const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname != "/signin" && location.pathname != "/register" && (
        <Navbar />
      )}

      <Routes>
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/condidates" element={<CondidatesPage />} />
      </Routes>
      {location.pathname != "/signin" && location.pathname != "/register" && (
        <Footer />
      )}
    </>
  );
};

export default App;
