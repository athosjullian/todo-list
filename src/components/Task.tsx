import { Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css"

export function Task() {
    return (
        <div className={styles.task}>
            <div>
                <label>
                    <input type="checkbox" name="completed" value="complete" />
                    <span className={styles.checkmark}></span>
                </label>
                <p>Task Name</p>
            </div>
            <Trash size={24} color="var(--gray-300)"/>
        </div>
    )
}