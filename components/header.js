import Image from "next/image";
import Link from "next/link";
import styles from "../styles/header.module.css";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/img/logo.svg"
            width={300}
            height={40}
            alt="Imagen Logo"
          />
        </Link>
        <nav className={styles.navegacion}>
          <Link className={pathname === "/" ? styles.active : ""} href="/">
            Inicio
          </Link>
          <Link
            className={pathname === "/nosotros" ? styles.active : ""}
            href="/nosotros"
          >
            Nosotros
          </Link>
          <Link
            className={pathname === "/tienda" ? styles.active : ""}
            href="/tienda"
          >
            Tienda
          </Link>
          <Link
            className={pathname === "/blog" ? styles.active : ""}
            href="/blog"
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
