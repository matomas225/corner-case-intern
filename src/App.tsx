import MainCard from "./Components/MainCard";
import { ReactElement, useEffect, useState } from "react";
import { ITodoItem } from "./Interfaces";
//Welcome to App
function App(): ReactElement {
  //States
  const [todoList, setTodoList] = useState<ITodoItem[]>([
    //store object in todoList state
    {
      number: 1,
      name: "Build test task",
      sideCards: [
        {
          name: "Create repository",
          //this will change depending if checkbox is clicked or not
          isChecked: false,
        },
        {
          name: "Implement designs",
          isChecked: false,
        },
        {
          name: "Implement functionality",
          isChecked: false,
        },
      ],
    },
    {
      number: 2,
      name: "Submit your test task",
      sideCards: [
        {
          name: "Open email client",
          isChecked: false,
        },
        {
          name: "Sent link with information to careers@cornercasetech.com",
          isChecked: false,
        },
      ],
    },
    {
      number: 3,
      name: "Participate in tech interview",
      sideCards: [
        {
          name: "Talk with HR",
          isChecked: false,
        },
        {
          name: "Talk with Tech Team",
          isChecked: false,
        },
      ],
    },
    {
      number: 4,
      name: "Receive answers",
      sideCards: [
        { name: "Receive anwsers", isChecked: false },
        {
          name: "Start your IT career",
          isChecked: false,
        },
      ],
    },
  ]);

  //Local Storage
  useEffect(() => {
    //if local storage is empty set local storage to todoList
    if (localStorage.getItem("todoList") === null) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    } else {
      //if local storage is set use it
      setTodoList(JSON.parse(localStorage.getItem("todoList") || "[]"));
    }
  }, []);

  return (
    <div className="App">
      <h1>CCT Lab Process</h1>
      <ul>
        {/* maping todo list */}
        {todoList.map((mainCard: ITodoItem, index: number) => {
          return (
            // passing props to main card
            <MainCard
              mainCardIndex={index}
              mainCard={mainCard}
              todoList={todoList}
              setTodoList={setTodoList}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
