"use client";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";
function NavBar() {
  const {data: session} = useSession();
  // console.log(session);
  return (
    <>
      <nav className="bg-slate-900 flex justify-between items-center py-3 px-24 text-white">
        <Link href="/"><h1>Next Google Auth</h1></Link>
        {session?.user ? (
        <ul className="flex gap-x-2 items-center">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <p>{session.user.name} {session.user.email}</p>
          <img src={session.user.image} alt="user-img" className="w-10 h-10 rounded-full cursor-pointer" />
          <button onClick={() => signOut()} className="bg-red-400 px-3 py-2 rounded">Logout</button>
        </ul>
        ) : (<button onClick={() => signIn()} className="bg-sky-400 px-3 py-2 rounded">Sign In</button>)}
        
      </nav>
    </>
  );
}

export default NavBar;
