import { createContext } from "react";

// Crear contexto
const AuthContext = createContext()

// Crear proveedor de contexto

function AuthProvider({ children }) {

    const data = {

    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )

}

export { AuthContext, AuthProvider }