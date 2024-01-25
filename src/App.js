import Sidebar from "./Component/Sidebar";
import Bussiness from "./Page/Bussiness";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/Business" element={<Bussiness />} />
      </Routes>
    </>
  );
}

export default App;
