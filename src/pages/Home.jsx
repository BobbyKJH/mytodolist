import Nav from "../components/Nav";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Nav />
      <div className={styles.welcome}>
        <div className={styles.cover}>
          <h1>Welcome TodoList</h1>
          <br />
          <br />
          <h2>Hello Everyone!! </h2>
          <p>
            The site is the site that produces your todolist. I hope you will
            make a list of your today week month to year to do and try it out.
          </p>
        </div>
      </div>
    </>
  );
}
export default Home;
