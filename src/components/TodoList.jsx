import { useState, useEffect } from "react";
import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList({ name, todo, list }) {
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
      alert(list);
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
        <button onClick={onChangeSubmit} className={styles.btn}>
          추가하기
        </button>

        <hr />
        {toDos.map((todos) => (
          <Todo todos={todos} />
          // <ul className={styles.list}>
          //   <p>{todo}</p>
          //   <button>완료</button>
          // </ul>
        ))}
      </form>
    </div>
  );
}
export default TodoList;
