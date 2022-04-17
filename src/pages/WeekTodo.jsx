import Nav from "../components/Nav";
import styles from "./WeekTodo.module.css";
import TodoList from "../components/TodoList";
function WeekTodo() {
  return (
    <>
      <Nav />

      <div className={styles.todo}>
        <TodoList
          name={"WEEK TODO"}
          todo={"WEEK TODO"}
          list={"Add this Week's List"}
        />
      </div>
    </>
  );
}
export default WeekTodo;
