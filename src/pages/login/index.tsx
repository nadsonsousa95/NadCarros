
import NadCarros from '../../assets/logo/NadCarros.png';
import './style.css'
import { Container } from '../../components/container';
import { Link } from 'react-router-dom'
import { Input } from '../../components/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Validação de formulário
const schema = z.object({
  email: z.string().email('Insira um email válido').nonempty('O campo email é obrigatório'),
  password: z.string().nonempty('O campo senha é obrigatório')
})

// O formData segue o padrão do schema
type formData = z.infer<typeof schema>

export function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<formData>({
  resolver: zodResolver(schema),
  mode: 'onChange'
})

  function onSubmit(data: formData){
    console.log(data)
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


