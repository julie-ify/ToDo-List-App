const saveStorage = (items) => {
  localStorage.setItem('todo-list', JSON.stringify(items));
}

export default saveStorage;