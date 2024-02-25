import Styles from "./Card.module.css";

let Card = (props) => {
  return <div className={Styles.card}>{props.children}</div>;
};

export default Card;
