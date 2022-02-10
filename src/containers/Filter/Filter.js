import React from "react";
import styled from "styled-components";
import { useDispatch} from "react-redux";
import { createClick, createFilter } from "../../store/todo";
import Button from '../../components/Button'
import Input from "../../components/Input"


const FilterForm = styled("form")`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const ButtonsGroup = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 4px -4px 0;

  > button {
    margin: 4px;
    flex: 1;
  }
`;

const Filter = () => {
  const dispatch = useDispatch();
  

  const handleFilter = (e) => {
    dispatch(createFilter(e.target.value))
    
   };

  const handleAllClick = () => {
    dispatch(createClick('All'))
    
    
  };

  const handleDoneClick = () => {
    dispatch(createClick('Done'))
    
  };

  const handleDeleteClick = () => {
    dispatch(createClick('Delete'))
   
  };

  return (
    <FilterForm>
      <Input
        onChange={handleFilter}
        label="Поиск по названию"
        id="search"
        placeholder="Начни вводить"
      />
      <ButtonsGroup>
        <Button onClick={handleAllClick} variant="contained" type="button">
          Все
        </Button>
        <Button onClick={handleDoneClick} variant="contained" type="button">
          Выполненные
        </Button>
        <Button onClick={handleDeleteClick} variant="contained" type="button">
          Удалённые
        </Button>
      </ButtonsGroup>
    </FilterForm>
  );
};

export default Filter;
