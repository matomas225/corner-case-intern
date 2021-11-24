import { ReactElement } from "react";
import SideCard from "./SideCard";
import { ITodoItem } from "../Interfaces";

//setting main card prop types
interface Props {
  mainCardIndex: number;
  mainCard: any;
  mainIsClicked: number | null;
  setMainIsClicked: React.Dispatch<React.SetStateAction<number | null>>;
}
function MainCard({
  mainCardIndex,
  mainCard,
  mainIsClicked,
  setMainIsClicked,
}: Props): ReactElement {
  //States

  //Setting States depending if checkbox is clicked
  const clickHandle = () => {
    if (mainCardIndex === mainIsClicked) {
      return setMainIsClicked(null);
    }
    setMainIsClicked(mainCardIndex);
  };

  return (
    <div>
      <li>
        <div
          className="main-card"
          style={{ margin: "0px" }}
          onClick={clickHandle}
        >
          <h1>{mainCard.id}</h1>
          <p>{mainCard.name}</p>
          <div
            className={
              mainIsClicked !== mainCardIndex ? "border" : "border-long"
            }
          ></div>
        </div>
        {/* maping todo list to get sideCards from mainCard */}
        {mainCard.sideCards.map((sideCard: { name: string }, index: number) => {
          return (
            <SideCard
              sideCard={sideCard}
              sideCardIndex={index}
              mainCardIndex={mainCardIndex}
              key={index}
              mainIsClicked={mainIsClicked}
            />
          );
        })}
      </li>
    </div>
  );
}

export default MainCard;
