import { useEffect, useState } from "react";

function App() {
  //States

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [imgSrc, setImgSrc] = useState<string>("");
  const [border, setBorder] = useState<string>("200px");
  //Local Storage

  //Functions

  const clickHandle = () => {
    if (isClicked === false) {
      setIsClicked(true);
      setBorder("300px");
      console.log(border);
    } else if (isClicked === true) {
      setIsClicked(false);
      setBorder("200px");
      console.log(border);
    }
  };
  const checkHandle = () => {
    if (isChecked === false) {
      setIsChecked(true);
    } else if (isChecked === true) {
      setIsChecked(false);
    }
  };

  //UseEffects

  useEffect(() => {
    if (isChecked === true) {
      setImgSrc("./Img/CircleChecked.svg");
    } else if (isChecked === false) {
      setImgSrc("./Img/Circle.svg");
    }
  }, [isChecked]);
  return (
    <div className="App">
      <h1>CCT Lab Process</h1>
      <ul>
        <li>
          <div className="main-card" onClick={clickHandle}>
            <h1>1</h1>
            <p>Build test task</p>
            <div className="border" style={{ width: border }}></div>
            <div className="list"></div>
          </div>
          <div className="side-card">
            <img src={imgSrc} alt="check-box" onClick={checkHandle} />
            <p>Create repository</p>
          </div>
          <div className="side-card">
            <img src={imgSrc} alt="check-box" onClick={checkHandle} />
            <p>Create repository</p>
          </div>
          <div className="side-card">
            <img src={imgSrc} alt="check-box" onClick={checkHandle} />
            <p>Create repository</p>
          </div>
        </li>
        <li>
          <div className="main-card" onClick={clickHandle}>
            <h1>1</h1>
            <p>Build test task</p>
            <div className="border" style={{ width: border }}></div>
            <div className="list"></div>
          </div>
          <div className="side-card">
            <img src={imgSrc} alt="check-box" onClick={checkHandle} />
            <p>Create repository</p>
          </div>
          <div className="side-card">
            <img src={imgSrc} alt="check-box" onClick={checkHandle} />
            <p>Create repository</p>
          </div>
          <div className="side-card">
            <img src={imgSrc} alt="check-box" onClick={checkHandle} />
            <p>Create repository</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
