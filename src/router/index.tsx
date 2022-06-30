import { RouteObject } from 'react-router-dom'
import Layout from '../components/common/Layout'
import Home from '../views/Home'
import { Resources } from '../views/Resources'
import { Solutions } from '../views/Solutions'
import SupplyChainControlTower from '../views/SupplyChainControlTower'

const routers: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/solutions',
        element: <Solutions />,
        children: [],
      },
      {
        path: '/resources',
        element: <Resources />,
        children: [],
      },
      {
        path: '/SupplyChainControlTower',
        element: <SupplyChainControlTower />,
        children: [],
      },
    ],
  },
]

export default routers
