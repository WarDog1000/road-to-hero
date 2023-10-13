import HeaderContext from "./HeaderContext.jsx";
import MainContext from "./MainContext.jsx";
import FooterContext from "./FooterContext.jsx";
import { useState } from "react";
import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext.jsx";

function MyPageContext() {
  const [auth, setAuth] = useState(false)
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
      <ThemeProvider>
        <LanguageProvider>
          <HeaderContext auth={auth} handleAuth={handleAuth} />
          <hr />
          <MainContext auth={auth} />
          <hr />
          <FooterContext />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default MyPageContext;
