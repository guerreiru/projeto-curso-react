import PropTypes from "prop-types";
import { Container } from "./styles";

export function Avatar({ url }) {
  const _url =
    url ||
    "https://icon-library.com/images/javascript-icon/javascript-icon-17.jpg";

  return (
    <Container>
      <img src={_url} />
    </Container>
  );
}

Avatar.propTypes = {
  url: PropTypes.string,
};
