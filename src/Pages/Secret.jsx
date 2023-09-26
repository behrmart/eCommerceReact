import { useAuthContext } from "../Hooks/useAuthContext"

export const Secret = () => {

  const { userPayload } = useAuthContext()

  return (
    <>
      <h1>Secret</h1>
      {
        userPayload?.role === 'ADMIN'  //"Optional chaining" No pinta nada si no existe
          ? <h2>Hola ADMIN</h2>
          : <h2>Hola CUSTOMER</h2>
      }
      {userPayload?.role === 'ADMIN' && <h2>Hola Admin</h2>}
      {userPayload?.role === 'CUSTOMER' && <h2>Saludos Customer</h2>}
    </>
  )
}
