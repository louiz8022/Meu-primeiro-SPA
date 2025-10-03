import { Navbar } from "../../components/Navbar"

export const ContactPage = () => {
  return (
    <>
      <Navbar />

      <main>
        <div className="w-full text-shadow-white bg-blue-950 min-h-screen text-justify">
         <h1>
          <div  className="flex-2 bg-white rounded-2xl text-center">
            <p className=" text-2xl"> Geral / Informações	Email: contato@jardimdoeden.org
      </p>
      <p className=" text-2xl"> Imprensa / Mídia	Email: imprensa@jardimdoedenimp.org
      </p>
      <p className=" text-2xl">Telefone	Tel: (XX) XXXX-XXXX</p>
      <p className=" text-2xl">Endereço Físico	[Rua, Cidade, Estado, País ] </p> </div >
        </h1>
        </div>
       
      </main>
    </>
  )
}
