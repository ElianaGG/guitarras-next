import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../styles/nosotros.module.css";

const Nosotros = () => {
  return (
    <>
      <Layout
        title={"Nosotros"}
        description={"Blog de música, venta de guitarras"}
      >
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>
          <div className={styles.contenido}>
            <Image
              src="/img/nosotros.jpg"
              width={1000}
              height={800}
              alt="Imagen sobre nosotros"
            />
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent est risus, sollicitudin ac volutpat ut, vulputate quis
                purus. Vestibulum varius ante ac consequat ornare. Donec sit
                amet lobortis lorem. Pellentesque sit amet viverra nisi. Integer
                dapibus orci tempor nibh egestas commodo. Nulla dapibus sapien
                dolor, a ultrices ipsum ullamcorper eget. Suspendisse semper
                auctor magna. Maecenas tempus risus a risus porta lobortis.
                Praesent tincidunt sapien vel erat pellentesque euismod. Mauris
                a blandit orci. Donec in tortor non orci dignissim pulvina.
              </p>
              <p>
                Etiam placerat sapien eu magna vestibulum tristique. Aliquam
                erat volutpat. Sed tempor viverra pulvinar. Aenean quis odio non
                leo tempus dapibus. Sed ut mauris in tortor lobortis dapibus.
                Sed lectus erat, pharetra eu placerat sed, pharetra id dolor.
                Curabitur mattis elit leo, quis mollis massa vulputate eget.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Nosotros;
