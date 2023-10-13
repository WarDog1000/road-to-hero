import { createContext, useState } from "react";

const LanguageContext = createContext();

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
const initialLanguage = "es";
const LanguageProvider = ({children}) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [translate, setTranslate] = useState(traducciones[language])
  const handleLanguage = (e) => {
    if(e.target.value === "es") {
      setLanguage("es");
      setTranslate(traducciones.es)
    } else {
      setLanguage("en");
      setTranslate(traducciones.en)
    }
  }

  const data = {translate, handleLanguage}

  return(<LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>)
}

export {LanguageProvider};
export default LanguageContext;