function Main({theme, translate: text, auth}) {
  return (
    <main className={theme}>
      { auth ? <p>{text.mainHello}</p> : <p>{text.mainWelcome}</p> }
      <p>{text.mainContent}</p>
    </main>
  );
}

export default Main;
