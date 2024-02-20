import styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

let Header = () => {
  return (
    <>
      <header className={`${styles.header}`}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="a table full of food" />
      </div>
    </>
  );
};

export default Header;
