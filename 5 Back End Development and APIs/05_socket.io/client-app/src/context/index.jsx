import { createContext, useEffect, useState } from "react";
import { useSocketConnection } from "../hooks/useSocket";

// Se declara un contexto
export const AppContext = createContext(null);

// Se crea el proveedor del contexto
export const ContextProvider = ({ children }) => {
  
  const socket = useSocketConnection()
  
  const [updatedCount, setUpdatedCount] = useState(null)
  const [count, setCount] = useState(null)
  
  useEffect(() => { socket.emit('update-count', {id: "662f19a79fb7d6f604a686db"})}, [])
  
  socket.on('count-updated', (updatedCount) => setUpdatedCount(updatedCount))

  useEffect(() => {

    setCount(updatedCount)

  }, [updatedCount]) // Se ejecuta cuando count cambia

  const data = { socket, count }

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}