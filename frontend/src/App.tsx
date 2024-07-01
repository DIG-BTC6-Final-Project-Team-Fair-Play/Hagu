import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CreatePage } from "./pages/CreatePage";
import { SignIn } from "./pages/SignIn";
import { CameraPage } from "./pages/CameraPage";
import { PhotosPage } from "./pages/PhotosPage";
import { FriendsPage } from "./pages/FriendsPage";
import { PhotosListPage } from "./pages/PhotosListPage";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Users, Seedlings } from "./types/globals";
import { SeedlingSelectPage } from "./pages/SeedlingSelectPage";

export const userData = createContext<Users | string>("");
export const seedLings = createContext<Seedlings | string>("");


function App() {
  const [user, setUser] = useState<Users | string>("");
  const [userId,setUserId] = useState<number>(0)
  const [seed, setSeed] = useState<Seedlings | string>("");

  useEffect(() => {
    (async () => {
      const userData: Users = await axios.get(`/api/users`).then((res) => {
        console.log(res.data)
        return res.data;
      });
      setUser(userData);
      setUserId(userData.id)
    })();
    (async () => {
      const seedlings: Seedlings = await axios
        .get(`/api/seedlings/${userId}`)
        .then((res) => {
          return res.data;
        });
      setSeed(seedlings);
    })();
  }, []);
  return (
    <>
      <userData.Provider value={user}>
        <seedLings.Provider value={seed}>
          <div className="App">
            <BrowserRouter>
              <Routes>
                <Route path="seedling" element={<SeedlingSelectPage />} />
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
        </seedLings.Provider>
      </userData.Provider>
    </>
  );
}

export default App;
