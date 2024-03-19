import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BackButton } from "../../components/backButton";
import { Button } from "../../components/button";
import { Heading } from "../../components/heading";
import { Input } from "../../components/input";
import { Text } from "../../components/text";
import { Container } from "./style";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const disabled = username.length && password.length;

  return (
    <Container className="container">
      <BackButton />
      <Heading>Login</Heading>
      <form>
        <Input
          placeholder="Nome"
          label="Digite seu usuário"
          id="username"
          fullWidth={true}
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <Input
          placeholder="••••••••"
          label="Digite sua senha"
          id="password"
          type="password"
          fullWidth={true}
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button disabled={!disabled} onClick={() => navigate("/home")}>
          Login
        </Button>
      </form>

      <footer>
        <Text>
          Não possui conta? <Link to="/registration">Cadastre-se</Link>
        </Text>
      </footer>
    </Container>
  );
}
