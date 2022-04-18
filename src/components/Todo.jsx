import { useState } from "react";
import Detail from "./Detail";
import styles from "./Todo.module.css";

function Todo({ todos }) {
  // Check List useState
  const [complete, setComplete] = useState("none");
  // 자세한 내용
  const [detail, setDetail] = useState(false);

  // Check List function
  const disable = () => {
    if (complete === "none") {
      setComplete("line-through");
      setDetail(false);
    } else {
      setComplete("none");
    }
  };

  // Check List Delete
  const Content = () => {
    if (complete === "line-through") {
      setDetail(false);
    } else {
      setDetail(!detail);
    }
  };

  return (
    <ul className={styles.list}>
      <button
        className={styles.content}
        onClick={Content}
        style={{ textDecoration: complete }}
      >
        {todos}
      </button>
      {detail && <Detail />}
      <button className={styles.btn} onClick={disable}>
        완료
      </button>
      <button className={styles.btn}>삭제</button>
      <hr />
    </ul>
  );
}
export default Todo;
