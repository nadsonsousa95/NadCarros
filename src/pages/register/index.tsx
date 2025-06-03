
import NadCarros from '../../assets/logo/NadCarros.png';
import './../login/style.css'
import { Container } from '../../components/container';
import { Link } from 'react-router-dom'
import { Input } from '../../components/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Validação de formulário
const schema = z.object({
  name: z.string().nonempty('O campo nome é obrigatório'),
  email: z.string().email('Insira um email válido').nonempty('O campo email é obrigatório'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres').nonempty('O campo senha é obrigatório')
})

// O formData segue o padrão do schema
type formData = z.infer<typeof schema>

export function Register() {
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
            type='text'
            placeholder='Digite seu nome completo'
            name='name'
            error = {errors.name?.message}
            register = {register}
            />
          </div>
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
            placeholder='Digite a sua nova senha'
            name='password'
            error = {errors.password?.message}
            register = {register}
            />
          </div>

         

          <button type='submit'>Acessar</button>
        </form>

        <Link to='/login' >
          <p>Já possui conta? <strong>Faça login!</strong></p>
        </Link>
      </div>
    </Container>

  );
}


