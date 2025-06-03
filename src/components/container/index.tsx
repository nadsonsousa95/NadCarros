
import type { ReactNode } from 'react'
import './style.css'

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps ) {
  return (
    <div className="container">
      {children}
      </div>
  );
}