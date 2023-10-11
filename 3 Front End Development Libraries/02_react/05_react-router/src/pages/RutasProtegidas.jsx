import { Link, Outlet } from "react-router-dom";

function RutasProtegidas({login, logout, auth}) {

  return (
    <>
    { 
    auth ? (
      <button onClick={logout}>Logout</button>
    ) : (
      <button onClick={login}>Login</button>
    )}
    <h2>Rutas Protegidas</h2>
      <nav className="menu">
        <Link to="/protectedroutes/landing">Landing Page</Link>
        <Link to="/protectedroutes/home">Home Page</Link>
        <Link to="/protectedroutes/dashboard">Dashboard Page</Link>
        <Link to="/protectedroutes/analytics">Analytics Page</Link>
        <Link to="/protectedroutes/admin">Admin Page</Link>
      </nav>

      <Outlet />

    </>
  );
}

export default RutasProtegidas;
export const LandingPage = () => <h2>Landing Page (Public)</h2>
export const HomePage = () => <h2>Home Page (Private)</h2>
export const DashboardPage = () => <h2>Dashboard Page (Private)</h2>
export const AnalyticsPage = () => <h2>Analytics Page {"(Private, permission: 'analize' )"}</h2>
export const AdminPage = () => <h2>Admin Page {"(Private, role: 'admin' )"}</h2>
