import  {api}  from "../shared/api";
import  {url}  from "../shared/url";
import { useNavigate} from "react-router-dom"
import { useEffect, useState } from "react";


function Todo (){
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [ableInput, setAbleInput] = useState(false);
    const [updateTodo, setUpdateTodo] = useState(todo.todo)
    const navigate = useNavigate();
  
  
    const getTodoList = () => {
      api
        .get(`${url.Todo}`, {
          headers: {
            Authorization: `Bearer ${url.ACCESS_TOKEN}`,
          },
        })
        .then((res) => {
          setTodoList(res.data);
        })
        .catch((e) => {
          console.log("error = ", e);
        });
    };
  
    useEffect(() => {
      if (!localStorage.getItem(url.TOKEN_NAME)) {
        navigate("/");
      } else {
        getTodoList();
      }
    }, []);
  
    const onSubmit = async (event) => {
      event.preventDefault();
      api
        .post(
          `${url.Todo}`,
          {
            todo: todo,
          },
          {
            headers: {
              Authorization: `Bearer ${url.ACCESS_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          setTodoList([...todoList, res.data]);
          setTodo("");
        })
        .catch((e) => {
          console.log("error = ", e);
        });
    };
    console.log("todoList = ", todoList);

    const deleteTodo = () => {
    api
      .delete(`${url.Todo}/${todo.id}`, {
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
        `${url.Todo}/${todo.id}`,
        {
          todo: updateTodo,
          isCompleted: todo.isCompleted,
        },
        {
          headers: {
            Authorization: `Bearer ${url.ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setAbleInput(false);
        getTodoList();
      })
      .catch((error) => {});
  };

    return (
        <>
        <form onSubmit= {onSubmit} >
        <div> To Do List 입니다</div>

        <input
            type='text'
            value={todo}
            placeholder='To Do List를 작성해주세요'
            onChange={(e) => {
              setTodo(e.target.value);
            }}
            required
          />

          <div className="todo">
          {todoList.map((todo) => { return (
            <div id={todo.id} >{todo.todo}</div>
          )
        })}

            </div>
        <button type='submit'>수정</button>

      <button type='submit'>저장</button>
        </form>
        </>
    )
}
export default  Todo;