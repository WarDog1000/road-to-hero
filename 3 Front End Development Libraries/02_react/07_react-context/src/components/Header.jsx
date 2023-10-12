function Header({theme, auth, translate: text, handleTheme, handleLanguage, handleAuth}) {
  return (
    <header className={theme}>
      <h2>{text.headerTitle}</h2>
      <h3>{text.headerSubtitle}</h3>
      <select name="language" id="lang" onClick={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input type="radio" name="theme" id="light" value="light" onClick={handleTheme} />
      <label htmlFor="light">{text.headerLight}</label>
      <input type="radio" name="theme" id="dark" value="dark" onClick={handleTheme} />
      <label htmlFor="dark">{text.headerDark}</label>
      <button onClick={handleAuth}>{ !auth ? text.buttonLogin : text.buttonLogout}</button>
    </header>
  );
}

export default Header;
