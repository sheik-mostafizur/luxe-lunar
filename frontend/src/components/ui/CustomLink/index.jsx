import {Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const CustomLink = ({text, path, color}) => {
  const navigate = useNavigate();
  return (
    <Typography
      variant="span"
      color={color || "primary"}
      onClick={() => navigate(path)}
      sx={{
        textDecoration: "underline",
        cursor: "pointer",
      }}>
      {text}
    </Typography>
  );
};

export default CustomLink;
