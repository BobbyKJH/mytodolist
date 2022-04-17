import Nav from "../components/Nav";
import styles from "./MonthTodo.module.css";
import TodoList from "../components/TodoList";
function MonthTodo() {
  return (
    <>
      <Nav />

      <div className={styles.todo}>
        <TodoList
          name={"MONTH TODO"}
          todo={"MONTH TODO"}
          list={"Add this Month's List"}
        />
      </div>
    </>
  );
}
export default MonthTodo;
