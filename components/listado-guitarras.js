import Guitarra from "./guitarra";
import styles from "../styles/blog.module.css";

const ListadoGuitarras = ({ guitarras }) => {
  return (
    <main className="contenedor">
      <h2 className="heading">Nuestra Colección</h2>
      <div className={styles.grid}>
        {guitarras.map((guitarra) => (
          <Guitarra key={guitarra?.id} guitarra={guitarra?.attributes} />
        ))}
      </div>
    </main>
  );
};

export default ListadoGuitarras;
