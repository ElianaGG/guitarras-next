import Layout from "@/components/layout";
import ListadoPosts from "@/components/listado-posts";

const Blog = ({ posts }) => {
  console.log(posts);
  return (
    <Layout
      title={"Blog"}
      description={"GuitarLA, Blog de música y venta de guitarras"}
    >
      <ListadoPosts posts={posts} />
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
  const { data: posts } = await respuesta.json();

  return {
    props: {
      posts,
    },
  };
}
