export const getSlice = (state) => state.todo;

export const  getList = (state) => {
    let list;
  
    if (state.todo.filterStatus === "All") {
      list = state.todo.todoList;
    }
   
    if (state.todo.filterStatus === "Done") {
      list = state.todo.todoList.filter((todo) => todo.completed === true);
    }
   
    if (state.todo.filterStatus === "Delete") {
      list = state.todo.deletedTodoList;
     
    }
    if (state.todo.filterValue) {
      list = list.filter((todo) =>
        todo.title
          .toLocaleLowerCase()
          .includes(state.todo.filterValue.toLocaleLowerCase())
      );
    }
    return list;
  };
 