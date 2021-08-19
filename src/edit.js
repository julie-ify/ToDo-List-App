import { populateList } from "./index";
import { saveStorage, getStorage } from "./storage.js";

export const editTask = (label, tasks, task) => {
  const taskIndex = task.taskIndex;
  const taskToEdit = tasks[taskIndex - 1];

  taskToEdit.description = label.textContent;
  saveStorage(tasks);
  populateList();
}