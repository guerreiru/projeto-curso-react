import { Avatar } from "../../components/avatar";
import { BottomMenu } from "../../components/bottomMenu";
import { Text } from "../../components/text";
import { loadTasksFromLocalStorage } from "../../utils";
import { Container, TasksInfo } from "./style";

export function Profile() {
  const tasks = loadTasksFromLocalStorage();

  // Conta o número de tarefas feitas
  const completedTasksCount = tasks.filter((task) => task.completed).length;
  // Conta o número de tarefas a completar
  const pendingTasksCount = tasks.filter((task) => !task.completed).length;

  return (
    <Container>
      <Text fontSize="20px">Profile</Text>
      <div className="imgWrapper">
        <Avatar url="https://github.com/guerreiru.png" size="85px" />
      </div>
      <Text fontSize="20px">User</Text>

      <TasksInfo>
        <div className="task">
          <Text>
            {completedTasksCount}{" "}
            {completedTasksCount < 2 ? "tarefa feita" : "tarefas feitas"}
          </Text>
        </div>

        <div className="task">
          <Text>
            {pendingTasksCount} {pendingTasksCount < 2 ? "tarefa" : "tarefas"}{" "}
            por fazer
          </Text>
        </div>
      </TasksInfo>

      <footer>
        <BottomMenu />
      </footer>
    </Container>
  );
}
