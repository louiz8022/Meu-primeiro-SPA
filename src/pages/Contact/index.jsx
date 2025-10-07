import { useState } from "react";
import { Navbar } from "../../components/Navbar";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensagem enviada por ${formData.nome}!`);
    console.log(formData);
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  return (
    <>
      <Navbar />

      <main>
        <div className="w-full text-shadow-white bg-blue-950 min-h-screen text-justify text-white flex flex-col items-center py-12 px-4">
          {/* Seção de informações */}
          <div className="bg-white text-blue-800 rounded-2xl text-center p-6 max-w-3xl mb-10 shadow-xl">
            <h1 className="text-3xl font-semibold mb-4">Entre em Contato</h1>
            <p className="text-xl mb-2">
              <strong>Geral / Informações:</strong> contato@jardimdoeden.org
            </p>
            <p className="text-xl mb-2">
              <strong>Imprensa / Mídia:</strong> imprensa@jardimdoedenimp.org
            </p>
            <p className="text-xl mb-2">
              <strong>Telefone:</strong> (XX) XXXX-XXXX
            </p>
            <p className="text-xl">
              <strong>Endereço Físico:</strong> Rua Exemplo, Cidade, Estado, País
            </p>
          </div>

          {/* Formulário */}
          <form
            onSubmit={handleSubmit}
            className="bg-white text-blue-950 p-6 rounded-2xl shadow-lg w-full max-w-lg"
          >
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Envie sua Mensagem
            </h2>

            <label className="block mb-2 font-medium">Nome:</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
              required
            />

            <label className="block mb-2 font-medium">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
              required
            />

            <label className="block mb-2 font-medium">Mensagem:</label>
            <textarea
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border rounded mb-4"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>
      </main>
    </>
  );  
};
