import { ChangeEvent, FormEvent, useState, useRef } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import { Tasks } from '../interfaces'

interface Props {
  addNewTask: (task: Tasks) => void
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
type HandleFormChange = FormEvent<HTMLFormElement>

const initialState = {
  title: '',
  description: '',
}

function TaskForm({addNewTask}: Props) {

  const [task, setTask] = useState<Tasks>(initialState)

  const inputFocus = useRef<HTMLInputElement>(null);

  const handleChange = ({target}: HandleInputChange ) => {
    setTask({...task, [target.name]: target.value})
  }

  const handleSubmit = (e: HandleFormChange ) => {
    e.preventDefault()
    addNewTask(task)
    setTask(initialState)
    inputFocus.current?.focus() // focus al elemento
  }

  return (
    <div className="card card-body bg-secondary text-dark">
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange}
         value={task.title} 
         type="text" 
         name="title" 
         id="title" 
         placeholder="Write a title" 
         className="form-control mb-3 rounded-8 shadow-none border-0"
         />
        <textarea  onChange={handleChange} value={task.description} name="description" id="" rows={2} className="description form-control mb-3 shadow-none border-0" placeholder="Description"></textarea>
        <button className="btn btn-primary"><AiOutlinePlus /> Save</button>
      </form>
    </div>    
  )
}

export default TaskForm