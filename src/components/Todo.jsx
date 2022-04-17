import { useState } from "react";
import styles from "./Todo.module.css";

function Todo({ todos }) {
  // Check List useState
  const [complete, setComplete] = useState("none");

  // Check List function
  const disable = () => {
    if (complete === "none") {
      setComplete("line-through");
    } else {
      setComplete("none");
    }
  };

  return (
    <ul className={styles.list}>
      <button
        className={styles.content}
        onClick={disable}
        style={{ textDecoration: complete }}
      >
        {todos}
      </button>
      <button onClick={disable}>dhk</button>
    </ul>
  );
}
export default Todo;
