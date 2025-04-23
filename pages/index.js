import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-950 text-white font-sans">
      {/* Header */}
      <header className="fixed w-full top-0 left-0 bg-gray-900 border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="BOLAOWEB Logo" width={40} height={40} />
            <h1 className="text-yellow-400 text-2xl font-bold tracking-wide">BOLAOWEB</h1>
          </div>
          <nav className="hidden md:flex gap-6 text-gray-300 text-sm">
            <a href="#como-funciona" className="hover:text-yellow-300">Como Funciona</a>
            <a href="#campeonatos" className="hover:text-yellow-300">Campeonatos</a>
            <a href="#comece" className="hover:text-yellow-300">Comece Agora</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center bg-gradient-to-b from-gray-900 to-gray-950">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Desafie seus amigos no<br className="hidden md:inline" /> melhor bolão da internet</h2>
        <p className="text-lg text-gray-400 mb-8">Crie bolões para qualquer campeonato, compartilhe com amigos e acompanhe o ranking em tempo real.</p>
        <a href="#comece" className="inline-block bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-full hover:bg-yellow-300 transition">Criar meu bolão</a>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="px-6 py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-14">Como Funciona</h3>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div>
              <h4 className="text-xl font-semibold text-yellow-400 mb-2">1. Crie seu bolão</h4>
              <p className="text-gray-300">Escolha um campeonato, defina as regras e gere seu link.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-yellow-400 mb-2">2. Convide os amigos</h4>
              <p className="text-gray-300">Compartilhe o link e monte sua liga de palpites personalizada.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-yellow-400 mb-2">3. Dispute ponto a ponto</h4>
              <p className="text-gray-300">Acompanhe os jogos e veja quem lidera o ranking a cada rodada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Campeonatos */}
      <section id="campeonatos" className="px-6 py-24 bg-gray-950">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">Campeonatos em Destaque</h3>
          <div className="flex flex-wrap justify-center gap-6 text-yellow-400 text-lg font-semibold">
            <span>🇧🇷 Brasileirão</span>
            <span>🏆 Libertadores</span>
            <span>⚽ Champions League</span>
            <span>🌎 Copa do Mundo</span>
            <span>🏅 Estaduais</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="comece" className="px-6 py-24 bg-gradient-to-br from-yellow-400 to-yellow-300 text-gray-900 text-center">
        <h3 className="text-3xl font-bold mb-4">Preparado para começar?</h3>
        <p className="text-lg mb-6">Monte agora o seu bolão e chame a galera para palpitar!</p>
        <a href="#" className="inline-block bg-gray-900 text-yellow-300 font-bold py-3 px-6 rounded-full hover:bg-gray-800 transition">Criar bolão agora</a>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 bg-black text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BOLAOWEB.COM.BR • Todos os direitos reservados
      </footer>
    </main>
  );
}
