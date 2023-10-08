import {Box, Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export default function Error() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "primary.light",
      }}>
      <Typography variant="h1" style={{color: "white"}}>
        404
      </Typography>
      <Typography variant="h6" style={{color: "white"}}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Link to="/">
        <Button variant="contained">Back Home</Button>
      </Link>
    </Box>
  );
}
