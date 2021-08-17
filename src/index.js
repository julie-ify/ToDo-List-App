import _ from 'lodash';
import './style.css';

const listContainer = document.querySelector('.container')
const toDoList = [
  {
    description: 'cook',
    completed: false,
    index: 0
  },
  {
    description: 'dance',
    completed: false,
    index: 1
  },
  {
    description: 'sing',
    completed: false,
    index: 2
  }
]        


function populateList() {
  let toDoListItems = toDoList;
  for(let i = 0; i < toDoListItems.length; i += 1) {
    let task = toDoListItems[i];
    let list = document.createElement('li');
    list.classList.add('list');
    list.id = task.id;
    list.draggable = true;
    let listFChild = document.createElement('div');
    listFChild.classList.add('div1');
    const input = document.createElement('input');
    input.classList.add('check');
    input.type = 'checkbox';
    input.name = 'check1'
    const label = document.createElement('label');
    label.classList.add('label');
    label.innerHTML = task.description;
    const span = document.createElement('span');
    span.classList.add('dot');
    const fontAwesome = document.createElement('i');
    fontAwesome.className += 'fas fa-ellipsis-v';
    span.appendChild(fontAwesome);
    list.appendChild(listFChild)
    listFChild.appendChild(input)
    listFChild.appendChild(label)
    listFChild.appendChild(span)
    listContainer.appendChild(list)
  }
}


listContainer.addEventListener('click', addNewTask);
function addNewTask(e) {
  const list = [...document.querySelectorAll('.list')];
  for (let i = 0; i < list.length; i += 1) {
    let task = list[i];
    if (e.target.checked === true) {
      e.target.nextElementSibling.classList.add('strike');
    } else {
      e.target.nextElementSibling.classList.remove('strike');
    }
  }
}
window.onload = populateList;