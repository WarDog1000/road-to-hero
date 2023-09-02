"use client"
import {useRouter} from "next/navigation";
function AboutPage() {
  const router = useRouter();
  return (
    <>
    <section>
      <h1>About Pape</h1>  
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corrupti optio libero eaque sunt in voluptatem aperiam cupiditate, eligendi tempore cumque debitis dolorem excepturi explicabo molestiae iusto repudiandae numquam nisi?</p>

      <button onClick={()=> {router.push("/")}} className="bg-sky-400 px-3 py-2 rounded-md">Click</button>

    </section>
      </>
  );
}

export default AboutPage;