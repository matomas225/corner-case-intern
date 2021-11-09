import { ReactElement, useState } from "react";
import SideCard from "./SideCard";
import { ITodoItem } from "../Interfaces";

interface Props {
  index: number;
  mainCard: { number: number; name: string };
  todoList: ITodoItem[];
}

function MainCard({ index, mainCard, todoList }: Props): ReactElement {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [border, setBorder] = useState<string>("200px");
  const [display, setDisplay] = useState<string>("none");

  const clickHandle = () => {
    if (!isClicked) {
      setIsClicked(true);
      setBorder("300px");
      setDisplay("flex");
    } else if (isClicked) {
      setIsClicked(false);
      setBorder("200px");
      setDisplay("none");
    }
  };

  return (
    <div>
      <li>
        <div className="main-card" onClick={clickHandle}>
          <h1>{mainCard.number}</h1>
          <p>{mainCard.name}</p>
          <div className="border" style={{ width: border }}></div>
        </div>
        {todoList[index].sideCards.map(
          (sideCardName: string, index: number) => {
            return (
              <SideCard
                display={display}
                sideCardName={sideCardName}
                key={index}
              />
            );
          }
        )}
      </li>
    </div>
  );
}

export default MainCard;
