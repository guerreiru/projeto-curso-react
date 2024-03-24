import { MagnifyingGlass } from "@phosphor-icons/react";
import PropTypes from "prop-types";
import { Input } from "../../components/input";
import { Task } from "../../components/task";

export function TaskList({
  tasks,
  setSearch,
  handleCompleteTask,
  handleRemoveTask,
}) {
  return (
    <div className="tasks-list-wrapper">
      <Input
        placeholder="Buscar tarefa"
        id="searchTask"
        onChange={({ target }) => setSearch(target.value)}
        icon={<MagnifyingGlass size={20} />}
      />
      {tasks.map((task) => (
        <div key={task.id} className="tasks-list">
          <Task
            task={task}
            onComplete={handleCompleteTask}
            onDelete={handleRemoveTask}
          />
        </div>
      ))}
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  setSearch: PropTypes.func.isRequired,
  handleCompleteTask: PropTypes.func.isRequired,
  handleRemoveTask: PropTypes.func.isRequired,
};
