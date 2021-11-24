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
  const [imgSrc, setImgSrc] = useState<string>("");
  const [sideIsClicked, setSideIsClicked] = useState<boolean>(false);

  //changing checkbox image depending on sideCard.isChecked boolean
  useEffect(() => {
    if (sideIsClicked) {
      setImgSrc(checked);
    } else if (!sideIsClicked) {
      setImgSrc(notchecked);
    }
  }, [mainIsClicked]);

  //changing sideCards isChecked boolean depending on if it's clicked, then storing it to localStorage
  const checkHandle = () => {
    if (!sideIsClicked) {
      setSideIsClicked(true);
      setImgSrc(checked);
    } else if (sideIsClicked) {
      setSideIsClicked(false);
      setImgSrc(notchecked);
    }
  };

  return (
    <div>
      <div
        className={
          mainIsClicked !== mainCardIndex ? "side-card-closed" : "side-card"
        }
      >
        <img src={imgSrc} alt="check-box" onClick={checkHandle} />
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
