import "./global.css"
import styles from "./App.module.css"

import { Header } from "./components/Header"
import { Form } from "./components/Form"
import { ListHeader } from "./components/ListHeader"

export function App() {

  return (
    <>
      <Header />
      <section className={styles.wrapper}>
        <Form />

        <div>
          <ListHeader />
        </div>
      </section>
    </>
  ) 
}
