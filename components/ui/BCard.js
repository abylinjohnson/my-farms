//@ts-nocheck
import classes from "./BCard.module.css";
import clickHandler from "../clickHandler";
function BCard(props) {
  const data = props.data;
  return (
    <div className={classes.card}>
      <h1>{data.title}</h1>
      <div className={classes.imag}>
        <img src={data.img} style={{ width: "650px", height: "360px" }}></img>
      </div>
      <p>{data.descrption}</p>
      <p>Author: {data.author}</p>
    </div>
  );
}

export default BCard;
