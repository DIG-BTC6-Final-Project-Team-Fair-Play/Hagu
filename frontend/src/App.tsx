import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CreatePage } from "./pages/CreatePage";
import { SignIn } from "./pages/SignIn";

function App() {
  return (
    <>
      <div>Hello</div>
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
