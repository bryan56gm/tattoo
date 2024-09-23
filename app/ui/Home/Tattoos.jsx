// Styles
import styles from './tattoos.module.scss'

export default function Tattoos() {
    return (
      <section className="section">
        <div className="container">
            <h2 className={styles.tattoos__title}>Tattoos</h2>
            <div className={styles.tattoos__gallery}>
                <img src="/assets/img/home/tattoo-1.jpg" alt="Tatto" className={styles.tattoos__img}/>
                <img src="/assets/img/home/tattoo-2.jpg" alt="Tatto" className={styles.tattoos__img}/>
                <img src="/assets/img/home/tattoo-3.jpg" alt="Tatto" className={styles.tattoos__img}/>
                <img src="/assets/img/home/tattoo-4.jpg" alt="Tatto" className={styles.tattoos__img}/>
                <img src="/assets/img/home/tattoo-5.jpg" alt="Tatto" className={styles.tattoos__img}/>
                <img src="/assets/img/home/tattoo-6.jpg" alt="Tatto" className={styles.tattoos__img}/>
                <img src="/assets/img/home/tattoo-7.jpg" alt="Tatto" className={styles.tattoos__img}/>
            </div>
        </div>
      </section>
    );
}