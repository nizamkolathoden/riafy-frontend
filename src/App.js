import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./pages/Create";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <main>
          <Routes>
            <Route index element={<Home/>} />
            <Route path="create" element={<Create/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
