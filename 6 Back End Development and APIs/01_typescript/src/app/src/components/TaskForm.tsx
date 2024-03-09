function TaskForm() {
  return (
    <div className="card card-body bg-secondary text-dark">
      <h2>Add Task</h2>
      <form >
        <input type="text" name="title" id="title" placeholder="Write a title" className="form-control mb-3 rounded-8 shadow-none border-0" />
      </form>
    </div>    
  )
}

export default TaskForm
