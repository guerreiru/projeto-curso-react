import { NoData as Container } from "./style";
import ChecklistImg from "../../assets/checklist.svg";
import { Text } from "../../components/text";

export function NoData() {
  return (
    <Container>
      <div className="img-wrapper">
        <img src={ChecklistImg} />
      </div>

      <Text>O que você quer fazer hoje?</Text>
      <Text>Toque em + para adicionar suas tarefas</Text>
    </Container>
  );
}
