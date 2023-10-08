import {Button} from "@mui/material";
import {uesAuthContext} from "../../context/AuthContext";
import CustomLink from "../../components/ui/CustomLink";
import Navbar from "../../components/Navbar";

const Home = () => {
  const {logOutUser, user} = uesAuthContext();
  const handleLogout = () => {
    logOutUser()
      .then()
      .catch((error) => alert(error.message));
  };
  return (
    <>
      <Navbar />
      <h1>Home</h1>
      {user ? (
        <Button variant="contained" onClick={handleLogout}>
          Logout
        </Button>
      ) : (
        <CustomLink text="Sign In" path="/signin" />
      )}
    </>
  );
};

export default Home;
