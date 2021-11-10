import { ReactElement, useEffect, useState } from "react";
import { ITodoItem } from "../Interfaces";

//Seting prop types
interface Props {
  display: boolean;
  sideCard: { name: string; isChecked: boolean };
  setTodoList: React.Dispatch<React.SetStateAction<ITodoItem[]>>;
  todoList: ITodoItem[];
  sideCardIndex: number;
  mainCardIndex: number;
}
//using props with Props interface
function SideCard({
  display,
  sideCard,
  setTodoList,
  todoList,
  sideCardIndex,
  mainCardIndex,
}: Props): ReactElement {
  //states
  const [imgSrc, setImgSrc] = useState<string>("");

  //style depending on display state
  const style = {
    transform: !display ? "scaleY(0)" : "scaleY(1)",
    margin: !display ? "0px" : "15px 0px 15px 0px",
    maxHeight: !display ? "0px" : "150px",
    opacity: !display ? "0" : "1",
  };
  //changing checkbox image depending on sideCard.isChecked boolean
  useEffect(() => {
    if (sideCard.isChecked) {
      setImgSrc("./Img/CircleChecked.svg");
    } else if (!sideCard.isChecked) {
      setImgSrc("./Img/Circle.svg");
    }
  }, [todoList]);

  //changing sideCards isChecked boolean depending on if it's clicked, then storing it to localStorage
  const checkHandle = () => {
    if (!sideCard.isChecked) {
      let newTodoList = [...todoList];
      newTodoList[mainCardIndex].sideCards[sideCardIndex].isChecked = true;
      setTodoList(newTodoList);
      localStorage.setItem("todoList", JSON.stringify(todoList));
    } else if (sideCard.isChecked) {
      let newTodoList = [...todoList];
      newTodoList[mainCardIndex].sideCards[sideCardIndex].isChecked = false;
      setTodoList(newTodoList);
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }
  };
  return (
    // using style state as a style for side card
    <div style={style}>
      <div className="side-card" style={style}>
        {/* using imgSrc state as src and activating checkHandle onClick */}
        <img src={imgSrc} alt="check-box" onClick={checkHandle} />
        {/* displaying sideCard content */}
        <p>{sideCard.name}</p>
      </div>
    </div>
  );
}

export default SideCard;
