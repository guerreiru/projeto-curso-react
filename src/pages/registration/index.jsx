import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../components/backButton";
import { Button } from "../../components/button";
import { Heading } from "../../components/heading";
import { Input } from "../../components/input";
import { Container } from "./style";

export function Registration() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const disabled = username.length && password.length;

  function handleLogin(event) {
    event.preventDefault();
    navigate("/home");
  }

  return (
    <Container className="container">
      <BackButton />

      <Heading>Cadastro</Heading>
      <form onSubmit={handleLogin}>
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
        <Input
          placeholder="••••••••"
          label="Confirme sua senha"
          id="confirm-password"
          type="password"
          fullWidth={true}
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button disabled={!disabled} type="submit">
          Login
        </Button>
      </form>
    </Container>
  );
}
