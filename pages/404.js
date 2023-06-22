import Layout from "@/components/layout";
import Link from "next/link";

const Pagina404 = () => {
  return (
    <Layout title="Pagina no encontrada">
      <div className="contenedor">
        <h2 className="heading">Not Found</h2>
        <p className="error">Error 404 - Página no encontrada</p>
      </div>
      <Link className="error-enlace" href="/">
        Volver a inicio
      </Link>
    </Layout>
  );
};

export default Pagina404;
