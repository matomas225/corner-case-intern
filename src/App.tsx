import MainCard from "./Components/MainCard";
import { ReactElement, useEffect, useState } from "react";
import { ITodoItem } from "./Interfaces";
function App(): ReactElement {
  //States
  const [todoList, setTodoList] = useState<ITodoItem[]>([
    {
      number: 1,
      name: "Build test task",
      sideCards: [
        "Create repository",
        "Implement designs",
        "Implement functionality",
      ],
    },
    {
      number: 2,
      name: "Submit your test task",
      sideCards: [
        "Open email client",
        "Sent link with information to careers@cornercasetech.com",
      ],
    },
    {
      number: 3,
      name: "Participate in tech interview",
      sideCards: ["Talk with HR", "Talk with Tech Team"],
    },
    {
      number: 4,
      name: "Receive answers",
      sideCards: ["Receive anwsers", "Start your IT career"],
    },
  ]);

  //Local Storage
  useEffect(() => {
    if (localStorage.getItem("todoList") === null) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    } else {
      setTodoList(JSON.parse(localStorage.getItem("todoList") || "[]"));
    }
  }, []);

  return (
    <div className="App">
      <h1>CCT Lab Process</h1>
      <ul>
        {todoList.map((mainCard: ITodoItem, index: number) => {
          return (
            <MainCard
              index={index}
              mainCard={mainCard}
              todoList={todoList}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
