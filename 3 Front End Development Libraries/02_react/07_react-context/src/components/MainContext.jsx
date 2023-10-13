import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";

function MainContext({auth}) {
  const {theme} = useContext(ThemeContext)
  const {translate: text} = useContext(LanguageContext)
  return (
    <main className={theme}>
      { auth ? <p>{text.mainHello}</p> : <p>{text.mainWelcome}</p> }
      <p>{text.mainContent}</p>
    </main>
  );
}

export default MainContext;
