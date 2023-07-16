import style from "./Header.module.css";
import { Edit } from "../../assets/Icons";

import { useState } from "react";

import Divider from "../UI/Divider";
import HeaderEditor from "./HeaderEditor";


const Header = (props) => {
  const [isHover, setIsHover] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const hoverEnterHandler = () => {
    setIsHover(true);
  }
  const hoverExitHandler = () => {
    setIsHover(false);
  }

  const enableEditModeHandler = () => {
    setIsEditMode(true);
  }
  const disableEditModeHandler = () => {
    setIsEditMode(false);
  }


  return (
    <>
      <section className={style.header} onMouseEnter={hoverEnterHandler} onMouseLeave={hoverExitHandler} onDoubleClick={enableEditModeHandler}>
        {!isEditMode ? <h1>{props.label}</h1> : <HeaderEditor text={props.label} onBlur={disableEditModeHandler} onTitleUpdate={props.onTitleChange}/>}
        <span className={style.icon} onClick={enableEditModeHandler}>{isHover && !isEditMode && <Edit/>}</span>
      </section>
      <Divider/>
    </>
  );
};

export default Header;
