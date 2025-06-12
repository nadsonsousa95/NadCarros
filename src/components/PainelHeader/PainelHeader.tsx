
import { Link } from "react-router-dom";
import { auth } from "../../services/firebaseConnection";
import { signOut } from "firebase/auth";
import styles from './PainelHeader.module.css'

export function PainelHeader() {

    async function handleLogout(){
        await signOut(auth);
    }

  return (
    <div className={styles.header}>
        <div className={styles.links}>
            <Link to={'/dashboard'} className={styles.link}>
                Dashboard
            </Link>
            <Link to={'/dashboard/new'} className={styles.link}>
                Cadastrar novo carro
            </Link>
        </div>


        <button className={styles.button} onClick={handleLogout}>
            Sair da conta
        </button>
    </div>
  );
}