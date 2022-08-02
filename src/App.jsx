import { Header } from './components/Header'
import { Post } from './components/Post'

import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Marcelo Galdino"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, in rem! Aspernatur pariatur asperiores quos eaque magnam commodi doloremque voluptate?"
          />
          <Post
            author="Marcelo Galdino"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, in rem! Aspernatur pariatur asperiores quos eaque magnam commodi doloremque voluptate?"
          />
        </main>
      </div>
    </div>
  )
}

export default App
