import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";

async function loadTasks() {
  // obteniendo la base de datso
  // haciendo una peticion HTTP /api/tasks
  // const res = await fetch("http://localhost:3000/api/tasks");
  // const data = res.json();
  // console.log(data)

  return await prisma.task.findMany();
}

// export const revalidate = 0;
export const dynamic = `force-dynamic`; // refresca la cache desde el servidor real

async function HomePage() {
  const tasks = await loadTasks();
  // console.log(tasks);
  return (
    <>
      <section className="container mx-auto">
        <div className="home-tasks">
          {tasks.map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;
