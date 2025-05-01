import { BrowserRouter as Router, Routes, Route } from "react-router";
import Portfolio from "./pages/Portfolio";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<Portfolio />} />
        </Routes>
      </Router>
    </>
  );
}
