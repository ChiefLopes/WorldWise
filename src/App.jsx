import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <div className="App">
      <h1>WorldWise</h1>

      <Router>
        <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/*" element={<PageNotFound />} />
                  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
