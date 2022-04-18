import { useState } from "react";
import styles from "./Detail.module.css";

function Detail() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const InputList = (e) => {
    setInput(e.target.value);
  };

  const ListFile = (e) => {
    e.preventDefault();
    setList((current) => {
      return [...current, input];
    });
    setInput("");
  };
  return (
    <div className={styles.box}>
      <input
        className={styles.input}
        type="text"
        onChange={InputList}
        value={input}
      />

      <button onClick={ListFile}>추가하기</button>

      <p>
        {list.map((list) => (
          <p>{list}</p>
        ))}
      </p>
    </div>
  );
}
export default Detail;
