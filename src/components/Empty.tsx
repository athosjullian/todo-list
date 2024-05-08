import { ClipboardText } from "@phosphor-icons/react";
import style from "./Empty.module.css"

export function Empty() {
  return (
    <div className={style.empty}>
      <ClipboardText size={56} color="var(--gray-300)"/>
      <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}