import Link from "next/link";
function NavBar() {
  return (
    <>
    <nav>
      <div className="nav-container">
        <Link  href="/"><h3>Next Crud SQLite y Prisma ORM</h3></Link>
        <ul>
          <li><Link className="text-slate-300 hover:text-slate-200" href="/new">New</Link></li>
          <li><Link  href="/about">About</Link></li>
        </ul>
      </div>
    </nav>
    </>
  );
}

export default NavBar;