import {useContext} from 'react'
import {AuthContext} from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { FaUserCircle } from "react-icons/fa";
import NadCarros from '../../assets/logo/NadCarros.png';

export function Header() {
  const {signed, loadingAuth} = useContext(AuthContext)

  return (
    <div className='w-full flex items-center bg-white h-16 drop-shadow justify-center'>
      <header className='flex w-full items-center justify-between max-w-300 px-4 mx-auto'>
        <Link to={'/'}>
          <img className='w-40' src={NadCarros}></img>
        </Link>


        {!loadingAuth && signed && (
          <Link to={'/dashboard'}>
            <FaUserCircle size={30} color='black'>
            </FaUserCircle>
          </Link>
        )}

        {!loadingAuth && !signed && (
          <Link to={'/login'}>
            <button className={styles.buttonlogin}>Entrar</button>
          </Link>
        )}
        

      </header>
      
      
    </div>
  );
}


