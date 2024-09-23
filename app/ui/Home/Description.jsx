import styles from './description.module.scss'

export default function Description() {
    return (
      <section className={`section ${styles.description}`}>
          <div className={`container ${styles.description__container}`}>
            <div className={styles.description__data}>
              <h2 className={styles.description__title}>About</h2>
              <p className={styles.description__text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste itaque pariatur error adipisci deserunt corporis eius sequi nesciunt quas mollitia. Quod quia ducimus nemo maiores odit ad beatae, nihil provident.</p>
            </div>

            <article className={styles.description__schedule}>
              <h3 className={styles.description__subtitle}>Schedule</h3>
              <p className={styles.description__date}>Lunes - Viernes: 9 a.m. - 6 p.m.</p>
              <p className={styles.description__date}>Sábado: 10 a. m. - 2 p.m.</p>
              <p className={styles.description__date}>Domingo: cerrado</p>
            </article>
          </div>
      </section>
    );
}