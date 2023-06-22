import Layout from "@/components/layout";
import ListadoGuitarras from "@/components/listado-guitarras";

const Tienda = ({ guitarras }) => {
  return (
    <Layout
      title={"Tienda de Guitarras"}
      description={"GuitarLA - Nuestra coleccion de Guitarras"}
    >
      <ListadoGuitarras guitarras={guitarras} />
    </Layout>
  );
};

export default Tienda;

export async function getStaticProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  );
  const { data: guitarras } = await respuesta.json();

  return {
    props: {
      guitarras,
    },
  };
}
