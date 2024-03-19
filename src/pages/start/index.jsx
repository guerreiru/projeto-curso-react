import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../components/backButton";
import { Button } from "../../components/button";
import { Heading } from "../../components/heading";
import { Text } from "../../components/text";
import { Container, Footer, Header, SkipButtonWrapper } from "./style";

export function Start() {
  const navigate = useNavigate();

  return (
    <Container className="container">
      <SkipButtonWrapper>
        <BackButton />
      </SkipButtonWrapper>

      <Header>
        <Heading>Bem vindo ao Minha Lista</Heading>
        <Text>
          Faça login em sua conta ou crie uma nova conta para continuar
        </Text>
      </Header>

      <Footer>
        <Button onClick={() => navigate("/login")}>LOGIN</Button>

        <Button onClick={() => navigate("/registration")} variant="outline">
          CRIAR CONTA
        </Button>
      </Footer>
    </Container>
  );
}

Start.propTypes = {
  setStep: PropTypes.func,
  step: PropTypes.number,
};
