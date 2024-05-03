import { PlusCircle } from "@phosphor-icons/react";
import styles from "./Form.module.css";

export function Form() {
  return (
    <form className={styles.form}>
      <input 
        placeholder="Adicione uma nova tarefa" 
        type="text" 
        name="task" 
        id="task" 
      />
      <button>Criar <PlusCircle size={20} color="var(--gray-100)"/></button>
    </form>
  )
}