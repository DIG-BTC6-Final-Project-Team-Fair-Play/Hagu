import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CreatePage } from "./pages/CreatePage";
import { SignIn } from "./pages/SignIn";
import { CameraPage } from "./pages/CameraPage";
import { PhotosPage } from "./pages/PhotosPage";
import { FriendsPage } from "./pages/FriendsPage";
import { PhotosListPage } from "./pages/PhotosListPage";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="create" element={<CreatePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="camera" element={<CameraPage />} />
            <Route path="photos" element={<PhotosPage />} />
            <Route path="photosList" element={<PhotosListPage />} />
            <Route path="friends" element={<FriendsPage />} />
            <Route path="/" element={<SignIn />} />
            <Route path="*" element={<h1>Not Found Page</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
