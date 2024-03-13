import { Tasks } from "../interfaces"

interface Props {
  task: Tasks
  deleteTask: (id: number) => void
}

const TaskCard = ({task, deleteTask}: Props) => {
  return (
    <div className="card card-body bg-secondary rounded-2 text-dark">
      <h2>{task.title}</h2>
      <p>{task.id}</p>
      <p>{task.description}</p>
      <button className="btn btn-danger"
      onClick={() => task.id && deleteTask(task.id)}>
        Dlete
      </button>
    </div>
  )
}

export default TaskCard
