import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import Plyers from "./components/HomePage/Plyers/Plyers";
import { ToastContainer } from "react-toastify";
import Banner from "./components/HomePage/Banner/Banner";
import Footer from "./components/HomePage/Footer/Footer";


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
     <Banner/>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl "></span>}
      >
        <Plyers 
        promiseFetchPlyers={promiseFetchPlyers} 
        setCoins={setCoins}
        coins={coins}
        />
      </Suspense>
      
      <Footer/>
      <ToastContainer />
    </>
  );
}

export default App;
