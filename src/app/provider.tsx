'use client'
import { GoogleOAuthProvider } from '@react-oauth/google';

function providers({children}) {
  return (
    <div>
      <GoogleOAuthProvider clientId="<your_client_id>">
        {children}
        </GoogleOAuthProvider>;
       
    </div>
  )
}

export default providers