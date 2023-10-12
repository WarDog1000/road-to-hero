function HeaderContext({theme, auth, translate: text, handleTheme, handleLanguage, handleAuth}) {
  return (
    <header className={theme}>
      <h2>{text.headerTitle}</h2>
      <h3>{text.headerSubtitle}</h3>
      <select name="language" id="lang" onClick={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input type="radio" name="theme" id="light-context" value="light" onClick={handleTheme} />
      <label htmlFor="light-context">{text.headerLight}</label>
      <input type="radio" name="theme" id="dark-context" value="dark" onClick={handleTheme} />
      <label htmlFor="dark-context">{text.headerDark}</label>
      <button onClick={handleAuth}>{ !auth ? text.buttonLogin : text.buttonLogout}</button>
    </header>
  );
}

export default HeaderContext;
