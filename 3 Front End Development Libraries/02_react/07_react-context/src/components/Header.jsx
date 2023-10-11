function Header({theme, translate: text, handleTheme, handleLanguage}) {
  return (
    <header className={theme}>
      <h2>{text.headerTitle}</h2>
      <h3>{text.headerSubtitle}</h3>
      <select name="language" id="lang" onClick={handleLanguage}>
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
      <input type="radio" name="theme" id="light" value="light" onClick={handleTheme} />
      <label htmlFor="light">{text.headerLight}</label>
      <input type="radio" name="theme" id="dark" value="dark" onClick={handleTheme} />
      <label htmlFor="dark">{text.headerDark}</label>
      <button>{text.buttonLogin}{text.buttonLogout}</button>
    </header>
  );
}

export default Header;
