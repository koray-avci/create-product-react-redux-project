import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from './pages/Products'
import "./App.css";
import Header from "./components/Header";
import Test from "./pages/Test";

function App() {
  return (
    <div className="">
      <Router>
      <Header/>
        <Routes>
          <Route index path="/" element={<Products/>} />
          <Route index path="/test" element={<Test/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
