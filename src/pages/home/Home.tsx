
import {Container} from '../../components/Container/Container'
import styles from './Home.module.css'

export function Home() {
  return (
    <Container>
      <section className={styles.Searchbar}>
        <input 
          className={styles.bar} 
          type='text' 
          placeholder='Digite o nome do carro...'></input>
        <input 
          className={styles.Search} 
          type='submit' 
          value='Buscar'></input>
      </section>

      <h1 className={styles.title}>Carros novos e usados em todo o Brasil</h1>
      
      <main>
         <section className={styles.CarCard}>
          <img src='https://th.bing.com/th/id/R.0d1d4fff73dd5f099ae0c55e419ef304?rik=Ngs3Qz%2fJKJSoDw&pid=ImgRaw&r=0' alt='Carro' />

          <p className={styles.carname}>SUV Mitsubishi Outlander 2.2</p>

          <div className={styles.carinfo}>
            <span>2016 | 26999 km</span>
            <strong>80.900</strong>
          </div>
          <hr/>
          <div className={styles.carlocal}>
            <span> Campo Grande - MS </span>
          </div>
        </section>

         <section className={styles.CarCard}>
          <img src='https://th.bing.com/th/id/R.0d1d4fff73dd5f099ae0c55e419ef304?rik=Ngs3Qz%2fJKJSoDw&pid=ImgRaw&r=0' alt='Carro' />

          <p className={styles.carname}>SUV Mitsubishi Outlander 2.2</p>

          <div className={styles.carinfo}>
            <span>2016 | 26999 km</span>
            <strong>80.900</strong>
          </div>
          <hr/>
          <div className={styles.carlocal}>
            <span> CAMPO GRANDE - RS </span>
          </div>
        </section>

         <section className={styles.CarCard}>
          <img src='https://th.bing.com/th/id/R.0d1d4fff73dd5f099ae0c55e419ef304?rik=Ngs3Qz%2fJKJSoDw&pid=ImgRaw&r=0' alt='Carro' />

          <p className={styles.carname}>SUV Mitsubishi Outlander 2.2</p>

          <div className={styles.carinfo}>
            <span>2016 | 26999 km</span>
            <strong>80.900</strong>
          </div>
          <hr/>
          <div className={styles.carlocal}>
            <span> Campo Grande - MS </span>
          </div>
        </section>
      </main>
    
    </Container>
    
  );
}


