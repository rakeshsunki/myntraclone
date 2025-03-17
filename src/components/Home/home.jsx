import styles from "./home.module.css";
import Products from "./products";
const HOME = () => {
  return (
    <>
      <div className={styles.herobackground}></div> {/*animation*/}
      <Products></Products>
    </>
  );
};
export default HOME;
