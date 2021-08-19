import { populateList } from "./index";
import { saveStorage, getStorage } from "./storage.js";

export const editTask = (text, tasks, task) => {
  const taskIndex = task.index;
  const taskToEdit = tasks[taskIndex - 1];

  taskToEdit.description = text.textContent;
  saveStorage(tasks);
  populateList();
}