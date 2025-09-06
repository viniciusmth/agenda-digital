

import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full transform hover:scale-105 transition duration-500 ease-in-out">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4 animate-pulse">
            Para Rafaele
          </h1>
          <div className="relative mb-6">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-200 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-200 rounded-full animate-bounce delay-75"></div>
            <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed">
              Meu amor, você é o sol que ilumina meus dias e a estrela que guia minhas noites. Cada sorriso seu aquece meu coração, e eu sou grato todos os dias por ter você ao meu lado. Você é minha alegria, meu refúgio e meu tudo. Te amo mais do que palavras podem expressar! 🌸
            </p>
          </div>
          <div className="flex justify-center gap-4 mb-6">
            <span className="inline-block w-6 h-6 bg-pink-500 rounded-full animate-ping"></span>
            <span className="inline-block w-6 h-6 bg-red-500 rounded-full animate-ping delay-100"></span>
            <span className="inline-block w-6 h-6 bg-purple-500 rounded-full animate-ping delay-200"></span>
          </div>
          <div className="text-center">
            <p className="text-md md:text-lg text-gray-600 font-semibold">
              Com todo o meu amor, <br />
              <span className="text-pink-600 font-cursive animate-fade-in">Vinicius 💖</span>
            </p>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-2 rounded-lg hover:from-pink-600 hover:to-red-600 transition duration-300 transform hover:-translate-y-1"
            onClick={() => alert('Te amo infinitamente! 💕')}
          >
            Clique para um Beijo Virtual
          </button>
        </div>
      </div>
    </div>
  );
};

export default App
