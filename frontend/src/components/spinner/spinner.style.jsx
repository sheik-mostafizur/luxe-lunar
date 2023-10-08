import {styled} from "@mui/material";

export const SpinnerOverlay = styled("div")`
  box-shadow: 0 10rem white;
  background-color: #fff;
`;

export const SpinnerContainer = styled("div")`
  display: inline-block;
  width: 60px;
  height: 60px;
  border: 8px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #c99c31;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 0.9s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
