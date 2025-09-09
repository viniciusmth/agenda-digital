import React from 'react';
const App: React.FC = () => {
  const getInfo = async () => {
    const response = await fetch("https://agenda-digital.fly.dev/");
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="min-h-screen bg-slate-200 flex flex-col items-center justify-center p-6 overflow-hidden relative">
        <div className="mt-8">
          <button
            className="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-900 transition duration-300 shadow-lg"
            onClick={getInfo}
          >
            Obter informações
          </button>
        </div>
    </div>
  );
};

export default App;