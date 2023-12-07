import { ReactNode, createContext, useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  user_id: number;
  email: string;
  username: string;
  user_image: string;
  user_description: string;
}

interface LoginInputs {
  email: string;
  password: string;
}

interface AuthContextType {
  currentUser: User | null;
  updateCurrentUser: (user: User) => void; 
  login: (inputs: LoginInputs) => Promise<void>;
  register: (values: any)  => Promise<void>;
  logout: () => Promise<void>;
}

const initialContextValue: AuthContextType = {
  currentUser: null,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
  updateCurrentUser: () => {}
};

export const AuthContext  = createContext(initialContextValue);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {

  const storedUser = localStorage.getItem("user");
  const [currentUser, setCurrentUser] = useState<User | null>(
    typeof storedUser === "string" ? JSON.parse(storedUser) : null
  );

  const login = async (inputs: LoginInputs) => {
    console.log(inputs)
    try {
      const res = await axios.post("http://localhost:3000/api/user/login", inputs);

      setCurrentUser(res.data);
  } catch (error) {
      console.error('Error during login:', error);
  }
  };

  const register = async (values: any) => {
    try {
      const res = await axios.post("http://localhost:3000/api/user/register", values);
      
      setCurrentUser(res.data);
  } catch (error) {
      console.error('Error during login:', error);
  }
  };

  const logout = async () => {
    await axios.post("http://localhost:3000/api/user/logout");
    setCurrentUser(null);
  };

  const updateCurrentUser = (user: User) => {
    if (currentUser) {
      const updatedUser: User = {
        ...currentUser,
        username: user.username,
        user_image: user.user_image, 
        user_description: user.user_description,
      };
      setCurrentUser(updatedUser);
    }
  };

  useEffect(() => {
    if (currentUser !== null) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  const contextValue: AuthContextType = {
    currentUser,
    login,
    register,
    logout,
    updateCurrentUser
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}