import { Link } from "react-router-dom"

export const HomePage = () => {
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

      <div className="w-full text-slate-950 bg-neutral-300 text-justify">
        <div className="flex flex-col-reverse overflow-hidden lg:flex-row">
          <section className="flex w-full justify-center md:p-12 lg:w-1/2 lg:justify-end lg:p-8 xl:p-16">
            <article className="w-full max-w-2xl">
              <h1 className="text-5xl font-bold text-center mb-2">SOBRE O ZOOLOGICO JARDIM DO EDEN</h1>

              <p>O Jardim do Eden é um centro de excelência em conservação, educação e bem-estar animal. Fundado com a visão de proteger a biodiversidade global, dedicamos nossas operações a criar um futuro mais seguro para as espécies ameaçadas e a inspirar a próxima geração de defensores da natureza. </p>

              <p>Nossa missão é conectar as pessoas à vida selvagem por meio de experiências envolventes, enquanto lideramos esforços cruciais para a sobrevivência das espécies. Isso se manifesta em três pilares essenciais:</p>

              <ul className="list-disc pl-6">
                <li><b>Conservação e Pesquisa:</b> Estamos na linha de frente da luta contra a extinção. Nossos programas de reprodução de espécies ameaçadas, juntamente com a pesquisa científica de ponta, contribuem diretamente para a preservação de populações selvagens em todo o mundo.</li>
                <li><b>Educação e Conscientização:</b> Acreditamos que o conhecimento transforma. Oferecemos programas educativos que vão desde visitas guiadas até workshops especializados, com o objetivo de conscientizar nossos visitantes sobre os desafios ambientais e o papel vital que cada um desempenha na proteção do planeta.</li>
                <li><b>Bem-Estar Animal:</b> O cuidado com nossos animais é nossa prioridade máxima. Nossos recintos são projetados seguindo os mais altos padrões internacionais, replicando ao máximo os habitats naturais para garantir o conforto, o enriquecimento e a saúde física e psicológica de cada indivíduo sob nossa guarda.</li>
              </ul>

              <p> Uma Experiência Inesquecível</p>
             <p> Convidamos você a explorar mais de 100 hectares de habitats cuidadosamente planejados. Desde a imersão na floresta tropical com os vibrantes Macacos-prego, até a observação de predadores majestosos como o Leão-africano, cada visita ao Jardim do Eden é uma jornada de descoberta e uma oportunidade para se conectar profundamente com o reino animal.</p>

             <p> Ao visitar-nos, você se torna parte ativa da nossa missão. Cada bilhete, cada doação e cada momento de aprendizado ajuda a financiar nossos esforços de conservação no parque e em campo.</p>

             <p> Venha conhecer as espécies que estamos a salvar.</p>
            </article>
          </section>

          <picture className="relative hidden min-h-full w-full lg:flex lg:w-1/2">
            <img src="./ChatGPT Image 30 de set. de 2025, 19_01_24.png" alt="imagem sobre o zoo" className="object-center object-cover" />
          </picture>
        </div>

        <div className="flex flex-col-reverse overflow-hidden lg:flex-row-reverse">
          <section className="flex w-full justify-center md:p-12 lg:w-1/2 lg:justify-end lg:p-8 xl:p-16">
            <article className="w-full max-w-2xl">
              <h2 className="text-3xl font-bold text-center mb-2">SOBRE OS NOSSOS ANIMAIS: Um Mundo de Biodiversidade</h2>

              <p> No Jardim do Eden, cada habitante é mais do que um animal; é um embaixador de sua espécie e de seu habitat natural. Nossa coleção de vida selvagem representa a incrível diversidade do planeta, desde as profundezas dos oceanos até os picos das montanhas.
              </p>

              <h3 className="text-xl font-bold text-center mb-2 mt-8">Cuidado e Compromisso</h3>
              <p>O bem-estar animal é o coração de tudo o que fazemos.</p>

              <ul className="list-disc pl-6">
                <li> <b> Habitats Enriquecidos: Cada recinto é meticulosamente desenhado para replicar o ambiente de origem do animal, com paisagens, vegetação e estruturas que incentivam seus comportamentos naturais, como caçar, escalar ou nadar.</b></li>
                <li><b>Nutrição Especializada: Nossos animais recebem dietas cientificamente balanceadas, preparadas por especialistas para atender às necessidades específicas de cada espécie, idade e condição de saúde. </b> </li>
                <li><b>Enriquecimento: Implementamos programas diários de enriquecimento comportamental, que incluem brinquedos, quebra-cabeças alimentares e mudanças no ambiente, para estimular a mente dos animais e garantir sua saúde psicológica. </b></li>
              </ul>

              <h3 className="text-xl font-bold text-center mb-2 mt-8">Conheça Nossos Embaixadores</h3>
              <p>
                Ao explorar o Jardim do Eden, você terá a chance de se conectar com espécies fascinantes e aprender sobre o papel que desempenham em seus ecossistemas.
              </p>

              <ul className="list-disc pl-6">
                <li><b>Os Gigantes: Maravilhe-se com a majestade dos nossos Elefantes-africanos e a força dos Rinocerontes-brancos, espécies críticas para a saúde de suas savanas.</b></li>
                <li><b>Os Misteriosos: Descubra os predadores mais esquivos, como o Leopardo-nebuloso e a Jaguatirica, e entenda os desafios que enfrentam para sobreviver em florestas cada vez menores.</b> </li>
                <li><b>Os Coloridos: Deixe-se encantar pelo brilho dos Araras e pela vivacidade dos peixes tropicais, que nos lembram da beleza insubstituível dos recifes de coral e das florestas úmidas.</b> </li>
                <li><b>Cada animal aqui tem uma história e uma mensagem: a importância da conservação. Convidamos você a passar um tempo em cada habitat, observando e aprendendo sobre a riqueza da vida selvagem que estamos empenhados em proteger.</b></li>
              </ul>

              <h3 className="text-xl font-bold text-center mb-2 mt-8">Uma Experiência Inesquecível</h3>
              Convidamos você a explorar mais de 100 hectares de habitats cuidadosamente planejados. Desde a imersão na floresta tropical com os vibrantes Macacos-prego, até a observação de predadores majestosos como o Leão-africano, cada visita ao Jardim do Eden é uma jornada de descoberta e uma oportunidade para se conectar profundamente com o reino animal.

              <p>    Ao visitar-nos, você se torna parte ativa da nossa missão. Cada bilhete, cada doação e cada momento de aprendizado ajuda a financiar nossos esforços de conservação no parque e em campo.</p>

              <p> Venha conhecer as espécies que estamos a salvar.</p>
            </article>
          </section>

          <picture className="relative hidden min-h-full w-full lg:flex lg:w-1/2">
            <img src="./ChatGPT Image 30 de set. de 2025, 18_51_35.png" alt="imagem sobre os animais" className="object-cover" />
          </picture>
        </div>
      </div>

      <p> Excelente! A seção de contato precisa ser concisa, clara e convidativa. </p>

      <p> Aqui está um mini-texto que você pode usar, com foco na comunicação e apoio:
      </p>
      <p>Contato e Suporte
      </p>
      <p> Quer saber mais sobre nossos programas de conservação, planejar sua visita ou tem alguma dúvida? Estamos aqui para ajudar e adoramos ouvir você!
      </p>
      <p> Seja para fazer uma pergunta, dar um feedback ou discutir uma parceria, utilize os canais abaixo.
      </p>
      <p>Nosso Zoológico, Nosso Compromisso. Sua participação é vital!
      </p>
      <p>Tipo de Contato	Detalhes
      </p>
      <p> Geral / Informações	Email: contato@jardimdoeden.org
      </p>
      <p> Imprensa / Mídia	Email: imprensa@jardimdoedenimp.org
      </p>
      <p>Telefone	Tel: (XX) XXXX-XXXX</p>
      <p>Endereço Físico	[Rua, Cidade, Estado, País ] </p>
    </main>
  )
}
