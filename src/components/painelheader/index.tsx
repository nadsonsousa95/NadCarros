
import { Link } from "react-router-dom";
import { auth } from "../../services/firebaseConnection";
import { signOut } from "firebase/auth";
import './style.css'

export function PainelHeader() {

    async function handleLogout(){
        await signOut(auth);
    }

  return (
    <div className="header">
        <div className="links">
            <Link to={'/dashboard'} className="link">
                Dashboard
            </Link>
            <Link to={'/dashboard/new'} className="link">
                Cadastrar novo carro
            </Link>
        </div>


        <button onClick={handleLogout}>
            Sair da conta
        </button>
    </div>
  );
}