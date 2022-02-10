import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

//import { getSlice } from "../../store/todo";
import { getList } from "../../store/todo";
import TodoItem from "../TodoItem";

const TodoListContainer = styled("div")`
  margin: 4px 0px;
  font-size: 14px;

  > ul {
    margin: 0px;
    padding: 0px;

    > li:not(:last-child) {
      margin-bottom: 6px;
      border-bottom: ${(props) => props.theme.borderbottom.bb};
    }
  }
`;

const TodoList = () => {
  //const { todoList } = useSelector(getSlice);
  const list  = useSelector(getList);
  return (
    <TodoListContainer   >
      <ul>
        {list?.map((list) => (
          <TodoItem 
           key={list.id} {...list} />
        ))}
      </ul>
    </TodoListContainer>
  );
};

export default TodoList;
