import { useAuth0 } from '@auth0/auth0-react';

const SignupButton = () => {
    const { loginWithRedirect } = useAuth0();

    const handleSignUp = async () => {
        await loginWithRedirect({
          authorizationParams: {
            prompt: "login",
            screen_hint: "signup",
          },
        });
      };
    
      return (
        <button className="bg-transparent border-0 nav-link" onClick={handleSignUp}>
          Sign Up
        </button>
      );
}

export default SignupButton;