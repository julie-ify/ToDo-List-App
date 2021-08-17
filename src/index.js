import _ from 'lodash';
import './style.css';

<li class="list" draggable="true">
            <div class="div1">
              <input
                type="checkbox"
                name="check1"
                id="checkbox-1"
                class="check"
              />
              <label class="label">Eat food</label>
              <span class="dot"><i class="fas fa-ellipsis-v"></i></span>
            </div>
            <div class="div2">
              <input
                type="checkbox"
                name="check1"
                id="checkbox-1"
                class="check"
              />
              <label class="label">Eat food</label>
              <span class="delete"><i class="far fa-trash-alt"></i></span>
            </div>
          </li>

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
    
  }
}