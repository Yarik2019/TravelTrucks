import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CamperPage from "./pages/CamperPage/CamperPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout/Layout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path={`/catalog/:id`} element={<CamperPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster />
    </Layout>
  );
}

export default App;
