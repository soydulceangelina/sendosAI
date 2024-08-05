import { user } from "../utils/userDB";

const auth = (setError: (string: string) => void, data: FormData, login) => {
  const { email, password } = data;

  if (email !== user.email || password !== user.password) {
    setError("El correo electrónico o la contraseña no son correctos");
  } else {
    login(data);
  }
};

export { auth };
