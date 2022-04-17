import { useState } from "react";
import styles from "./Todo.module.css";

function Todo({ todos }) {
  const [complete, setComplete] = useState(false);

  const disable = () => {
    setComplete(!complete);
  };
  return (
    <ul className={styles.list}>
      <button className={styles.content} disabled={complete} onClick={disable}>
        {todos}
      </button>
      <button onClick={disable}>dhk</button>
    </ul>
  );
}
export default Todo;
