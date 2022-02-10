import { v4 as uuidv4 } from "uuid";
import {
  CREAT_TODO,
  CREAT_DONE,
  CREAT_DELETE,
  CREAT_SAVE,
  CREAT_CLICK,
  CREAT_FILTER,
} from "./todo.actions";

export const initialStates = {
  todoList: [],
  deletedTodoList: [],
  filterValue: "",
  filterStatus: "All",
};

export const todoReducer = (state = initialStates, action) => {
  switch (action.type) {
    case CREAT_TODO:
      return {
        ...state,
        todoList: state.todoList.concat({
          id: uuidv4(),
          title: action.payload,
          completed: false,
        }),
      };
    case CREAT_DONE:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: true } : todo
        ),
      };
    case CREAT_DELETE:
      console.log(action.payload);
      const deletedTodoIndex = state.todoList.findIndex(
        (todo) => todo.id === action.payload
      );
      const deletedTodo = state.todoList.splice(deletedTodoIndex, 1);
      return {
        ...state,
        todoList: [...state.todoList],
        deletedTodoList: state.deletedTodoList.concat(deletedTodo),
      };
    case CREAT_SAVE:
      const newTodo = state.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
        }
        return todo;
      });
      return {
        ...state,
        todoList: newTodo,
      };
    case CREAT_CLICK:
      return {
        ...state,
        filterStatus: action.payload,
      };
    case CREAT_FILTER:
      return {
        ...state,
        filterValue: action.payload,
      };
    default:
      return state;
  }
};

