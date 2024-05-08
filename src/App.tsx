import "./global.css"
import styles from "./App.module.css"

import { Header } from "./components/Header"
import { Form } from "./components/Form"
import { ListHeader } from "./components/ListHeader"
import { Empty } from "./components/Empty"
import { Task } from "./components/Task"

export function App() {

  return (
    <>
      <Header />
      <section className={styles.wrapper}>
        <Form />

        <div>
          <ListHeader />
          <Empty />
          <Task />
        </div>
      </section>
    </>
  ) 
}
