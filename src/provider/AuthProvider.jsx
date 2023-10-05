import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser } from "firebase/auth";
import PropTypes from 'prop-types';
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
 const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
   
    const [user, setUser] = useState(null);
    const [loading,setLoading]=useState(true)


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const singInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    const signInWithGoogle =()=>{
        setLoading(true);
return signInWithPopup(auth,googleProvider)
    }
    // observe auth state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current value of the current user', currentUser);
            setUser(currentUser)
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])
    const authInfo = {
        user,
        signInWithGoogle ,
        loading,
        logOut,
        createUser,
        singInUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );

};


export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}




