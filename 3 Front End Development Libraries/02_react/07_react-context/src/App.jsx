import MyPage from "./components/MyPage";
import MyPageContext from "./components/MyPageContext";

function App() {
  return (
    <>
      <h1>React Context API</h1>
      <hr />
      <section>
        <MyPage />
        <MyPageContext />
      </section>
    </>
  );
}

export default App;