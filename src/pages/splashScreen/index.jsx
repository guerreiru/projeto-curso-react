import Logo from "../../assets/logo.svg";
import { Heading } from "../../components/heading";
import { Container, Content, LogoWrapper } from "./style";

export function SplashScreen() {
  return (
    <Container>
      <Content>
        <LogoWrapper>
          <img src={Logo} />
        </LogoWrapper>
        <Heading tag="h1" fontSize="40px">
          Minha Lista
        </Heading>
      </Content>
    </Container>
  );
}
