import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/HomePage/banner/banner";
import Plyers from "./components/HomePage/Plyers/Plyers";


const FetchPlyers = async()=>{
  const res = await fetch('plyers.json')
  return res.json()
}


function App() {
  const [coins, setCoins]=useState(6000000)
  const promiseFetchPlyers = FetchPlyers()
  return (
    <>
      <Navbar coins={coins}/>
      <Banner />
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl "></span>}
      >
        <Plyers 
        promiseFetchPlyers={promiseFetchPlyers} 
        setCoins={setCoins}
        coins={coins}
        />
      </Suspense>
    </>
  );
}

export default App;
