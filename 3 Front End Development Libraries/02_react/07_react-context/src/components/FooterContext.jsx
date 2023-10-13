import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";
function FooterContext() {
  const {theme} = useContext(ThemeContext)
  const {translate: text} = useContext(LanguageContext)
  return (
    <footer className={theme}>
      <h4>{text.footerTitle}</h4>
    </footer>
  );
}

export default FooterContext;
