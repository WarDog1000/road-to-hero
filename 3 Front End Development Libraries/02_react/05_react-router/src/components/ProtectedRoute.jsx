import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({children, auth, to = "/protectedroutes/landing"}) {
  if(!auth) {
    return <Navigate to={to} />
  }
  return (
    <>
      <h2>Protected Route Element</h2>
      {/* para una y varias rutas protegidas */}
      { children ? <>{children}</> : <Outlet />}
    </>
  );
}

export default ProtectedRoute;