/* eslint-disable import/no-cycle */

import populateList from './index.js';
import { saveStorage, getStorage } from './storage.js';

const trashCompleted = () => {
  const storedTasks = getStorage();

  const uncompletedTask = storedTasks.filter(
    (task) => task.completed === false,
  );
  saveStorage(uncompletedTask);
  populateList();
};

export default trashCompleted;