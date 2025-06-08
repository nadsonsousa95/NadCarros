import type { ReactNode } from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

interface IPrivateProps {
  children: ReactNode;
}

export function Private({ children }: IPrivateProps) {
  const { signed, loadingAuth } = useContext(AuthContext);

  if (loadingAuth) {
    return <div>Carregando...</div>;
  }

  if (!signed) {
    console.log('Private.tsx - Redirecionando para /login...');
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
