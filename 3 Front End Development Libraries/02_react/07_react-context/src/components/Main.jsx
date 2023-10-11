function Main({theme, translate: text}) {
  return (
    <main className={theme}>
      <p>{text.mainWelcome}</p>
      <p>{text.mainHello}</p>
      <p>{text.mainContent}</p>
    </main>
  );
}

export default Main;
