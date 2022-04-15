import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav({ home }) {
  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <Link to="/" className={styles.link}>
          <h2 className={styles.title}>HOME</h2>
        </Link>

        <Link to="/today" className={styles.link}>
          <h2 className={styles.content}>TODAY TODO</h2>
        </Link>

        <Link to="/week" className={styles.link}>
          <h2 className={styles.content}>WEEK TODO</h2>
        </Link>

        <Link to="/month" className={styles.link}>
          <h2 className={styles.content}>MONTH TODO</h2>
        </Link>

        <Link to="/year" className={styles.link}>
          <h2 className={styles.content}>YEAR TODO</h2>
        </Link>
      </div>
    </div>
  );
}
export default Nav;
