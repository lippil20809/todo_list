import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useLocales } from "../../providers/LocalesProvider";
import Button from "../Button";
import Input from "../Input";
import {
  createDone,
  createDelete,
  createSave,
} from "../../store/todo";

const TodoItemContainer = styled("li")`
  padding: 4px;
  background-color: ${({ completed }) => (completed ? "green" : "transparent")};
  color: ${(props) => props.theme.color.main};
  //border-bottom:  ${(props) => props.theme.backgroundColor.paper};

  > p {
    margin: 6px 0px 0px;
    font-size: 10px;
    color: ${(props) => props.theme.color.main};

  }
`;

const TodoItem = ({ title, completed, id }) => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState("view");
  
  const [value, setValue] = useState(title);
  const {trans} = useLocales()

  const handleDone = () => {
    dispatch(createDone(id));
  };
  const handleDelete = () => {
    dispatch(createDelete(id));
  };

 

  const handleValue = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleEdit = () => {
    setMode("edit");
  };

  const handleSave = () => {
    dispatch(createSave(value, id));
    setMode("view");
  };

  return (
    <TodoItemContainer completed={completed}>
      <div>
        {mode === "edit" ? (
          <form>
            <Input value={value} onChange={handleValue} id="task" />
            <Button onClick={handleSave} type="button">
              {trans.saveButton}
            </Button>
          </form>
        ) : (
          <p>{title}</p>
        )}

        <Button onClick={handleEdit} type="button">
          {trans.editButton}
        </Button>
        <Button onClick={handleDone} type="button">
          {trans.doneButton}
        </Button>
        <Button onClick={handleDelete} type="button">
          {trans.deleteButton}
        </Button>
      </div>
    </TodoItemContainer>
  );
};

export default TodoItem;

/*
{edit === id ? (
  <div>
    <Input value={value} onChange={handleValue} />
  </div>
) : (
  <p>{title}</p>
)}
{edit === id ? (
  <div>
    <Button
      //onClick={handleSaveTodo}
      variant="outlined"
      size="small"
      type="button"
    >
      Сохранить
    </Button>
  </div>
) : (
  <div>
    <Button onClick={handleEdit} type="button">
      Редактировать
    </Button>
    {!completed && (
      <Button onClick={handleDone} type="button">
        Выполнено
      </Button>
    )}
    <Button onClick={handleDelete} type="button">
      Удалить
    </Button>
  </div>
)}


const handleEdit = (id) => {
    setEdit(id);
   // setValue(title);
  };
*/
