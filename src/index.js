import './style.css';
import check from './check.js';
import addNewTask from './addlist.js';
import trashTask from './trashTask.js'
import {saveStorage, getStorage} from './storage.js';

const listContainer = document.querySelector('.container');
const addNewTaskInput = document.querySelector('#text');
const addNewTaskBtn = document.querySelector('.add');

const toDoList = [
  {
    description: 'cook',
    completed: false,
    index: 1,
  },
  {
    description: 'dance',
    completed: false,
    index: 2,
  },
  {
    description: 'sing',
    completed: false,
    index: 3,
  },
];

export const populateList = () => {

  while(listContainer.lastChild) {
    listContainer.removeChild(listContainer.lastChild);
  }

    const tasks = getStorage();

  if(tasks != null) {
    for (let i = 0; i < tasks.length; i += 1) {
      const list = document.createElement('li');
      list.classList.add('list');
      list.id = tasks[i].index;
      list.draggable = true;

      const listFChild = document.createElement('div');
      listFChild.classList.add('div1');
  
      const input = document.createElement('input');
      input.classList.add('check');
      input.type = 'checkbox';
      input.name = 'check1';
  
      if (tasks[i].completed) {
        input.checked = true;
      }
  
      const label = document.createElement('label');
      label.contentEditable = true;
      label.classList.add('label');
      label.innerHTML = tasks[i].description;
      label.style.textDecoration =
        tasks[i].completed === true ? 'line-through' : 'none';
  
      const span = document.createElement('span');
      span.classList.add('dot');
  
      const dot = document.createElement('i');
      dot.className += 'fas fa-ellipsis-v';
  
      const trash = document.createElement('span');
      trash.innerHTML = "<i class='fas fa-trash-alt'></i>";
      trash.style.display = 'none';
      trash.id = tasks.indexOf(tasks[i]);
  
      span.appendChild(dot);
      list.appendChild(listFChild);
      listFChild.appendChild(input);
      listFChild.appendChild(label);
      listFChild.appendChild(span);
      listFChild.appendChild(trash);
      listContainer.appendChild(list);
  
      label.addEventListener('focus', () => {
    
        span.style.display = 'none';
        trash.style.display = 'flex';
        label.style.textDecoration = 'none';

        trash.addEventListener('mousedown', (e) => {
          e.preventDefault()
          trashTask(parseInt(trash.id));
          
        })
      });
      label.addEventListener('blur', () => {
        span.style.display = 'flex';
        trash.style.display = 'none';
      });
  
      input.addEventListener('change', (e) => {
        check(e.target, tasks[i]);
        saveStorage(tasks);
      });
    }
  }
 
};

addNewTaskBtn.addEventListener('click', (e) => {
  e.preventDefault()
  addNewTask(addNewTaskInput)
})


window.onload = populateList;
//   const todoList = JSON.parse(localStorage.getItem('todo-list'));

//   if (todoList == null) {
//     populateList();
//   } else {
//     populateList();
//   }
// });
