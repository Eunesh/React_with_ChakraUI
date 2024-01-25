import Bussiness from "./pages/Bussiness";
import { Routes, Route } from "react-router-dom";
import Page404 from "./constants/Page404";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Business" element={<Bussiness />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
