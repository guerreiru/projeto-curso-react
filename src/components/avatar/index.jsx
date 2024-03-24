import PropTypes from "prop-types";
import { Container } from "./styles";

export function Avatar({ url, size }) {
  const _url =
    url ||
    "https://icon-library.com/images/javascript-icon/javascript-icon-17.jpg";

  return (
    <Container $size={size}>
      <img src={_url} />
    </Container>
  );
}

Avatar.propTypes = {
  url: PropTypes.string,
  size: PropTypes.string,
};
