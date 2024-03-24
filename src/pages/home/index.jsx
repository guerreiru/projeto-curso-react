import { FunnelSimple } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Avatar } from "../../components/avatar";
import { BottomMenu } from "../../components/bottomMenu";
import { NewTaskModal } from "../../components/newTaskModal";
import { Text } from "../../components/text";
import { Dropdown } from "./dropdown";
import { NoData } from "./noData";
import { Container, Content, Header } from "./style";
import { TaskList } from "./taskList";
import {
  loadTasksFromLocalStorage,
  saveTasksToLocalStorage,
} from "../../utils";
import { Link } from "react-router-dom";

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState(loadTasksFromLocalStorage());
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState({
    label: "todas",
    value: "all",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  const addTask = (newTask) => {
    if (newTask.name.trim() === "") {
      alert("A tarefa está vázia!");
      return;
    }

    if (
      tasks.some(
        (task) =>
          task.name.trim().toLowerCase() === newTask.name.trim().toLowerCase()
      )
    ) {
      alert("Essa tarefa já existe!");
      return;
    }

    setTasks([
      ...tasks,
      {
        ...newTask,
        name: newTask.name.trim(),
      },
    ]);
    setIsModalOpen(false);

    return "success";
  };

  const handleFilterChange = (option) => {
    setFilterOption(option);
    setDropdownOpen(false);
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

  const handleRemoveTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter((task) => {
    const nameMatches = task.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const isCompleted = task.completed;

    return (
      (filterOption.value === "all" ||
        (filterOption.value === "completed" && isCompleted) ||
        (filterOption.value === "not_completed" && !isCompleted)) &&
      nameMatches
    );
  });

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  return (
    <Container className="container-full">
      <Header>
        <nav>
          <FunnelSimple
            size={20}
            weight="bold"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          <Text>Home</Text>

          <Link to="/profile">
            <Avatar url="https://github.com/guerreiru.png" />
          </Link>

          {dropdownOpen && <Dropdown onClick={handleFilterChange} />}
        </nav>
      </Header>

      <Content>
        {tasks.length > 0 && (
          <>
            <Text fontSize="12px">Mostrando {filterOption.label}</Text>
            <TaskList
              handleCompleteTask={handleCompleteTask}
              handleRemoveTask={handleRemoveTask}
              setSearch={setSearchTerm}
              tasks={filteredTasks}
            />
          </>
        )}

        {!tasks.length && <NoData />}
      </Content>

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
