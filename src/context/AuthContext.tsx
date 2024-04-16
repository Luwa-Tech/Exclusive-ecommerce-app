import { ReactElement, ReactNode, createContext, useState } from "react"

export type ChildrenType = {
    children: ReactElement | ReactElement[] | ReactNode
}

type AuthType = {
    id: string,
    name: string,
    email: string
}

type AuthContextType = {
    auth: null | AuthType,
    setAuth: React.Dispatch<React.SetStateAction<null | AuthType>>
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }: ChildrenType) => {
    const [auth, setAuth] = useState<null | AuthType>(null);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
