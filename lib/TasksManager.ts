import Task from "./Task";
import { TaskNotFoundError } from "./errors";

class TasksManager {
  #tasks: Array<Task>;

  #_isTitleUnique(title: string) {
    this.#tasks.forEach((task: Task) => {
      if (title == task.title) {
        return false;
      }
    });

    return true;
  }

  getTask(id: number): Task {
    const task: Task | undefined = this.#tasks.find((item: Task) => {
      return id === item.id;
    });

    if (!task) {
      throw new TaskNotFoundError("Task not found");
    }

    return task;
  }

  addTask(task: Task) {
    task.asignId(this.#tasks.length);

    if (this.#_isTitleUnique(task.title)) {
      this.#tasks.push(task);
    }
  }

  deleteTask(id: number) {
    this.#tasks = this.#tasks.filter(function (item: Task) {
      return item.id != id;
    });
  }
}

export default TasksManager;
