import Image from "next/image";
import Link from "next/link";
import styles from "../styles/guitarra.module.css";

const Guitarra = ({ guitarra }) => {
  const { imagen, nombre, descripcion, precio, url } = guitarra;

  return (
    <div className={styles.guitarra}>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        width={600}
        height={400}
        alt={`Imagen guitarra ${nombre}`}
      />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link className="enlace" href={`/tienda/${url}`}>
          Ver producto
        </Link>
      </div>
    </div>
  );
};
export default Guitarra;
