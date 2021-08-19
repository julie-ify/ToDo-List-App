import {populateList, populateTask} from './index.js';
import {saveStorage, getStorage} from './storage.js';

export const trashCompleted = () => {
  const storedTasks = getStorage();

  const uncompletedTask = storedTasks.filter(
    (task) => task.completed === false
  );
  saveStorage(uncompletedTask);
  populateList()
};
