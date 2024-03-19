import { Tasks } from "../interfaces"
import TaskCard from "./TaskCard"

interface Props {
  tasks: Tasks[]
  deleteTask: (id: number) => void
}
function TaskList({tasks, deleteTask}: Props) {
  return (
    <div>
      {tasks.map((task) => (
        <div className="col-md-4 pb-2" key={task.id}>
          <TaskCard deleteTask={deleteTask} task={task} />
        </div>
      ))}      
    </div>
  )
}

export default TaskList
