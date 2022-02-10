import React, { useState, useCallback,useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useLocales } from "../../providers/LocalesProvider";

import { useTheme } from "../../providers/ThemeProvider";
import { createTodo } from "../../store/todo";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Form = styled("form")`
  margin: 0px;
  padding: 4px;
`;

const TodoForm = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
 
  const {trans,toggleLang} = useLocales()
  const { toggleTheme } = useTheme();

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createTodo(value));
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={value}
        onChange={handleChange}
        label={trans.label}
        placeholder={trans.placeholder}
        id="task"
      />
      <Button type="submit">{trans.createButton}</Button>
      <Button onClick={toggleLang} type="button">{trans.changeLang}</Button>
      <Button onClick={toggleTheme} type="button">{trans.changeTheme}</Button>
    </Form>
  );
};

export default TodoForm;
