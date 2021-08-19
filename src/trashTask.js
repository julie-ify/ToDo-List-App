import {saveStorage, getStorage} from './storage';

const trashTask = (taskIndex) => {
  const storedTasks = getStorage();

  const currentTasks = storedTasks.filter((task) => {
    storedTasks.indexOf(task) !== taskIndex;
  });

  for (let i = 0; i < currentTasks.length; i += 1) {
    currentTasks[i].index = currentTasks.indexOf(currentTasks[i]) + 1;
  }

  saveStorage(currentTasks);

  window.location.reload();
};

export default trashTask;
