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

const SignUp = () => {
  const [isShowPass, setIsShowPass] = useState(false);
  return (
    <Box bgcolor="primary.light">
      <Container
        maxWidth="lg"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
            <Button variant="outlined">
              <GoogleIcon sx={{mr: 2}} />
              <Typography>Continue With Google</Typography>
            </Button>
          </Box>
          <form
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
            />

            <TextField
              type="email"
              label="Your account email"
              variant="outlined"
              size="small"
              fullWidth={true}
            />

            <Box sx={{width: "100%", position: "relative"}}>
              <TextField
                type={isShowPass ? "text" : "password"}
                label="Password"
                variant="outlined"
                size="small"
                fullWidth={true}
              />
              <IconButton
                onClick={() => setIsShowPass(!isShowPass)}
                sx={{position: "absolute", right: "1rem"}}>
                {isShowPass ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </Box>

            <Box sx={{width: "100%", position: "relative"}}>
              <TextField
                type={isShowPass ? "text" : "password"}
                label="Confirm Password"
                variant="outlined"
                size="small"
                fullWidth={true}
              />

              <IconButton
                onClick={() => setIsShowPass(!isShowPass)}
                sx={{position: "absolute", right: "1rem"}}>
                {isShowPass ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </Box>

            <TextField
              type="text"
              label="Photo URL"
              variant="outlined"
              size="small"
              fullWidth={true}
            />
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
