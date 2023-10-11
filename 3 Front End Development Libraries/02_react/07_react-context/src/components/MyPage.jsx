import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";

const initialTheme ="light";
const initialLanguage = "es";

const traducciones = {
  es: {
    headerTitle: "Mi applicacion SIN Context API",
    headerSubtitle: "Mi cabecera",
    headerLight: "CLARO",
    headerDark: "OSCURO",
    buttonLogin: "LOGIN",
    buttonLogout: "LOGOUT",
    mainWelcome:"Bienvenid@ Invitad@",
    mainHello: "Hola Usuari@",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pie de pagina"
  },
  en: {
    headerTitle: "My application without Copntext API",
    headerSubtitle: "My header",
    headerLight: "LIGHT",
    headerDark: "DARK",
    buttonLogin: "LOGIN",
    buttonLogout: "LOGOUT",
    mainWelcome:"Welcome",
    mainHello: "Hello User",
    mainContent: "My main content",
    footerTitle: "My footer content"
  }
}

function MyPage() {
  const [theme, setTheme] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);
  const [translate, setTranslate] = useState(traducciones[language])

  const handleTheme = (e) => {
    // console.log(e.target.value);
    if(e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }
  const handleLanguage = (e) => {
    if(e.target.value === "es") {
      setLanguage("es");
      setTranslate(traducciones.es)
    } else {
      setLanguage("en");
      setTranslate(traducciones.en)
    }
  }

  return (
    <div
      className="my-page"
      style={{
        margin: "2rem auto",
        padding: "1rem",
        width: "70%",
        color: "#000",
        backgroundColor: "#ccc" }}
    >
      <Header theme={theme} handleTheme={handleTheme} translate={translate} handleLanguage={handleLanguage} />
      <hr />
      <Main theme={theme} translate={translate} />
      <hr />
      <Footer theme={theme} translate={translate} />
    </div>
  );
}

export default MyPage;
