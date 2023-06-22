import Layout from "@/components/layout";
import Curso from "@/components/curso";
import ListadoGuitarras from "@/components/listado-guitarras";
import ListadoPosts from "@/components/listado-posts";

export default function Home({ guitarras, curso, posts }) {
  return (
    <>
      <Layout
        title={"Inicio"}
        description={"Blog de música, venta de guitarras"}
      >
        <ListadoGuitarras guitarras={guitarras} />
        <Curso curso={curso} />
        <ListadoPosts posts={posts} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`;
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`;
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`;

  const [resGuitarras, resCurso, resPosts] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCurso),
    fetch(urlPosts),
  ]);

  const [{ data: guitarras }, { data: curso }, { data: posts }] =
    await Promise.all([resGuitarras.json(), resCurso.json(), resPosts.json()]);

  return {
    props: {
      guitarras,
      curso,
      posts,
    },
  };
}
