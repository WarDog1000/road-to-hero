import Users from "@/components/Users";

export const metadata = {
  title: "Mi pagina especial Home"
}


function HomePage() {
  // Server Component
  return ( 
    <>
    <h1>Home Page</h1>
    {/* Client Component */}
    <Users />
    </>
   );
}

export default HomePage;

