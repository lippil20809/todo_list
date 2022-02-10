import React from "react";
import styled from "styled-components";
import TodoList from "../../components/TodoList";
import TodoForm from "../TodoForm";
import Filter from "../Filter/Filter";

const Container = styled("div")`
  width: 100%;
  max-width: 600px;
  margin: 8px auto;
`;

const TodoListContainer = () => {
  return (
    <Container>
      <Filter/>
      <TodoForm/>
      <TodoList/>
    </Container>
  );
};

export default TodoListContainer;
