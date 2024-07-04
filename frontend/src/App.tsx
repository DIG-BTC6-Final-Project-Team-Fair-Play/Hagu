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
import { Users } from "./types/globals";
import { SeedlingSelectPage } from "./pages/SeedlingSelectPage";
import { WateringPage } from "./pages/WateringPage";
import { ProfilePage } from "./pages/ProfilePage";
import { FirstExplainPage } from "./pages/FirstExplainPage";
import OneSignal from "react-onesignal";

export const userData = createContext<number>(0);
// export const seedLings = createContext<Seedlings[]>([]);
export const selectSeedIdContext = createContext(
  {} as {
    selectSeedId: number;
    setSelectSeedId: React.Dispatch<React.SetStateAction<number>>;
  }
);

function App() {
  const [userId, setUserId] = useState<number>(0);
  const [selectSeedId, setSelectSeedId] = useState<number>(0);
  // const [seed, setSeed] = useState<Seedlings[]>([]);

  useEffect(() => {
    (async () => {
      const getUserData: Users = await axios.get(`/api/users`).then((res) => {
        return res.data;
      });

      // (async () => {
      //   const seedlings: Seedlings[] = await axios
      //     .get(`/api/seedlings/${getUserData.id}`)
      //     .then((res) => {
      //       return res.data;
      //     });
      //   setSeed(seedlings);
      // })();
      setUserId(getUserData.id);

      (async () => {
        OneSignal.init({
          // TODO: 事前にメモしておいた appID に置き換えてください。OneSignal のダッシュボードでヘッダーの Settins → Keys & IDs でも確認できます。 //
          appId: "f8ee020f-6c48-4593-b7fa-e697507e3e8f",
        });
      })();
    })();
  }, []);
  return (
    <>
      <userData.Provider value={userId}>
        <selectSeedIdContext.Provider value={{ selectSeedId, setSelectSeedId }}>
          <div className="App">
            <BrowserRouter>
              <Routes>
                <Route path="first" element={<FirstExplainPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="watering" element={<WateringPage />} />
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
        </selectSeedIdContext.Provider>
      </userData.Provider>
    </>
  );
}

export default App;
