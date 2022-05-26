import styles from '@/styles/app.module.scss'
import { useRoutes } from 'react-router-dom'
import router from "./router";

const App = () => {
  const page = useRoutes(router)

  return (
    <div className={styles.app}>
      {page}
    </div>
  )
}

export default App
