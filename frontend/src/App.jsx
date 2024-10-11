import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/projects" element={<h1>Projects</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
