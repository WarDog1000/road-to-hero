import { Tasks } from "../interfaces"
import TaskCard from "./TaskCard"

interface Props {
  tasks: Tasks[]
}
function TaskList({tasks}: Props) {
  return (
    <div>
      {tasks.map((task) => (
        <div className="col-md-4 pb-2" key={task.id}>
          <TaskCard task={task} />
        </div>
      ))}      
    </div>
  )
}

export default TaskList
