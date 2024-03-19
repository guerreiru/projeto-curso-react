import { FunnelSimple } from "@phosphor-icons/react";
import { useState } from "react";
import ChecklistImg from "../../assets/checklist.svg";
import { Avatar } from "../../components/avatar";
import { BottomMenu } from "../../components/bottomMenu";
import { NewTaskModal } from "../../components/newTaskModal";
import { Text } from "../../components/text";
import { Container, Header } from "./style";

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para abrir o modal
  function openModal() {
    setIsModalOpen(true);
  }

  // Função para fechar o modal
  function closeModal() {
    setIsModalOpen(false);
  }

  // Função para lidar com o envio do formulário dentro do modal
  function handleAddTask(taskName) {
    // Aqui você pode adicionar a lógica para adicionar a nova tarefa
    console.log("Nova tarefa:", taskName);
  }

  return (
    <Container className="container-full">
      <Header>
        <nav>
          <FunnelSimple size={20} weight="bold" /> Home <Avatar />
        </nav>
      </Header>

      <div className="content">
        <div className="img-wrapper">
          <img src={ChecklistImg} />
        </div>

        <div className="tasks-list">
          <Text>O que você quer fazer hoje?</Text>
          <Text>Toque em + para adicionar suas tarefas</Text>
        </div>
      </div>

      <footer>
        <BottomMenu onClickNewTask={openModal} />
      </footer>

      <NewTaskModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAddTask={handleAddTask}
      />
    </Container>
  );
}
