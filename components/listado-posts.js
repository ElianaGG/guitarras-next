import Post from "./post";
import styles from "../styles/blog.module.css";

const ListadoPosts = ({ posts }) => {
  return (
    <section className="contenedor">
      <h2 className="heading">Blog</h2>
      <div className={styles.grid}>
        {posts?.map((post) => (
          <Post key={post.id} post={post.attributes} />
        ))}
      </div>
    </section>
  );
};

export default ListadoPosts;
