import { useState, createContext, useContext, useEffect } from 'react';
import { firebaseConfig } from '@/lib/config';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });



const AuthContext = createContext<Partial<AuthContextProps>>({});


type AuthContextProps = {
   isAuthenticated: boolean;
   user: any;
   signIn: () => void;
   signOut: () => void;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
   
   const [user, setUser] = useState<any>(null);
   
   useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      setUser(user);
    });
  }, []);


   const signIn = () => auth.signInWithPopup(provider);
   const signOut = () => auth.signOut();

   
   return (
      <AuthContext.Provider
         value={{
            isAuthenticated: user == null ? false : true,
            user: user,
            signIn: signIn,
            signOut: signOut
         }}
      >
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
