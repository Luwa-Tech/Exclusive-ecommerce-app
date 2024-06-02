import { useAuth0 } from "@auth0/auth0-react";

const LoginButton= () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      authorizationParams: {
        prompt: "login",
      },
    });
  };

  return (
    <button className="bg-secondary-700 text-textColor-400 px-[.8rem] py-[.5rem] rounded-[.2rem] uppercase md:hover:opacity-[0.6]" onClick={handleLogin}>
      Login in
    </button>
  );
};

export default LoginButton;