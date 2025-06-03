
import {Container} from '../../components/container'
import './style.css'

export function Home() {
  return (
    <Container>
      <section className='Search-bar'>
        <input 
          className='bar' 
          type='text' 
          placeholder='Digite o nome do carro...'></input>
        <input 
          className='Search' 
          type='submit' 
          value='Buscar'></input>
      </section>

      <h1 className='title'>Carros novos e usados em todo o Brasil</h1>
      
      <main>
         <section className='CarCard'>
          <img src='https://th.bing.com/th/id/R.0d1d4fff73dd5f099ae0c55e419ef304?rik=Ngs3Qz%2fJKJSoDw&pid=ImgRaw&r=0' alt='Carro' />

          <p className='car-name'>SUV Mitsubishi Outlander 2.2</p>

          <div className='car-info'>
            <span>2016 | 26999 km</span>
            <strong>80.900</strong>
          </div>
          <hr/>
          <div className='car-local'>
            <span> Campo Grande - MS </span>
          </div>
        </section>

         <section className='CarCard'>
          <img src='https://th.bing.com/th/id/R.0d1d4fff73dd5f099ae0c55e419ef304?rik=Ngs3Qz%2fJKJSoDw&pid=ImgRaw&r=0' alt='Carro' />

          <p className='car-name'>SUV Mitsubishi Outlander 2.2</p>

          <div className='car-info'>
            <span>2016 | 26999 km</span>
            <strong>80.900</strong>
          </div>
          <hr/>
          <div className='car-local'>
            <span> CAMPO GRANDE - RS </span>
          </div>
        </section>

         <section className='CarCard'>
          <img src='https://th.bing.com/th/id/R.0d1d4fff73dd5f099ae0c55e419ef304?rik=Ngs3Qz%2fJKJSoDw&pid=ImgRaw&r=0' alt='Carro' />

          <p className='car-name'>SUV Mitsubishi Outlander 2.2</p>

          <div className='car-info'>
            <span>2016 | 26999 km</span>
            <strong>80.900</strong>
          </div>
          <hr/>
          <div className='car-local'>
            <span> Campo Grande - MS </span>
          </div>
        </section>
      </main>
    
    </Container>
    
  );
}


