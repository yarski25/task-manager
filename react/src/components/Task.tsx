import { ITask } from "../interfaces/ITask";
import { FaTimes } from "react-icons/fa";

interface IProps {
  task: ITask;
  onDelete: (id?: number) => void;
  onToggle: (id?: number) => void;
}

const Task = ({ task, onDelete, onToggle }: IProps) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => {
            onDelete(task.id);
          }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
