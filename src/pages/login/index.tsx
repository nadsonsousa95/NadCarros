import { useEffect } from 'react'
import NadCarros from '../../assets/logo/NadCarros.png';
import './style.css';
import { Container } from '../../components/Container/Container';
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../../components/Input/Input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { auth } from '../../services/firebaseConnection'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Validação de formulário
const schema = z.object({
  email: z.string().email('Insira um email válido').nonempty('O campo email é obrigatório'),
  password: z.string().nonempty('O campo senha é obrigatório')
})

// O formData segue o padrão do schema
type formData = z.infer<typeof schema>

export function Login() {
  const navigate = useNavigate();
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

  function onSubmit(data: formData){
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then((user)=> {
      console.log('Usuário logado com sucesso!')
      console.log(user);

      navigate("/", {replace: true})

    })
    .catch((error)=>{
      console.log(error);
      console.log('Erro ao logar!')
    })
    }

  return (
    <Container>
      <div className='main'>

        <Link to='/'>
          <img src={NadCarros} />
        </Link>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='input'>
            <Input 
            type='email'
            placeholder='Digite seu email'
            name='email'
            error = {errors.email?.message}
            register = {register}
            />
          </div>
         <div className='input'> 
            <Input 
            type='password'
            placeholder='Digite sua senha'
            name='password'
            error = {errors.password?.message}
            register = {register}
            />
          </div>

          <button type='submit'>Acessar</button>
        </form>

        <Link to='/register' >
         <p>Não possui conta? <strong>Cadastre-se agora!</strong></p>
        </Link>
       
      </div>
    </Container>

  );
}


