import { useState } from "react";
import { Tasks } from "./interfaces";
import logo from "./assets/react.svg";
import "bootswatch/dist/slate/bootstrap.min.css"; // Added this :boom:
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

interface Props {
  title?: string;
}

// function App(props: Props) {
export default function App({ title }: Props) {

  const [tasks, setTasks] = useState<Tasks[]>([
    {
      id: 1,
      title: "TypeScript And React",
      description: "Learn TypeScript React",
      completed: false,
    },
  ]);

  const getKey = (): number => new Date().getTime()

  // funcion para añadir
  const addNewTask  = (task: Tasks) => setTasks([...tasks, {...task, id: getKey(), completed: false}])

  // funcion para eliminar
  const deleteTask = (id: number) => {
    setTasks(tasks.filter( task => task.id !== id))
  }

  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="logo" style={{ width: "4rem", marginRight: "1rem" }} />
            {title && title}
          </a>
        </div>
      </nav>
      <main className="container p-4">
        <div className="row">
          <div className="col-md-4"><TaskForm addNewTask={addNewTask}/></div>
          <div className="col-md-8">
            <div className="row">
              <TaskList deleteTask={deleteTask} tasks={tasks} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
