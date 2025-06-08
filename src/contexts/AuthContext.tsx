import { useEffect, useState, createContext} from 'react';
import type { ReactNode } from 'react';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../services/firebaseConnection';

interface IAuthProviderProps{
    children: ReactNode
}

interface IuserProps{
    uid: string,
    name: string | null,
    email: string | null
}


type AuthContextData = {
    signed: boolean,
    loadingAuth: boolean
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({children}: IAuthProviderProps){
    const [user, setUser] = useState<IuserProps | null>(null); //signed: false
    const [loadingAuth, setLoadingAuth] = useState(true)

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (user)=>{
            if(user){
                //tem usuario logado
                setUser({
                    uid: user.uid,
                    name: user?.displayName,
                    email : user?.email
                })
                setLoadingAuth(false)
                console.log('AuthContext - Usuário logado:');
            }
            else{
                //nao tem usuario logado
                setUser(null)
                setLoadingAuth(false)
                console.log('AuthContext - Nenhum usuário logado');
            }
        })
        return()=>{
            unsub();
        }

    }, [])


    return(
        <AuthContext.Provider 
        value={{ 
            signed : !!user,
            loadingAuth
        }}
        >
           {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;