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
          <div className="col-md-4"><TaskForm /></div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
