import { PropsWithChildren, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Auth0Provider, AppState } from "@auth0/auth0-react";

interface Auth0ProviderWithHistoryProps {
  children: ReactNode;
}

const Auth0ProviderWithHistory = ({ children }:PropsWithChildren<Auth0ProviderWithHistoryProps>): JSX.Element | null => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  const navigate = useNavigate();

  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && audience)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        audience: audience,
        redirect_uri: window.location.origin,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;