const auth = (
  user: { email: string; password: string },
  setError: (string: string) => void,
  data: FormData
) => {
  const { email, password } = data;
  if (email !== user.email || password !== user.password) {
    setError("El correo electrónico o la contraseña no son correctos");
  } else {
    console.log("Login correcto");
    console.log(data);
  }
};

export { auth };
