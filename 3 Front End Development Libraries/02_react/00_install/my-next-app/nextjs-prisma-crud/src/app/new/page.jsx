"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
function NewPage({params}) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const router = useRouter()

  useEffect(() => {
    if(params.id) {
      fetch(`/api/tasks/${params.id}`)
      .then( res => res.json())
      .then(data => {
        setTitle(data.title)
        setDescription(data.description)
      })
    }
  }, [])
  

  const post = async () => {
    const res = await fetch(`/api/tasks`, {
      method: 'POST',
      body: JSON.stringify({title, description}),
      headers: {
        "content-type": "application/json"
      }
    })
    const data = await res.json();
  }

  const put = async () => {
    const res = await fetch(`/api/tasks/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify({title, description}),
      headers: { "content-type": "application/json" }
    })
    const data = await res.json();
  }
  
  const del = async () => {
    const res = await fetch(`/api/tasks/${params.id}`, {
      method: "DELETE"
    })
    const data = await res.json();
    router.refresh(); // refresca la pagina del cache
    router.push('/'); // redirecciona a la pagina "home"
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e)
    // setTitle(e.target.title.value);
    // setDescription(e.target.description.value);
    if(params.id) {
      await put()
    } else {
      await post();
    }
    router.refresh(); // refresca la pagina del cache
    router.push('/'); // redirecciona a la pagina "home"
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit}
       className="bg-slate-800 p-10 lg:w-1/4 md:w-1/2">
        <label htmlFor="title">Titulo</label>
        <input onChange={(e) => setTitle(e.target.value)}
        id="title" placeholder="Titulo" value={title} type="text" />
        <label htmlFor="description">Description de la Tarea</label>
        <textarea onChange={(e) => setDescription(e.target.value)}
         id="description" placeholder="description" value={description} rows="3" />
        <button type="submit"
         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1">
          {params.id ? "Update" : "Crear"}</button>
          {params.id && (
            <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-1"
            onClick={() => del()}>
              Delete
            </button>
          )}
      </form>
    </div>
  );
}

export default NewPage;