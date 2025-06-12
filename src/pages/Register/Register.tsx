import { useEffect, useContext } from 'react'
import NadCarros from '../../assets/logo/NadCarros.png';
import styles from './../Login/Login.module.css'
import { Container } from '../../components/Container/Container';
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../../components/Input/Input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { AuthContext } from '../../contexts/AuthContext'
import { auth } from '../../services/firebaseConnection'
import { createUserWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth'

// Validação de formulário
const schema = z.object({
  name: z.string().nonempty('O campo nome é obrigatório'),
  email: z.string().email('Insira um email válido').nonempty('O campo email é obrigatório'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres').nonempty('O campo senha é obrigatório')
})

// O formData segue o padrão do schema
type formData = z.infer<typeof schema>

export function Register() {
  const {handleInfoUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<formData>({
  resolver: zodResolver(schema),
  mode: 'onChange'
})

  useEffect(()=>{
      async function handleLogout(){
        await signOut(auth)
      }
  
      handleLogout()
    }, [])

  async function onSubmit(data: formData){
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then( async ( user )=>{
      await updateProfile(user.user, {
        displayName: data.name
      })

      handleInfoUser({
        uid: user.user.uid,
        name: data.name,
        email: data.email
      })

      console.log('Usuário cadastrado com sucesso!');
      navigate("/dashboard", {replace: true})
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  return (
    <Container>
      <div className={styles.main}>

        <Link to='/'>
          <img src={NadCarros} />
        </Link>

        <form onSubmit={handleSubmit(onSubmit)}>
           <div className={styles.input}> 
            <Input 
            type='text'
            placeholder='Digite seu nome completo'
            name='name'
            error = {errors.name?.message}
            register = {register}
            />
          </div>
          <div className={styles.input}>
            <Input 
            type='email'
            placeholder='Digite seu email'
            name='email'
            error = {errors.email?.message}
            register = {register}
            />
          </div>
         <div className={styles.input}> 
            <Input 
            type='password'
            placeholder='Digite a sua nova senha'
            name='password'
            error = {errors.password?.message}
            register = {register}
            />
          </div>


          <button className={styles.buttondelogin} type='submit'>Cadastrar</button>
        </form>

        <Link to='/login' >
          <p>Já possui conta? <strong>Faça login!</strong></p>
        </Link>
      </div>
    </Container>

  );
}


