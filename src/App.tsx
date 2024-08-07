import { Route, Routes } from "react-router-dom";

import "./App.css";

import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";

import { HomePage } from "@/pages/home";
import { EditorPage } from "@/pages/editor";

function App() {
  return (
    <div className="space-y-24">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/editor" Component={EditorPage} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
