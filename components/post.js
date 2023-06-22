import Image from "next/image";
import Link from "next/link";
import styles from "../styles/post.module.css";
import { formatDate } from "../utils/helpers";

export default function Post({ post }) {
  const { imagen, titulo, contenido, publishedAt, url } = post;

  return (
    <article>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        width={600}
        height={400}
        alt={`Imagen blog ${titulo}`}
      />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatDate(publishedAt)}</p>
        <p className={styles.resumen}>{contenido}</p>
        <Link className="enlace" href={`/blog/${url}`}>
          Leer post
        </Link>
      </div>
    </article>
  );
}
