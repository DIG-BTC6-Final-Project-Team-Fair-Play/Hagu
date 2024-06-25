import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CreatePage } from "./pages/CreatePage";
import { SignIn } from "./pages/SignIn";

function App() {
  const [data, setData] = useState();
  const sampleGet = async () => {
    await axios.get("/api/data").then((res) => setData(res.data));
  };
  useEffect(() => {
    sampleGet();
  }, []);
  return (
    <>
      <div>Hello</div>
      {JSON.stringify(data)}
      <HomePage></HomePage>
      <CreatePage></CreatePage>
      <SignIn></SignIn>
      <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
        <Routes>
          <Route path="*" element={<h1>Not Found Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
