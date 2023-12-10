export interface User {
    user_id: number;
    email: string;
    username: string;
    user_image: string;
    user_description: string;
}

export interface LoginInputs {
    email: string;
    password: string;
}

export interface AuthContextType {
    currentUser: User | null;
    updateCurrentUser: (user: User) => void;
    login: (inputs: LoginInputs) => Promise<void>;
    register: (values: any) => Promise<void>;
    logout: () => Promise<void>;
    toastMessage: string;
    setToastMessage: (message: string) => void;
}