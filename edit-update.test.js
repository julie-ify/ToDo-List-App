import editTask from './src/edit.js';
import addNewTask from './src/addlist.js';
import trashCompleted from './src/completed.js';
import { getStorage, saveStorage } from './src/storage.js';

jest.mock('./src/storage.js');
jest.mock('./src/index.js');

const newTodoInput = document.createElement('input');
newTodoInput.type = 'text';
newTodoInput.value = 'read a book';

test('test the function editTask', () => {
  saveStorage([]);
  addNewTask(newTodoInput);
  const tasks = getStorage();
  const editInput = document.createElement('input');
  editInput.type = 'text';
  editInput.textContent = 'watch a movie';
  expect(editTask(editInput, tasks, tasks[0])).toEqual({
    description: 'watch a movie',
    completed: false,
    index: 1,
  });
});

test('test the function trashCompleted', () => {
  saveStorage([]);
  addNewTask(newTodoInput);
  addNewTask(newTodoInput);
  addNewTask(newTodoInput);
  getStorage().forEach((task) => {
    task.completed = true;
  });
  addNewTask(newTodoInput);
  trashCompleted();
  expect(getStorage().length).toBe(1);
});
