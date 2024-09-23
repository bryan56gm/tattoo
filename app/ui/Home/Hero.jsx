import styles from './hero.module.scss'

export default function Hero() {
    return (
      <section className={styles.hero}>
            <div className={`container ${styles.hero__container}`}>
                <div className={styles.hero__data}>
                    <h1 className={styles.hero__title}>Lorem ipsum dolor sit amet</h1>
                    <p className={styles.hero__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, minima eius nulla cupiditate nesciunt adipisci necessitatibus totam et fugiat unde recusandae minus sapiente laudantium, obcaecati voluptate inventore doloremque consequuntur eaque.</p>
                </div>
            </div>
            
            <img src='/assets/img/home/hero.png' className={styles.hero__img} />
      </section>
    );
  }