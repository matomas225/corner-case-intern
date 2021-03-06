import { ReactElement, useEffect, useState } from "react";
import { ISideCard, ITodoItem } from "../Interfaces";
import checked from "../img/CircleChecked.svg";
import notchecked from "../img/Circle.svg";
import MainCard from "./MainCard";

//Seting prop types
interface Props {
  sideCard: ISideCard;
  mainIsClicked: number | null;
  sideCardIndex: number;
  mainCardIndex: number;
}
function SideCard({
  sideCard,
  mainIsClicked,
  mainCardIndex,
}: Props): ReactElement {
  //states
  const [sideIsClicked, setSideIsClicked] = useState<boolean>(false);

  //changing sideCards isChecked boolean depending on if it's clicked, then storing it to localStorage
  const checkHandle = () => {
    if (!sideIsClicked) {
      setSideIsClicked(true);
    } else if (sideIsClicked) {
      setSideIsClicked(false);
    }
  };

  return (
    <div>
      <div
        className={
          mainIsClicked !== mainCardIndex ? "side-card-closed" : "side-card"
        }
      >
        <img
          src={sideIsClicked ? checked : notchecked}
          alt="check-box"
          onClick={checkHandle}
        />
        <p>
          {sideCard.name}
          {/* Displaying link if link is in the sideCard */}
          {"email coming soon" ? (
            <a className="email-link" href={`mailto:${""}`}>{` ${""} `}</a>
          ) : (
            ""
          )}
        </p>
      </div>
    </div>
  );
}

export default SideCard;
