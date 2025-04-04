import { ReactNode } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

interface ProvidersProps {
  children: ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return (
    <GoogleOAuthProvider clientId="<your_client_id>">
      {children}
    </GoogleOAuthProvider>
  );
}

export default Providers;
