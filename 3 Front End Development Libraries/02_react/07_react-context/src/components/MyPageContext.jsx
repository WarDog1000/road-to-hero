import HeaderContext from "./HeaderContext.jsx";
import MainContext from "./MainContext.jsx";
import FooterContext from "./FooterContext.jsx";
import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext.jsx";
import { AuthProvider } from "../context/AauthContext.jsx";

function MyPageContext() {

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
          <AuthProvider>
            <HeaderContext />
            <hr />
            <MainContext />
            <hr />
            <FooterContext />
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default MyPageContext;
