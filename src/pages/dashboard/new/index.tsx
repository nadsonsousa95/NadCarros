import {Container} from '../../../components/Container/Container'
import { PainelHeader } from '../../../components/PainelHeader/PainelHeader';
import { FiUpload} from 'react-icons/fi'
import './style.css'

export function NewCar() {
  return (
    <Container>
          <PainelHeader></PainelHeader>

          <div className='img-form'>
            <button className='button'>
              <div className='icon'>
                <FiUpload size={30} color='black'></FiUpload>
              </div>
              <div className='input'>
                <input 
                type='file' 
                accept='image/'
                ></input>
              </div>
            </button>
          </div>

          <div className='form'>
          </div>
      </Container>
  );
}