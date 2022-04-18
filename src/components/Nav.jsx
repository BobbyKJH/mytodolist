import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav({ home }) {
  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <Link to="/" className={styles.link}>
          <h1 className={styles.title}>HOME</h1>
        </Link>

        <hr />

        <Link to="/today" className={styles.link}>
          <h2 className={styles.content}>TODAY TODO</h2>
        </Link>

        <hr />

        <Link to="/week" className={styles.link}>
          <h2 className={styles.content}>WEEK TODO</h2>
        </Link>

        <hr />

        <Link to="/month" className={styles.link}>
          <h2 className={styles.content}>MONTH TODO</h2>
        </Link>

        <hr />

        <Link to="/year" className={styles.link}>
          <h2 className={styles.content}>YEAR TODO</h2>
        </Link>
      </div>
    </div>
  );
}
export default Nav;
