import { ReactElement, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  display: string;
  sideCardName: string;
}
function SideCard({ display, sideCardName }: Props): ReactElement {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [imgSrc, setImgSrc] = useState<string>("");

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    if (isChecked) {
      setImgSrc("./Img/CircleChecked.svg");
    } else if (!isChecked) {
      setImgSrc("./Img/Circle.svg");
    }
  }, [isChecked]);

  const checkHandle = () => {
    if (!isChecked) {
      setIsChecked(true);
    } else if (isChecked) {
      setIsChecked(false);
    }
  };
  return (
    <div>
      <div className="side-card" style={{ display: display }}>
        <img src={imgSrc} alt="check-box" onClick={checkHandle} />
        <p>{sideCardName}</p>
      </div>
    </div>
  );
}

export default SideCard;
