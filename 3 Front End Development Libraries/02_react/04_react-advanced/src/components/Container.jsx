import NavBar from "./NavBar";
function Container({children}) {
  return (
    <>
      <NavBar />
      <hr />
      <>{children}</>
    </>
  );
}

export default Container;
