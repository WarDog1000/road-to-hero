import HeaderContext from "./HeaderContext.jsx";
import MainContext from "./MainContext.jsx";
import FooterContext from "./FooterContext.jsx";
import { useState } from "react";

const initialTheme ="light";
const initialLanguage = "es";

const traducciones = {
  es: {
    headerTitle: "Mi applicacion CON Context API",
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
    headerTitle: "My application with Copntext API",
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

function MyPageContext() {
  const [theme, setTheme] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);
  const [translate, setTranslate] = useState(traducciones[language])
  const [auth, setAuth] = useState(false)

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

  const handleAuth = (e) => {
    if(auth === false) {
      setAuth(true);
    } else {
      setAuth(false);
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
      <HeaderContext theme={theme} handleTheme={handleTheme} translate={translate} handleLanguage={handleLanguage} auth={auth} handleAuth={handleAuth} />
      <hr />
      <MainContext theme={theme} translate={translate} auth={auth} />
      <hr />
      <FooterContext theme={theme} translate={translate} />
    </div>
  );
}

export default MyPageContext;
