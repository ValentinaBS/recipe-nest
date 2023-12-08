import { ReactNode, createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { User, LoginInputs, AuthContextType } from '../types/auth';

const initialContextValue: AuthContextType = {
  currentUser: null,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
  updateCurrentUser: () => {},
  toastMessage: '',
  setToastMessage: () => {}
};

export const AuthContext  = createContext(initialContextValue);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {

  const storedUser = localStorage.getItem("user");
  const [currentUser, setCurrentUser] = useState<User | null>(
    typeof storedUser === "string" ? JSON.parse(storedUser) : null
  );
  const [toastMessage, setToastMessage] = useState('');

  const login = async (inputs: LoginInputs) => {
    console.log(inputs)
    try {
      const res = await axios.post("http://localhost:3000/api/user/login", inputs);

      setCurrentUser(res.data);
      setToastMessage('You have been logged in successfully!');
  } catch (error) {
      console.error('Error during login:', error);
      setToastMessage('Could not log you in. Check your information and try again!');
  }
  };

  const register = async (values: any) => {
    try {
      const res = await axios.post("http://localhost:3000/api/user/register", values);

      if(res) {
        const { email, password } = values;
        login({email, password})
      }
  } catch (error) {
      console.error('Error during login:', error);
      setToastMessage('Could not register you correctly. Check your information and try again!');
  }
  };

  const logout = async () => {
    await axios.post("http://localhost:3000/api/user/logout");
    setCurrentUser(null);
    setToastMessage('You have been logged out successfully!');
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
    updateCurrentUser,
    toastMessage,
    setToastMessage
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}