import {
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import {logo} from "../../assets/images";
import Image from "../../components/ui/image";
import {useState} from "react";
import CustomLink from "../../components/ui/CustomLink";
import {useForm} from "react-hook-form";
import {uesAuthContext} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";

const SignIn = () => {
  const [isShowPass, setIsShowPass] = useState(false);

  const {logInUserWithGoogle, logInUser} = uesAuthContext();
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const {email, password} = data;

    // login using email and password
    logInUser(email, password)
      .then(() => {
        setError("");
        reset();
        navigate(from, {replace: true});
      })
      .catch((error) => setError(error.message));
  };

  //  google authentication handle
  const handleLoginWithGoogle = () => {
    logInUserWithGoogle()
      .then(() => {
        setError("");
        navigate("/");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <Box bgcolor="primary.light" sx={{height: "100vh"}}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}>
        <Box
          sx={{
            minWidth: 300,
            width: 500,
            boxShadow: 2,
            px: 3,
            py: 4,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "2rem",
            backgroundColor: "white",
          }}
          maxWidth={"sm"}>
          <Image src={logo} alt="Logo" maxWidth="150px" />
          <Typography variant="h3">Sign In</Typography>
          <Box>
            <Button variant="outlined" onClick={handleLoginWithGoogle}>
              <GoogleIcon sx={{mr: 2}} />{" "}
              <Typography>Continue With Google</Typography>
            </Button>
          </Box>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              alignItems: "center",
              width: "100%",
            }}>
            <TextField
              type="email"
              label="Your account email"
              variant="outlined"
              size="small"
              fullWidth={true}
              {...register("email", {required: "Email Address is required"})}
            />
            {errors.email && (
              <Typography
                color="red"
                sx={{
                  textAlign: "left",
                  width: "100%",
                }}>
                {errors.email.message}
              </Typography>
            )}

            <Box sx={{width: "100%", position: "relative"}}>
              <TextField
                type={isShowPass ? "text" : "password"}
                label="Your account password"
                variant="outlined"
                size="small"
                fullWidth={true}
                {...register("password", {
                  required: "Password is required",
                })}
              />
              <IconButton
                onClick={() => setIsShowPass(!isShowPass)}
                sx={{position: "absolute", right: "1rem"}}>
                {isShowPass ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
              </IconButton>
              {errors.password && (
                <Typography
                  color="red"
                  sx={{
                    textAlign: "left",
                    width: "100%",
                  }}>
                  {errors.password.message}
                </Typography>
              )}
              {error && (
                <Typography
                  color="red"
                  sx={{
                    textAlign: "left",
                    width: "100%",
                  }}>
                  {error}
                </Typography>
              )}
            </Box>
            <Typography>
              Have not an Account?{" "}
              <CustomLink text="Sign Up Here" path="/signup" />
            </Typography>
            <Button type="submit" variant="contained" sx={{width: "200px"}}>
              Sign In
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default SignIn;
