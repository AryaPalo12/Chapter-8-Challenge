import React from "react";
import def_img from "../Images/def_img.png";
import Button from "./Button";

const Cards = (props) => {
  const { title, body, onClick, id, link } = props;
  return (
    <div key={id} className={"boxStyle"}>
      {/* This onClick to create synchronize onClick with its' parent component*/}
      <div onClick={onClick}>
        <div>
          <img className={"image"} src={def_img} alt={"something"}></img>
        </div>
        <div className={"titleFont"}>{title.toUpperCase()}</div>
        <hr className={"spacing"} />
        <p className={"articleFont"}>{body}</p>
      </div>
      {props.editEnabled ? (
        <>
          <Button
            color={"success"}
            name={"Edit"}
            linkButton={true}
            link={`/blogs/edit/${link}`}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Cards;
