import Nav from "../components/Nav";
import styles from "./YearTodo.module.css";
import TodoList from "../components/TodoList";
function YearTodo() {
  return (
    <>
      <Nav />

      <div className={styles.todo}>
        <TodoList name={"YEAR TODO"} todo={"YEAR TODO"} />
      </div>
    </>
  );
}
export default YearTodo;
