import {Button} from "@mui/material";
import {uesAuthContext} from "../../context/AuthContext";
import CustomLink from "../../components/ui/CustomLink";

const Home = () => {
  const {logOutUser, user} = uesAuthContext();
  const handleLogout = () => {
    logOutUser()
      .then()
      .catch((error) => alert(error.message));
  };
  return (
    <div>
      <h1>Home</h1>
      {user ? (
        <Button variant="contained" onClick={handleLogout}>
          Logout
        </Button>
      ) : (
        <CustomLink text="Sign In" path="/signin" />
      )}
    </div>
  );
};

export default Home;
