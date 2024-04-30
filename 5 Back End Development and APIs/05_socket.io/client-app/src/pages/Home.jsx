import { useContext } from 'react'
import { AppContext } from "../context"

export default function Home() {

  const {count} = useContext(AppContext)

  return (
    <div>
      {count}
    </div>
  )
}