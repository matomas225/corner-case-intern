import MainCard from "./Components/MainCard";
import { ReactElement, useState } from "react";
import { ITodoItem } from "./Interfaces";
import { ISideCard } from "./Interfaces";
function App(): ReactElement {
  //States
  const [mainIsClicked, setMainIsClicked] = useState<number | null>(null);
  const todoList: ITodoItem[] = [
    //store object in todoList state
    {
      id: 1,
      name: "Build test task",
      sideCards: [
        {
          name: "Create repository",
          //this will change depending if checkbox is clicked or not
        },
        {
          name: "Implement designs",
        },
        {
          name: "Implement functionality",
        },
      ],
    },
    {
      id: 2,
      name: "Submit your test task",
      sideCards: [
        {
          name: "Open email client",
        },
        {
          name: "Sent link with careers@cornercasetech.com information to",
        },
      ],
    },
    {
      id: 3,
      name: "Participate in tech interview",
      sideCards: [
        {
          name: "Talk with HR",
        },
        {
          name: "Talk with Tech Team",
        },
      ],
    },
    {
      id: 4,
      name: "Receive answers",
      sideCards: [
        { name: "Receive anwsers" },
        {
          name: "Start your IT career",
        },
      ],
    },
  ];

  return (
    <div className="App">
      <h1>CCT Lab Process</h1>
      <ul>
        {/* maping todo list */}
        {todoList.map((mainCard: ITodoItem, index: number) => {
          return (
            <MainCard
              mainCardIndex={index}
              mainCard={mainCard}
              mainIsClicked={mainIsClicked}
              setMainIsClicked={setMainIsClicked}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
