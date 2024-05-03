import styles from "./ListHeader.module.css"

export function ListHeader() {
  return (
    <div className={styles['list-header']}>
      <p className={styles['tasks-created']}>Tarefas criadas<span>0</span></p>
      <p className={styles['tasks-done']}>Concluídas<span>0</span></p>
    </div>
  )
}