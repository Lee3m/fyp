import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ProjectsView from "./components/view/ProjectsView";

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
