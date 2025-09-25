 const App = () => {
  return (
    <main className="min-h-dvh grif place-items-center bg-amber-50">
      <h1 className="text-3x1 font-bold text-black">

 return (
    <div style={styles.container}>

      {/* 1. CABEÇALHO / NAVEGAÇÃO */}
      <div style={styles.header}>
        <div style={styles.logo}>ZOO</div>
        <div style={styles.searchBar}>barra de psq</div>
        <div style={styles.navLink}>home</div>
        <div style={styles.navLink}>sobre o zoologico</div>
        <div style={styles.navLink}>animais</div>
        <div style={styles.navLink}>contato</div>
      </div>

      {/* 2. SEÇÃO: SOBRE O ZOOLÓGICO */}
      <div style={styles.sectionTitleBlock}>sobre o zoologico</div>
      <div style={styles.contentRow}>
        <div style={styles.textBox}>
          Este é o texto de introdução sobre o zoológico. Aqui você pode falar sobre nossa missão, história e o que nos torna especiais.
        </div>
        <div style={styles.photoBlock}>
          FOTO
        </div>
      </div>

      {/* 3. SEÇÃO: ANIMAIS */}
      <div style={styles.sectionTitleBlock}>animais</div>
      <div style={styles.contentRow}>
        <div style={styles.textBox}>
          Descubra nossa diversidade de animais! Informações sobre as espécies, habitats e esforços de conservação.
        </div>
        <div style={styles.photoBlock}>
          FOTO
        </div>
      </div>

      {/* 4. SEÇÃO: CONTATO */}
      <div style={styles.sectionTitleBlock}>contato</div>
      <div style={styles.contentRow}>
        <div style={styles.textBox}>
          Entre em contato conosco para agendamentos, dúvidas ou parcerias. Telefone, email e endereço.
        </div>
        <div style={styles.photoBlock}>
          FOTO
        </div>
      </div>
    </div>
  );
}

      </h1>
    </main>
  )