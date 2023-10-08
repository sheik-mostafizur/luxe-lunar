import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "@firebase/auth";
import {createContext, useContext, useEffect, useState} from "react";
import {auth, googleProvider} from "../firebase/firebase.config";
import {logo} from "../assets/images";
import Spinner from "../components/spinner";
import {Box} from "@mui/material";

const UserContext = createContext({});

// eslint-disable-next-line react-hooks/rules-of-hooks
export const uesAuthContext = () => useContext(UserContext);

const AuthContext = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const logInUserWithGoogle = async () =>
    await signInWithPopup(auth, googleProvider);

  const logOutUser = async () => await signOut(auth);

  // always check user is logged in or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      res ? setUser(res) : setUser(null);
      // if user is logged in successfully the loading stopped
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const userInfo = {
    loading,
    user,
    createUser,
    logInUser,
    logInUserWithGoogle,
    logOutUser,
  };

  return (
    <UserContext.Provider value={userInfo}>
      {loading ? (
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}>
          <img className="w-48" src={logo} alt="Logo" />
          <Spinner />
        </Box>
      ) : (
        children
      )}
    </UserContext.Provider>
  );
};

export default AuthContext;
