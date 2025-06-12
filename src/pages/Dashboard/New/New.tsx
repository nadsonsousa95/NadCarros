import {Container} from '../../../components/Container/Container'
import { PainelHeader } from '../../../components/PainelHeader/PainelHeader';
import { FiUpload} from 'react-icons/fi'
import styles from './New.module.css';

export function NewCar() {
  return (
    <Container>
          <PainelHeader></PainelHeader>

          <div className={styles.imgForm}>
            <button className={styles.button}>
              <div className={styles.icon}>
                <FiUpload size={30} color='black'></FiUpload>
              </div>
              <div className={styles.input}>
                <input 
                type='file' 
                accept='image/'
                ></input>
              </div>
            </button>
          </div>

          <div className={styles.form}>
          </div>
      </Container>
  );
}