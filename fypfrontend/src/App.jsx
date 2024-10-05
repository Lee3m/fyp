import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectsView from "./assets/view/ProjectsView";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/projects" element={<ProjectsView />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
