import  {api}  from "../shared/api";
import  {url}  from "../shared/url";
import { useNavigate} from "react-router-dom"
import { useEffect, useState } from "react";
import Todo from "./Todo"
import {     TodoListFormContainer,TodoListContainer,TodoListContainerInput,SmallBtn,TodoDiv } from "./../style.js"



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
          console.log(res)
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
      console.log("content",todoContent,todoList)
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
      <TodoListFormContainer>
        <TodoListContainer onSubmit= {onSubmit} >
          To Do List 
          <div > 
            <TodoListContainerInput
                type='text'
                placeholder='To Do List를 작성해주세요'
                onChange={(e) => {
                  setTodoContent(e.target.value);
                }}
                required
              />
            <SmallBtn>저장</SmallBtn>

              <div className="todo-list">
              {todoList.map((todo) => { return (
                <TodoDiv>
                    <Todo todoContent={todo} getTodoList={getTodoList} ></Todo>
                </TodoDiv>
              )
            })}

                </div>

          </div>
        </TodoListContainer>
      </TodoListFormContainer>
    )
}
export default  TodoList;