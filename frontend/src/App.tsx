import React from 'react';
import foto1 from './assets/foto1.jpg';
import foto2 from './assets/foto2.jpg';
import foto3 from './assets/foto3.jpg';

// Nota: Importe as fotos salvando-as localmente em src/assets/ e ajustando os caminhos abaixo.
// Exemplo: Salve a primeira foto como photo1.jpg, a segunda como photo2.jpg, a terceira como photo3.jpg
// import photo1 from './assets/photo1.jpg';
// import photo2 from './assets/photo2.jpg';
// import photo3 from './assets/photo3.jpg';
// No código abaixo, use placeholders para src; substitua com imports reais.

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-100 to-blue-100 flex flex-col items-center justify-center p-6 overflow-hidden relative">
      {/* Elementos carinhosos flutuantes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-12 h-12 bg-pink-300 rounded-full absolute top-10 left-10 animate-float opacity-50"></div>
        <div className="w-16 h-16 bg-red-300 rounded-full absolute bottom-20 right-20 animate-float delay-100 opacity-50"></div>
        <div className="w-8 h-8 bg-purple-300 rounded-full absolute top-40 right-40 animate-float delay-200 opacity-50"></div>
        <div className="text-6xl absolute top-5 left-1/2 transform -translate-x-1/2 animate-heartbeat">💖</div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl w-full text-center transform hover:scale-105 transition duration-700 ease-in-out relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-pink-600 mb-6 animate-fade-in">
          Para Minha Princesa Eternamente Amada 🌹
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed animate-fade-in delay-200">
          Meu amor, cada dia ao seu lado é uma aventura mágica. Você transforma o comum em extraordinário com seu sorriso radiante e seu coração puro. Lembro de cada abraço, cada riso compartilhado, e eu sei que nosso amor é infinito como o céu estrelado. Você é minha musa, minha companheira, e o melhor que me aconteceu!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="relative group">
            <img
              src={foto2} // Substitua por import: photo1
              alt="Nós em frente à planta iluminada, um momento romântico à noite"
              className="rounded-xl shadow-md w-full h-64 object-cover transform group-hover:rotate-3 group-hover:scale-110 transition duration-500"
            />
            <p className="mt-2 text-md font-semibold text-pink-500 italic">
              Nosso passeio noturno, onde tudo começou a brilhar como essa planta! ✨
            </p>
          </div>
          <div className="relative group">
            <img
              src={foto3} // Substitua por import: photo2
              alt="Você com nosso cachorrinho fofo, um sorriso que derrete corações"
              className="rounded-xl shadow-md w-full h-64 object-cover transform group-hover:-rotate-3 group-hover:scale-110 transition duration-500"
            />
            <p className="mt-2 text-md font-semibold text-purple-500 italic">
              Você e nossa princesinha, a dupla mais adorável do mundo! 🐶💕
            </p>
          </div>
          <div className="relative group">
            <img
              src={foto1} // Substitua por import: photo3
              alt="Nós no sofá com o cachorro, um momento de carinho em casa"
              className="rounded-xl shadow-md w-full h-64 object-cover transform group-hover:rotate-3 group-hover:scale-110 transition duration-500"
            />
            <p className="mt-2 text-md font-semibold text-red-500 italic">
              Momentos relax no sofá, com nosso amor e o peludinho entre nós! 🛋️❤️
            </p>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed animate-fade-in delay-400">
          Esses momentos capturam a essência do nosso amor: aventuras, risadas e carinho infinito. Você me completa de formas que eu nunca imaginei, e eu prometo estar sempre ao seu lado, te amando mais a cada dia. Juntos, somos invencíveis!
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <span className="text-3xl animate-heartbeat">❤️</span>
          <span className="text-3xl animate-heartbeat delay-100">💕</span>
          <span className="text-3xl animate-heartbeat delay-200">🌟</span>
        </div>

        <p className="text-lg text-gray-600 font-semibold animate-fade-in delay-600">
          Com todo o meu coração, <br />
          <span className="text-pink-600 text-2xl font-cursive">Vinicius 💌</span>
        </p>

        <div className="mt-8">
          <button
            className="bg-gradient-to-r from-pink-600 to-red-600 text-white px-8 py-3 rounded-full hover:from-pink-700 hover:to-red-700 transition duration-300 transform hover:-translate-y-1 shadow-lg"
            onClick={() => alert('Te amo mais que tudo no mundo! Vamos criar mais memórias assim? 😘')}
          >
            Envie um Abraço Virtual
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

// Para usar: Substitua os src das img por imports reais e adicione animações personalizadas no tailwind.config.js se necessário.
// Exemplo de animações no tailwind.config.js:
// theme: { extend: { animation: { float: 'float 3s ease-in-out infinite', heartbeat: 'heartbeat 1s ease-in-out infinite', 'fade-in': 'fadeIn 1s ease-in' } } }
// keyframes: { float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } }, heartbeat: { '0%, 100%': { transform: 'scale(1)' }, '50%': { transform: 'scale(1.1)' } }, fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } } }