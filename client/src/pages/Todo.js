import  {api}  from "../shared/api";
import  {url}  from "../shared/url";
import { useEffect, useState } from "react";

function Todo ({ todoContent, getTodoList }) {
    const [clickEdit, setClickEdit] = useState(false);
    const [updateTodo, setUpdateTodo] = useState(todoContent.todo);
    const [diableInput, setDisableInput] = useState('disable')

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
          <div>
            <input
            type='checkbox'
            checked={todoContent.isCompleted}
            onChange={handleCheck}
            />
            <input
            disabled={diableInput}
            value={updateTodo}
            onChange={(e) => setUpdateTodo(e.target.value)}
            completed='default'
            />
            <button onClick={()=>{editTodo();setDisableInput(''); }}> 수정</button>
            <button onClick={() => {setClickEdit(false); setDisableInput('disable'); }} >취소</button>
          </div>
        ) : (
          <div>
            <input
            type='checkbox'
            checked={todoContent.isCompleted}
            onChange={handleCheck}
            />
            <input
            disabled={diableInput}
            value={todoContent.todo}
            completed={todoContent.isCompleted ? "line-through" : "default"}
            />
            <button onClick={()=>{setClickEdit(true);setDisableInput(''); }} >수정</button>
            <button onClick={DeleteTodo} >{" "}삭제</button>
          </div>
        )}
      </div>
    );
  };
  
  export default Todo;