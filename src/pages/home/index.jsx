import { FunnelSimple } from "@phosphor-icons/react";
import { useState } from "react";
import ChecklistImg from "../../assets/checklist.svg";
import { Avatar } from "../../components/avatar";
import { BottomMenu } from "../../components/bottomMenu";
import { NewTaskModal } from "../../components/newTaskModal";
import { Text } from "../../components/text";
import { Container, Header, NoData } from "./style";
import { Task } from "../../components/task";

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Função para abrir o modal
  function openModal() {
    setIsModalOpen(true);
  }

  // Função para fechar o modal
  function closeModal() {
    setIsModalOpen(false);
  }

  const addTask = (newTask) => {
    if (newTask.name.trim() === "") {
      alert("A tarefa está vázia!");
      return;
    }

    // Verifica se o nome da nova tarefa já existe na lista de tarefas
    if (
      tasks.some(
        (task) => task.name.toLowerCase() === newTask.name.toLowerCase()
      )
    ) {
      alert("Essa tarefa já existe!");
      return;
    }

    setTasks([...tasks, newTask]);
    setIsModalOpen(false);
    return "success";
  };

  const handleCompleteTask = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  return (
    <Container className="container-full">
      <Header>
        <nav>
          <FunnelSimple size={20} weight="bold" /> Home <Avatar />
        </nav>
      </Header>

      <div className="content">
        {tasks.length > 0 && (
          <>
            {tasks.map((task) => (
              <div key={task.id} className="tasks-list">
                <Task task={task} onComplete={handleCompleteTask} />
              </div>
            ))}
          </>
        )}

        {!tasks.length && (
          <NoData>
            <div className="img-wrapper">
              <img src={ChecklistImg} />
            </div>

            <div>
              <Text>O que você quer fazer hoje?</Text>
              <Text>Toque em + para adicionar suas tarefas</Text>
            </div>
          </NoData>
        )}
      </div>

      <footer>
        <BottomMenu onClickNewTask={openModal} />
      </footer>

      <NewTaskModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAddTask={addTask}
      />
    </Container>
  );
}
