import  {api}  from "../shared/api";
import  {url}  from "../shared/url";
import { useEffect, useState } from "react";
import { SmallBtn, TodoDiv,Checkbox ,TodoText} from "./../style.js";


function Todo ({ todoContent, getTodoList }) {
    const [clickEdit, setClickEdit] = useState(false);
    const [updateTodo, setUpdateTodo] = useState(todoContent.todo);
    const [disableInput, setDisableInput] = useState('disable')

    useEffect(() => {
      setUpdateTodo(todoContent.todo);
    }, []);
  
    const DeleteTodo = () => {
      api
        .delete(`${url.Todo}/${todoContent.id}`, {
          headers: {
            Authorization: `Bearer ${url.ACCESS_TOKEN}`,
          },
        })
        .then((res) => {
          getTodoList();
        })
        .catch((error) => {});
    };
  
    const editTodo = () => {
        api
        .put(
          `${url.Todo}/${todoContent.id}`,
          {
            todo: updateTodo,
            isCompleted: todoContent.isCompleted,
          },
          {
            headers: {
              Authorization: `Bearer ${url.ACCESS_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
            setClickEdit(false);
            setDisableInput('disable');
            getTodoList();
        })
        .catch((error) => {});
    };
  
    const handleCheck = (event) => {
      api
        .put(
          `${url.Todo}/${todoContent.id}`,
          {
            todo: todoContent.todo,
            isCompleted: event.target.checked,
          },
          {
            headers: {
              Authorization: `Bearer ${url.ACCESS_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          getTodoList();
        })
        .catch((error) => {});
    };
    return (
      <div>
        {clickEdit ? (
          <TodoDiv>
            <Checkbox
            type='checkbox'
            checked={todoContent.isCompleted}
            onChange={handleCheck}
            />
            <TodoText
            className = {`todo-text-${disableInput}`}
            disabled={disableInput}
            value={updateTodo}
            onChange={(e) => setUpdateTodo(e.target.value)}
            completed='default'
            />
            <SmallBtn onClick={()=>{editTodo();setDisableInput(''); }}> 수정</SmallBtn>
            <SmallBtn onClick={() => {setClickEdit(false); setDisableInput('disable'); }} >취소</SmallBtn>
          </TodoDiv>
        ) : (
          <TodoDiv>
            <Checkbox
            type='checkbox'
            checked={todoContent.isCompleted}
            onChange={handleCheck}
            />
            <TodoText 
            className = {`todo-text-${disableInput}`}
            disabled={disableInput}
            value={todoContent.todo}
            completed={todoContent.isCompleted ? "line-through" : "default"}
            />
            <SmallBtn onClick={()=>{setClickEdit(true);setDisableInput(''); }} >수정</SmallBtn>
            <SmallBtn  onClick={DeleteTodo} >{" "}삭제</SmallBtn>
          </TodoDiv>
        )}
      </div>
    );
  };
  
 export default Todo;
