import Link from "next/link";
function NavBar() {
  return (
    <>
    <nav className="bg-slate-400 mb-4 flex justify-between items-center px-20 p-7">
      <Link href="/" className="text-black font bold">Home</Link>
      <ul>
        <li><Link href="/about">About</Link></li>
      </ul>
    </nav>
    </>
  );
}

export default NavBar;