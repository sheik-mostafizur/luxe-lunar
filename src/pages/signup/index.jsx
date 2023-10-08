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
import {updateProfile} from "firebase/auth";
import {auth} from "../../firebase/firebase.config";

const SignUp = () => {
  const {logInUserWithGoogle, createUser} = uesAuthContext();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [isShowPass, setIsShowPass] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
    reset,
  } = useForm();
  const password = watch("password");

  const onSubmit = (data) => {
    const {name, email, password, photoURL} = data;

    createUser(email, password)
      .then(() => {
        // update user name and photoURL
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL,
        })
          .then(() => {
            // Profile updated!
            // ...
            setError("");
            navigate("/");
            reset();
          })
          .catch((error) => setError(error.message));
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
          <Typography variant="h3">Sign Up</Typography>
          <Box>
            <Button variant="outlined" onClick={handleLoginWithGoogle}>
              <GoogleIcon sx={{mr: 2}} />
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
              type="text"
              label="Name"
              variant="outlined"
              size="small"
              fullWidth={true}
              {...register("name", {required: "Name is required"})}
            />
            {errors.name && (
              <Typography
                color="red"
                sx={{
                  textAlign: "left",
                  width: "100%",
                }}>
                {errors.name.message}
              </Typography>
            )}

            <TextField
              type="email"
              label="Your account email"
              variant="outlined"
              size="small"
              fullWidth={true}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Invalid email address",
                },
              })}
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
                label="Password"
                variant="outlined"
                size="small"
                fullWidth={true}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
                    message:
                      "Password must contain at least one letter and one number and special characters",
                  },
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
            </Box>

            <Box sx={{width: "100%", position: "relative"}}>
              <TextField
                type={isShowPass ? "text" : "password"}
                label="Confirm Password"
                variant="outlined"
                size="small"
                fullWidth={true}
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match!",
                })}
              />
              <IconButton
                onClick={() => setIsShowPass(!isShowPass)}
                sx={{position: "absolute", right: "1rem"}}>
                {isShowPass ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
              </IconButton>

              {errors.confirmPassword && (
                <Typography
                  color="red"
                  sx={{
                    textAlign: "left",
                    width: "100%",
                  }}>
                  {errors.confirmPassword.message}
                </Typography>
              )}
            </Box>

            <TextField
              type="text"
              label="Photo URL"
              variant="outlined"
              size="small"
              fullWidth={true}
              {...register("photoURL", {
                required: "Photo URL is required",
                pattern: {
                  value: /^(ftp|http|https):\/\/[^ "]+$/,
                  message: "Invalid photo URL format",
                },
              })}
            />
            {errors.photoURL && (
              <Typography
                color="red"
                sx={{
                  textAlign: "left",
                  width: "100%",
                }}>
                {errors.photoURL.message}
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
            <Typography>
              Already Have an Account?{" "}
              <CustomLink text="Log In Here" path="/signin" />
            </Typography>
            <Button type="submit" variant="contained" sx={{width: "200px"}}>
              Sign Up
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default SignUp;
