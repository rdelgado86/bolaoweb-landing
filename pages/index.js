import React from "react";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen font-sans">
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="BOLÃOWEB Logo" className="h-10" />
          <span className="text-yellow-400 text-2xl font-bold">BOLAOWEB</span>
        </div>
        <nav className="space-x-6 hidden md:flex">
          <a href="#como-funciona" className="hover:text-yellow-300">Como Funciona</a>
          <a href="#campeonatos" className="hover:text-yellow-300">Campeonatos</a>
          <a href="#login" className="hover:text-yellow-300">Login</a>
        </nav>
      </header>

      <section className="px-6 py-20 text-center bg-gray-800">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Seu bolão online dos campeonatos que você ama</h1>
        <p className="text-lg mb-8 text-gray-300">Crie bolões, desafie amigos e acompanhe os palpites em tempo real</p>
        <a href="#criar" className="bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-full hover:bg-yellow-300 transition">Criar meu bolão</a>
      </section>

      <section id="como-funciona" className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Como Funciona</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Crie seu bolão</h3>
            <p className="text-gray-300">Cadastre-se e crie um bolão para o campeonato que desejar.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Convide os amigos</h3>
            <p className="text-gray-300">Compartilhe o link e junte a galera para palpitar.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Acompanhe o ranking</h3>
            <p className="text-gray-300">Veja quem mandou bem a cada rodada e fique no topo!</p>
          </div>
        </div>
      </section>

      <section id="campeonatos" className="px-6 py-20 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">Campeonatos Populares</h2>
        <ul className="flex flex-wrap justify-center gap-8 text-lg text-yellow-400 font-semibold">
          <li>Brasileirão</li>
          <li>Libertadores</li>
          <li>Champions League</li>
          <li>Copa do Mundo</li>
          <li>Estaduais</li>
        </ul>
      </section>

      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Pronto para entrar em campo?</h2>
        <p className="text-gray-300 mb-8">Crie seu bolão agora e convide seus amigos para participar.</p>
        <a href="#criar" className="bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-full hover:bg-yellow-300 transition">Começar agora</a>
      </section>

      <footer className="px-6 py-10 bg-gray-950 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BOLAOWEB.COM.BR • Todos os direitos reservados
      </footer>
    </main>
  );
}
