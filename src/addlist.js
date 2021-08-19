/* eslint-disable import/no-cycle */

import { saveStorage } from './storage.js';
import populateList from './index.js';

const addNewTask = (input) => {
  const taskList = localStorage.getItem('todo-list')
    ? JSON.parse(localStorage.getItem('todo-list'))
    : [];
  const task = {
    index: taskList.length + 1,
    completed: false,
    description: input.value,
  };

  if (input.value === '') {
    return;
  }
  taskList.push(task);
  saveStorage(taskList);

  input.value = '';

  populateList();
};

export default addNewTask;
