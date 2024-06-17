import { createContext, useState } from "react";

interface ICurrentUser {
  id: string;
  name: string;
  username: string;
  role: string;
  email: string;
  token: string;
}

type AuthContextType = {
  currentUser: ICurrentUser | null;
  setCurrentUser: (user: ICurrentUser) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<ICurrentUser | null>(null);
  return <AuthContext.Provider value={{ currentUser, setCurrentUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
