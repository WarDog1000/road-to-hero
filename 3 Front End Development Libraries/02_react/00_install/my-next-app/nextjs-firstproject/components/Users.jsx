
"use client";
import Link from "next/link";
function Users({users}) {
  return (
    <>
    <ul className="grid grid-cols-3">
      {users.map(user => (
        <Link href={`/users/${user.id}`} key={user.id} >
        <li className="mb-2 p-4 cursor-pointer">
           <div className="flex flex-col justify-center items-center text-center ">
            <img src={user.avatar} className="rounded-full"></img>
            <h5>{user.last_name} {user.first_name}</h5>
            <h5>{user.email}</h5>
           </div>
        </li>
        </Link>
      ))}
    </ul>
    </>
   );
}

export default Users;