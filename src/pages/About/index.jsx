import { Link } from "react-router-dom"

export const AboutPage = () => {
  return (
    <main>
      <header className="flex justify-between items-center ">
        <picture>
          <img src="./ChatGPT Image 30 de set. de 2025, 19_26_50.png" alt="logo do site" className="w-full max-w-[64px]" />
        </picture>

        <ul className="flex gap-6 pr-10">
          <li className="hover:underline font-semibold text-lg"><Link to='/'>Home</Link></li>
          <li className="hover:underline font-semibold text-lg"><Link to='/sobre'>Sobre</Link></li>
          <li className="hover:underline font-semibold text-lg"><Link to='/animais'>Animais</Link></li>
          <li className="hover:underline font-semibold text-lg"><Link to='/contato'>Contato</Link></li>
        </ul>
      </header>

      <div className="w-full text-slate-950 bg-neutral-200 text-justify">
        </div>
    </main>
  )
}
