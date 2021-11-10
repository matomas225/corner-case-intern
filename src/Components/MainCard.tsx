import { ReactElement, useState } from "react";
import SideCard from "./SideCard";
import { ITodoItem } from "../Interfaces";

//setting main card prop types
interface Props {
  mainCardIndex: number;
  mainCard: { number: number; name: string };
  todoList: ITodoItem[];
  setTodoList: React.Dispatch<React.SetStateAction<ITodoItem[]>>;
}
function MainCard({ mainCardIndex, mainCard, todoList, setTodoList }: Props): ReactElement {
  //States
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [border, setBorder] = useState<string>("200px");
  const [display, setDisplay] = useState<boolean>(false);

  //Setting States depending if checkbox is clicked
  const clickHandle = () => {
    if (!isClicked) {
      setIsClicked(true);
      setBorder("300px");
      setDisplay(true);
    } else if (isClicked) {
      setIsClicked(false);
      setBorder("200px");
      setDisplay(false);
    }
  };

  return (
    <div>
      <li>
        <div className="main-card" style={{ margin: "0px 0px 0px 0px" }} onClick={clickHandle}>
          <h1>{mainCard.number}</h1>
          <p>{mainCard.name}</p>
          {/* using border state as width */}
          <div className="border" style={{ width: border }}></div>
        </div>
        {/* maping todo list to get sideCards from mainCard */}
        {todoList[mainCardIndex].sideCards.map(
          (sideCard: { name: string; isChecked: boolean; link?: string }, index: number) => {
            return (
              <SideCard
                display={display}
                sideCard={sideCard}
                key={index}
                setTodoList={setTodoList}
                todoList={todoList}
                sideCardIndex={index}
                mainCardIndex={mainCardIndex}
              />
            );
          }
        )}
      </li>
    </div>
  );
}

export default MainCard;
