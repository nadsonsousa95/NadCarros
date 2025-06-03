
import './style.css'
import type {RegisterOptions, UseFormRegister} from 'react-hook-form';

interface InputProps{
    type: string;
    placeholder: string;
    name: string;
    error?: string;
    register: UseFormRegister<any>;
    rules?: RegisterOptions
}

export function Input({type, placeholder, name, error, register, rules}: InputProps) {
  return (
    <div>
      <input 
        placeholder= {placeholder}
        type={type}
        {...register(name, rules)}
        id={name}
        >
      </input>
      {error && <p>{error}</p>}
    </div>
  );
}
