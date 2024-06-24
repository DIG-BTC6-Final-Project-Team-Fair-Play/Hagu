import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

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
    </>
  );
}

export default App;
