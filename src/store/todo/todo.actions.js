export const CREAT_TODO = "CREAT_TODO";

export const createTodo = (title) => ({
  type: CREAT_TODO,
  payload: title,
});

export const CREAT_DONE = "CREAT_DONE";

export const createDone = (id) => ({
  type: CREAT_DONE,
  payload: id,
});

export const CREAT_DELETE = "CREAT_DELETE";

export const createDelete = (id) => ({
  type: CREAT_DELETE,
  payload: id,
});

export const CREAT_EDIT = "CREAT_EDIT";

export const createEdit = (title) => ({
  type: CREAT_EDIT,
  payload: title,
});

export const CREAT_SAVE = "CREAT_SAVE";

export const createSave = (title, id) => ({
  type: CREAT_SAVE,
  payload: { title, id },
});

export const CREAT_CLICK = "CREAT_CLICK";

export const createClick = (filterStatus) => ({
  type: CREAT_CLICK,
  payload: filterStatus,
});

export const CREAT_FILTER = "CREAT_FILTER";

export const createFilter = (filterValue) => ({
  type: CREAT_FILTER,
  payload: filterValue,
});
