import Nav from "../components/Nav";
import TodoList from "../components/TodoList";
import styles from "./TodayTodo.module.css";

function TodayTodo() {
  return (
    <>
      <Nav />

      <div className={styles.todo}>
        <TodoList name={"TODAY TODO"} todo={"TODAY TODO"} />
      </div>
    </>
  );
}
export default TodayTodo;
