import  {api}  from "../shared/api";
import  {url}  from "../shared/url";
import { useNavigate} from "react-router-dom"
import { useEffect, useState } from "react";
import Todo from "./Todo"


function TodoList (){
    const [todoContent, setTodoContent] = useState("");
    const [todoList, setTodoList] = useState([]);
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
            todo: todoContent,
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
            setTodoContent("");
        })
        .catch((e) => {
          console.log("error = ", e);
        });
    };

    return (
        <>
        <form onSubmit= {onSubmit} >
        <div> To Do List 입니다</div>

        <input
            type='text'
            placeholder='To Do List를 작성해주세요'
            onChange={(e) => {
              setTodoContent(e.target.value);
            }}
            required
          />

          <div className="todo">
          {todoList.map((todo) => { return (
            <div>
                <Todo todoContent={todo} getTodoList={getTodoList} ></Todo>
            </div>
          )
        })}

            </div>

      <button type='submit'>저장</button>
        </form>
        </>
    )
}
export default  TodoList;