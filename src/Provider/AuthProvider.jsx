import { createContext, useEffect, useState } from "react";
import app from "../firebase/config.firebase";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";



export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // create method in hear....
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login user
    const logInUser = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }
    //update user
    const updateUser = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {displayName, photoURL})
    }

    // logout the user
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (createUser) => {
            setUser(createUser)
            setLoading(false);
        })
        return () => {
            return unSubscribe;
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        logInUser,
        logOut,
        updateUser,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;