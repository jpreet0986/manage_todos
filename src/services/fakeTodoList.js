import LocalStorageService from "./localStorageService";
// const todos = [
//   {
//     id: 1,
//     description: "Make Bed",
//   },
// ];
const service = LocalStorageService.getService();
const todoList = getTodoList();

export function getTodoList() {
  //const todoList1 = service.clearItem("TodoList");
  const todoList = service.getItem("TodoList");
  return todoList ? todoList : [];
}

export function getTodo(tid) {
  if (todoList.length) return todoList.find((td) => td.id === parseInt(tid));
  return;
}

export function saveTodo(stateTodo) {
  const todo = { ...stateTodo };
  if (!todo.id) {
    let lastID = todoList ? todoList.length : 0;
    todo.id = ++lastID;
    todoList.push(todo);
  } else {
    const todoInList = todoList.find((m) => m.id === todo.id);
    todoInList.description = todo.description;
  }
  service.setItem("TodoList", todoList);
  return todo;
}

export function deleteTodo(todo) {
  const todoIndex = todoList.findIndex((m) => m.id === todo.id);
  if (todoIndex) {
    todoList.splice(todoIndex, 1);
    service.setItem("TodoList", todoList);
    return todoList;
  }
}
