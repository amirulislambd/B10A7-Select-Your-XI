import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/HomePage/banner/banner";
import Plyers from "./components/HomePage/Plyers/Plyers";
import AvailablePlyers from "./components/HomePage/Plyers/AvailablePlyers/AvailablePlyers";
import SelectedPlyers from "./components/SelectedPlyers/SelectedPlyers";


const FetchPlyers = async()=>{
const res = await fetch('plyers.json')
return res.json()
}


function App() {
  const promiseFetchPlyers = FetchPlyers()
  return (
    <>
      <Navbar />
      <Banner />
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl "></span>}
      >
        <Plyers promiseFetchPlyers={promiseFetchPlyers} />
      </Suspense>
      <SelectedPlyers />
    </>
  );
}

export default App;
