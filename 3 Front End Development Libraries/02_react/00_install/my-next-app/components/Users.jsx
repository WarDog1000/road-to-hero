"use client"
import { useState, useEffect } from 'react';
function Users() {
  let views = window.localStorage.getItem('views') || 0;
  const [count, setCount] = useState(0);
  useEffect(() => {
    views++;
    setCount(views)
  }, [])
  window.localStorage.setItem('views', count)
  

  return (
    <div>
      <h2>Users: </h2>
      <h3>Views {count}</h3>
    </div>
  );
}

export default Users;