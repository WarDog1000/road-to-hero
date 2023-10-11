import Link from "next/link";
function NotFound() {
  return (
    <>
      <section>
        <h3>Pagina No Encontrada</h3>
        <Link href="/">Volver</Link>
      </section>
    </>
  );
}

export default NotFound;
