import routers from './router'
import { useRoutes } from 'react-router-dom'

import './App.less'

function App() {
  const routes = useRoutes(routers)

  return <section className="h-full">{routes}</section>
}

export default App
