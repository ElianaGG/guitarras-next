import Image from "next/image";
import styles from "../../styles/post.module.css";
import { formatDate } from "@/utils/helpers";
import Layout from "@/components/layout";

const Post = ({ post }) => {
  const { titulo, contenido, imagen, publishedAt } = post[0].attributes;

  return (
    <Layout>
      <article className={`${styles.post} ${styles["mt-3"]}`}>
        <Image
          src={imagen.data.attributes.url}
          width={1000}
          height={400}
          alt={`imagen blog ${titulo}`}
        />
        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.fecha}>{formatDate(publishedAt)}</p>
          <p className={styles.texto}>{contenido}</p>
        </div>
      </article>
    </Layout>
  );
};

export default Post;

export async function getServerSideProps({ query: { url } }) {
  const res = await fetch(
    `${process.env.API_URL}/posts/?filters[url]=${url}&populate=imagen`
  );
  const { data: post } = await res.json();

  return {
    props: {
      post,
    },
  };
}
