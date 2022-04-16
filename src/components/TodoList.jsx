import { useState } from "react";
import styles from "./TodoList.module.css";

function TodoList({ name, todo }) {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChangeTodo = (e) => {
    setToDo(e.target.value);
  };
  const onChangeSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((current) => {
      return [...current, toDo];
    });
    setToDo("");
  };

  return (
    <div className={styles.main}>
      <h1>{name}</h1>
      <form onSubmit={onChangeSubmit} className={styles.todo}>
        <input
          type="text"
          placeholder={todo}
          onChange={onChangeTodo}
          value={toDo}
          className={styles.input}
        />
        <button onClick={onChangeSubmit}>추가하기</button>
        <p>{toDo}</p>
        <hr />
        {toDos.map((todo) => (
          <ul className={styles.list}>{todo}</ul>
        ))}
      </form>
    </div>
  );
}
export default TodoList;
