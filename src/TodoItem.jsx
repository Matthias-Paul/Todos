import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete() {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name){
  const newArray = todos.map((todo)=>
    todo.name === name? {...todo, done: !todo.done}:todo)
    setTodos(newArray)
  }
  const className = item.done? styles.completed: "";
  return (
    <>
      <div className={styles.item}>
        <div className={styles.itemName}>
         <span className={className} onClick={()=> handleClick(item.name)}>{item.name}</span> 
       
        </div>
        <div>
            <button
              onClick={() => handleDelete(item)}
              className={styles.deleteButton}
            >
              X
            </button>
          </div>
        <hr className={styles.line}></hr>
      </div>
    </>
  );
}
