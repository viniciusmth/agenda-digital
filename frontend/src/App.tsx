import React from 'react';
import Profile from '../components/Profile';
import CardStats from '../components/CardStats';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CardClient from '../components/CardClient';


const App: React.FC = () => {
  const [theme, setTheme] = useState("light");

  return (
  <div className="min-h-screen h-screen flex justify-center items-center py-15 px-30 gap-5 overflow-hidden">
    <div className="flex-1 h-full">
      <div className="gap-40 flex flex-col">
        <Profile/>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-md text-[var(--primary-text)]">Estatísticas quantitativas</h1>
          <CardStats title="Total de clientes" value={37}/>
          <CardStats title="Clientes hoje" value={14 }/>
          <CardStats title="Clientes este mês" value={28}/>
        </div>
      </div>


      {/* <button 
      className="bg-blue-500 text-white p-2 rounded-md"
      onClick={() => {
        if (theme == "light"){
          document.documentElement.style.setProperty("--background-color", "#FBFBFB");
          setTheme("dark");
        }
        else {
          document.documentElement.style.setProperty("--background-color", "#000000");
          setTheme("light");
        }
      }}>Mudar</button> */}
    </div>
    <div className="flex-3 h-full gap-10 flex flex-col">
      <SearchBar/>
      <div className="h-[calc(100%-80px)] overflow-y-auto">
        <div className="flex flex-col gap-5">
          <CardClient/> 
          <CardClient/> 
          <CardClient/> 
          <CardClient/> 
          <CardClient/> 
          <CardClient/> 
          <CardClient/> 
        </div>

      </div>

    </div>
  </div>
   
  );
};

export default App;