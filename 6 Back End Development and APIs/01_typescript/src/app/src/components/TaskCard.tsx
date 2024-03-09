import { Tasks } from "../interfaces"

interface Props {
  task: Tasks
}

const TaskCard = ({task}: Props) => {
  return (
    <div className="card card-body bg-secondary rounded-2 text-dark">
      <h2>{task.title}</h2>
      <p>{task.id}</p>
      <p>{task.description}</p>
      <button className="btn btn-danger">
        Dlete
      </button>
    </div>
  )
}

export default TaskCard
