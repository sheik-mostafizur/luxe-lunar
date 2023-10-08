const Image = (props) => {
  const {
    src = "",
    alt = "",
    width = "100%",
    maxWidth = "100%",
    height = "100%",
  } = props;
  return <img src={src} alt={alt} style={{width, height, maxWidth}} />;
};

export default Image;
